import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from './config.module';
import { ConfigService } from './config.service';
import { testEnvConfigData } from './config.test.env';
import jestConfig from '../../jest.config';
import { ConfigDataSchema } from './config.interface';

describe('config', () => {
  let configService: ConfigService;
  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule],
      providers: [],
    }).compile();
    configService = moduleRef.get(ConfigService);
  });
  it(`testEnvConfigData should be valid`, async () => {
    expect(await ConfigDataSchema.validate(testEnvConfigData)).toEqual(
      testEnvConfigData
    );
  });
  it(`.env.test should be loaded by ${jestConfig.setupFiles}`, () => {
    expect(configService.parseConfigFromEnv(process.env)).toEqual(
      testEnvConfigData
    );
  });
  it(`.env.test should be valid`, async () => {
    expect(await configService.load()).toEqual(testEnvConfigData);
  });
});
