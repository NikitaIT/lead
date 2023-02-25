import { ApolloClient, Config, ConfigSchema } from '@lead/apollo-client';
import { assert } from '@lead/std';
import {} from '@lead/data-access';
import pkg from '../../package.json';
export function initApollo() {
  assert(process.env.NX_AUTH_SERVER, 'Set .env NX_AUTH_SERVER');
  assert(process.env.NX_HOME_SERVER, 'Set .env NX_HOME_SERVER');
  assert(process.env.NX_GRID_SERVER, 'Set .env NX_GRID_SERVER');
  assert(process.env.NX_GETWAY_SERVER, 'Set .env NX_GETWAY_SERVER');
  assert(pkg.name, 'Set .package.json name');
  assert(pkg.version, 'Set .package.json version');
  const config: Config = {
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
    inMemoryCacheConfig: {
      typePolicies: {
        // Type policy map
        Product: {
          fields: {
            // Field policy map for the Product type
            isInCart: {
              // Field policy for the isInCart field
              read(_, { variables }) {
                // The read function for the isInCart field
                return localStorage
                  .getItem('CART')
                  .includes(variables.productId);
              },
            },
          },
        },
      },
    },
  };
  ConfigSchema.validateSync(config);
  // Reuse client on the client-side
  return new ApolloClient(null, config);
}
