import { adapters, Config } from 'framework/db-client/src';
import { Logger } from '@lead/logger';
import { Module } from '@nestjs/common';
import { ConfigService, ConfigModule } from '@lead/config';
import { LoggerModule } from '../Logger';
import { UserEntity } from '../users';

const dbModule = adapters.DbModule.forRoot({
  imports: [ConfigModule, LoggerModule()],
  dbconfig: { entities: [UserEntity] },
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
