import { adapters, Logger, LogLevel } from './index';
import { TestingModule, Test } from '@nestjs/testing';
import jestConfig from '../jest.config';
import { spawn } from 'child_process';

describe('config', () => {
  let service: Logger;
  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [
        adapters.LoggerModule.forRootAsync(adapters.LoggerModule, {
          useFactory: () => ({
            suppressDateAndLevelInMsg: true,
            logLevel: LogLevel.debug,
          }),
        }),
      ],
      providers: [],
    }).compile();
    service = moduleRef.get(Logger);
  });
  it('works', () => {
    service.log('lalala');
  });
});
