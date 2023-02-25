import {
  ApolloLink,
  ApolloClient as BaseApolloClient,
  InMemoryCache,
  HttpLink,
  NormalizedCacheObject,
} from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { Config } from './Config';
import { LinkAuth, ErrorLogger, RequestLogger, Domain } from './domain';
import { isWebsocket, requestedClientIs } from './framework';
// Invariant Violation:
// "fetch" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:
import fetch from 'cross-fetch';

export class ApolloClient {
  // https://loudnoises.io/blog/next-js-two-apollo-clients-two-graphql-data-sources-the-easy-way
  constructor(
    private apolloClient: BaseApolloClient<NormalizedCacheObject> | null = null,
    private config: Config
  ) {}

  getOrCreate(initialState: NormalizedCacheObject) {
    // Make sure to create a new client for every server-side request so that data
    // isn't shared between connections (which would be bad)
    // if (!process.browser) {
    //   return create(initialState);
    // }

    // Reuse client on the client-side
    if (!this.apolloClient) {
      this.apolloClient = this.create(initialState);
    }

    return this.apolloClient;
  }
  create(initialState: NormalizedCacheObject) {
    const { apolloLink: authApolloLink } = new LinkAuth(this.config.auth);
    const If = ApolloLink.split;
    const pipe = ApolloLink.from;
    // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
    return new BaseApolloClient({
      name: this.config.name,
      version: this.config.version,
      connectToDevTools: true, // process.browser,

      // ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
      link: pipe([
        ...(this.config.logger
          ? [
              new RequestLogger(this.config.logger).apolloLink,
              new ErrorLogger(this.config.logger).apolloLink,
            ]
          : []),
        authApolloLink.concat(
          // generator create all getway-service methods with this name
          this.config.domains.reduce(
            (acc, x) =>
              If(
                requestedClientIs(x.name),
                If(isWebsocket, this.wsLink(x), this.httpLink(x)),
                acc
              ),
            this.getway
          )
        ),
      ]),
      cache: new InMemoryCache(this.config.inMemoryCacheConfig).restore(
        initialState || {}
      ),
    });
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
      fetch, // home-apis subscribers
      // headers: yourHeadersHere,
      // other link options...
    });
  }

  get getway(): ApolloLink {
    return new HttpLink({
      uri: `http://${this.config.getway}`,
      fetch, // getway
      // sheaders: yourHeadersHere,
      // other link options...
    });
  }
}
