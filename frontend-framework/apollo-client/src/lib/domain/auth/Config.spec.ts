import { Config, ConfigSchema } from './Config';

describe('Config', () => {
  it('should work', async () => {
    const config: Config = {
      token: '3',
    };
    await ConfigSchema.validate(config);
  });
});
