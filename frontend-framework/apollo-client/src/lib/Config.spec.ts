import { Config, ConfigSchema } from './Config';

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
        token: '3',
      },
    };
    await ConfigSchema.validate(config);
  });
});
