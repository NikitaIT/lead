import { adapters, Config } from 'framework/db-client/src';
import { Logger } from '@lead/logger';
import { Module } from '@nestjs/common';
import { LoggerModule } from '../../../src/Logger';
import { ConfigModule, ConfigService } from '@lead/config';
import { Home } from './entity/home.entity';

const dbModule = adapters.DbModule.forRoot({
  imports: [ConfigModule, LoggerModule()],
  dbconfig: { entities: [Home] },
  config: {
    useFactory: (configService: ConfigService): Config => {
      return {
        url: configService.get().db.url,
      };
    },
    inject: [ConfigService],
  },
  logger: {
    useExisting: Logger,
  },
});
@Module({
  imports: [dbModule],
  exports: [dbModule],
})
export class DBModule {}
