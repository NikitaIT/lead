import { permutator, powerset } from '@lead/std';
import { Test, TestingModule } from '@nestjs/testing';
import { ConfigSchema, Config } from './Config';
describe('config', () => {
  const validSchema = Config({ expireIn: 1, jwtSecret: 'lalal' });

  const invalidJwtSecret = PartialConfigs([
    { jwtSecret: null },
    { jwtSecret: '' },
    // { jwtSecret: 1 as unknown as string }, bug
  ]);

  const invalidExpireIn = PartialConfigs([
    { expireIn: null },
    { expireIn: 0 },
    // write here
  ]);

  it.each(
    [...invalidJwtSecret, ...invalidExpireIn].map((x) => ({
      ...validSchema,
      ...x,
    }))
  )(`ConfigSchema(%j) should be invalid`, async (config) => {
    try {
      await ConfigSchema.validate(config);
    } catch (error) {
      return;
    }
    return Promise.reject(config);
  });

  const validConfigs = PartialConfigs([
    { expireIn: 1 },
    { expireIn: 10000 },
    { jwtSecret: '1' },
    { jwtSecret: '112312rref23rfewf' },
  ]);

  it.each(validConfigs)(`ConfigSchema(%j) should be valid `, async (config) => {
    await ConfigSchema.validate(config);
  });

  function Config(params: Config): Config {
    return params;
  }
  function PartialConfigs(params: Partial<Config>[]): Partial<Config>[] {
    return Object.values(
      permutator(params).reduce((acc, x) => {
        const value = x.reduce((acc, y) => ({ ...acc, ...y }), {});
        return {
          ...acc,
          [JSON.stringify(value)]: value,
        };
      }, {})
    );
  }
});
