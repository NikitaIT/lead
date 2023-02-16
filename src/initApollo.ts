import {
  ApolloLink,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  NormalizedCacheObject,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// import fetch from 'isomorphic-unfetch';
// https://loudnoises.io/blog/next-js-two-apollo-clients-two-graphql-data-sources-the-easy-way
let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

// Polyfill fetch() on the server (used by apollo-client)
// if (!process.browser) {
//   global.fetch = fetch;
// }

const authLinkAuth = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the hesaders to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token && token !== 'undefined' ? `Bearer ${token}` : '',
    },
  };
});
// Create Second Link
const secondLink = new HttpLink({
  uri: 'http://localhost:4000/graphql', // getway
  // sheaders: yourHeadersHere,
  // other link options...
});
// Create First Link
const firstLink = new HttpLink({
  uri: 'http://localhost:5003/graphql-sub', // home-apis subscribers
  // headers: yourHeadersHere,
  // other link options...
});

function create(initialState: NormalizedCacheObject) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    connectToDevTools: true, // process.browser,

    // ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: authLinkAuth.concat(
      ApolloLink.split(
        // generator create all getway-service methods with this name
        (operation) => {
          console.log(operation.getContext());
          return operation.getContext().clientName === 'non-getway';
        }, // Routes the query to the proper client
        firstLink,
        secondLink
      )
    ),
    cache: new InMemoryCache().restore(initialState || {}),
  });
}

export default function initApollo(initialState: NormalizedCacheObject) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  // if (!process.browser) {
  //   return create(initialState);
  // }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
