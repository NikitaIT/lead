import {
  ApolloLink,
  ApolloClient as BaseApolloClient,
  InMemoryCache,
  HttpLink,
  NormalizedCacheObject,
  ApolloCache,
} from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { Config } from './Config';
import {
  LinkAuth,
  ErrorLogger,
  RequestLogger,
  Domain,
  QueueLink,
} from './domain';
import { isWebsocket, requestedClientIs } from './framework';
import { CachePersistor, LocalForageWrapper } from 'apollo3-cache-persist';
import localForage from 'localforage';

// Invariant Violation:
// "fetch" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:
import fetch from 'cross-fetch';

export class ApolloClient<
  TNormalizedCacheObject extends NormalizedCacheObject = NormalizedCacheObject
> {
  private persistor: CachePersistor<TNormalizedCacheObject>;
  private cache: ApolloCache<TNormalizedCacheObject>;
  private queueLink: QueueLink;
  // https://loudnoises.io/blog/next-js-two-apollo-clients-two-graphql-data-sources-the-easy-way
  constructor(
    private apolloClient: BaseApolloClient<TNormalizedCacheObject> | null = null,
    private config: Config,
    private initialState: TNormalizedCacheObject
  ) {
    this.cache = new InMemoryCache(this.config.inMemoryCacheConfig).restore(
      initialState || {}
      // it's expected cast because of initialState is generic
    ) as ApolloCache<NormalizedCacheObject> as ApolloCache<TNormalizedCacheObject>;
    this.persistor = new CachePersistor<TNormalizedCacheObject>({
      cache: this.cache,
      storage: new LocalForageWrapper(
        localForage.createInstance(this.config.localForageOptions)
      ),
    });
    this.queueLink = new QueueLink();
  }

  getOrCreate() {
    // Make sure to create a new client for every server-side request so that data
    // isn't shared between connections (which would be bad)
    // if (!process.browser) {
    //   return create(initialState);
    // }

    // Reuse client on the client-side
    if (!this.apolloClient) {
      this.apolloClient = this.create();
    }
    return this.apolloClient;
  }
  async initialize() {
    const client = this.getOrCreate();
    await this.persistor.restore();
    this.queueLink.on();
    client.onClearStore(async () => {
      await this.persistor.purge();
      this.queueLink.off();
    });
  }
  create() {
    const { apolloLink: authApolloLink } = new LinkAuth(this.config.auth);
    const If = ApolloLink.split;
    const pipe = ApolloLink.from;
    // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
    const client = new BaseApolloClient({
      // If you specify these values, Apollo Client automatically adds them to each operation request as HTTP headers (apollographql-client-name and apollographql-client-version).
      name: this.config.name,
      version: this.config.version,
      connectToDevTools: true, // process.browser,

      // ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
      link: authApolloLink.concat(
        // authApolloLink.concat should be first, because concat + split = 2 queries instead of one
        pipe([
          ...(this.config.logger
            ? [
                new RequestLogger(this.config.logger).apolloLink,
                new ErrorLogger(this.config.logger).apolloLink,
              ]
            : []),
          this.queueLink.apolloLink,
          // try https://github.com/habx/apollo-multi-endpoint-link
          // generator create all getway-service methods with this name
          this.config.domains.reduce(
            (acc, x) =>
              If(
                requestedClientIs(x.name),
                If(isWebsocket, this.wsLink(x), this.httpLink(x)),
                acc
              ),
            this.getway
          ),
        ])
      ),
      cache: this.cache,
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'cache-and-network',
        },
      },
    });
    return client;
  }

  wsLink({ link }: Domain) {
    return new GraphQLWsLink(
      createClient({
        url: `ws://${link}`,
        // should works with context link
        // connectionParams: () => {
        //   // Note: getSession() is a placeholder function created by you
        //   const token = localStorage.getItem('token');
        //   if (!token || token === 'undefined') {
        //     return {};
        //   }
        //   return {
        //     authorization: `Bearer ${token}`,
        //   };
        // },
      })
    );
  }
  httpLink({ link }: Domain) {
    return new HttpLink({
      uri: `http://${link}`,
      fetch: (window && window.fetch) || fetch, // home-apis subscribers
      // headers: yourHeadersHere,
      // other link options...
    });
  }

  get getway(): ApolloLink {
    return new HttpLink({
      uri: `http://${this.config.getway}`,
      fetch: (window && window.fetch) || fetch, // getway
      // sheaders: yourHeadersHere,
      // other link options...
    });
  }
}
