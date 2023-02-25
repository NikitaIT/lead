import { ApolloClient } from './ApolloClient';
import { Config } from './Config';

describe('Config', () => {
  it('should work', async () => {
    const config: Config = {
      name: 'test',
      version: '0.0.0',
      domains: [
        {
          name: 'auth',
          link: 'localhost:5003/graphql-sub',
        },
      ],
      getway: 'localhost:4000/graphql',
      logger: {
        errorCallback: console.log,
      },
      auth: {
        get token() {
          // get the authentication token from local storage if it exists
          const token = localStorage.getItem('token');
          return token && token !== 'undefined' ? token : '';
        },
      },
    };
    const x = new ApolloClient(null, config);

    x.create({});
  });
});
