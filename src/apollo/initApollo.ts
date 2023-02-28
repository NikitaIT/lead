import { ApolloClient, Config, ConfigSchema } from '@lead/apollo-client';
import { assert } from '@lead/std';
import { getway, home, introspection } from '@lead/data-access';

import pkg from '../../package.json';
export function initApollo(): ApolloClient {
  assert(process.env.NX_AUTH_SERVER, 'Set .env NX_AUTH_SERVER');
  assert(process.env.NX_HOME_SERVER, 'Set .env NX_HOME_SERVER');
  assert(process.env.NX_GRID_SERVER, 'Set .env NX_GRID_SERVER');
  assert(process.env.NX_GETWAY_SERVER, 'Set .env NX_GETWAY_SERVER');
  assert(pkg.name, 'Set .package.json name');
  assert(pkg.version, 'Set .package.json version');
  // used to define fragments
  // TODO: how to merge it?
  // p.s. generator not works
  const possibleTypes = {
    ...home.default.possibleTypes,
    ...getway.default.possibleTypes,
  };

  // used to update related query
  // todo: generate additional keyFields from schema
  // todo: generate merge fn from microservice data schema (define which type+id is same, or we can use some convention on federation schema endpoints)
  const typePolicies: getway.StrictTypedTypePolicies = {
    // https://github.com/apollographql/apollo-client/issues/5876
    Home: {
      keyFields: ['id'],
    },
    User: {
      keyFields: ['id'],
    },
    Mutation: {
      fields: {
        createHome: {
          // read(existing, options) {
          //   return existing;
          // },
          // merge: (existingOrNotInCashRef, incomingRef, options) => {
          //   const userSended = options.variables?.payload;
          //   if (!existingOrNotInCashRef && incomingRef) {
          //     try {
          //       // 1. don't client.modify - circumvents any merge functions
          //       const client = options.cache;
          //       // read previos
          //       const data = client.readQuery<getway.HomesQuery>({
          //         query: getway.HomesDocument,
          //       });
          //       // const y = client.read({
          //       //   id: client.identify(incomingRef),
          //       //   optimistic: false,
          //       //   query: HomeAddedDocument,
          //       // });
          //       const incoming = client.readFragment({
          //         id: client.identify(incomingRef),
          //         fragment: getway.HomeCreatedFragmentDoc,
          //       });
          //       // if data = undefined then query not executed,
          //       // and we can skip it (for optimistic we should add read from cash fn, instead of this update)
          //       if (data) {
          //         options.cache.writeQuery({
          //           query: getway.HomesDocument,
          //           data: {
          //             homes: [incoming, ...(data.homes || [])],
          //           },
          //         });
          //       }
          //     } catch (e) {
          //       console.error(e); // todo: handle
          //     }
          //   }
          //   return options.mergeObjects(existingOrNotInCashRef, incomingRef);
          // },
        },
      },
    },
    Query: {
      fields: {
        home: {},
        homes: {
          // merge: (existingOrNotInCash, incoming, options) => {
          //   return incoming;
          // },
        },
      },
    },
  };
  const config: Config = {
    localForageOptions: {
      // https://localforage.github.io/localForage/
      // By default, localForage selects backend drivers for the datastore in this order:
      //  1. IndexedDB
      //  2. WebSQL
      //  3. localStorage
      name: 'Apollo Cache',
      version: parseInt(pkg.version.replaceAll('.', ''), 10),
      description: 'Apollo Cache',
      // driver?: string | string[];
      // size?: number;
    },
    name: pkg.name,
    version: pkg.version,
    domains: [
      {
        name: 'home',
        link: process.env.NX_HOME_SERVER,
      },
      {
        name: 'auth',
        link: process.env.NX_AUTH_SERVER,
      },
      {
        name: 'grid',
        link: process.env.NX_GRID_SERVER,
      },
    ],
    getway: process.env.NX_GETWAY_SERVER,
    logger: {
      errorCallback: console.error,
    },
    auth: {
      get token() {
        // get the authentication token from local storage if it exists
        const token = localStorage.getItem('token');
        return token && token !== 'undefined' ? token : '';
      },
    },
    // https://christianlydemann.com/graphql-cache-updates-made-easy/
    // https://www.freecodecamp.org/news/how-to-update-the-apollo-clients-cache-after-a-mutation-79a0df79b840/
    inMemoryCacheConfig: {
      typePolicies,
      possibleTypes,
    },
  };
  ConfigSchema.validateSync(config);
  // try https://wundergraph.com/
  // Reuse client on the client-side
  return new ApolloClient(null, config, {});
}
