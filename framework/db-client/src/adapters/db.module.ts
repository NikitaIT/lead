import { DynamicModule, ForwardReference, Module, Type } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DbConfigError } from './db.errors';
import { TypeORMDbConfig } from './db.interface';
import { Config, Logger } from '../ports';
import {
  ExternalProvider,
  ImportsForExternalProvider,
} from 'framework/nest-module/src';

@Module({})
export class DbModule {
  private static getConnectionOptions(
    config: Config,
    dbconfig: TypeORMDbConfig
  ): TypeOrmModuleOptions {
    console.log(config);
    if (!config) {
      throw new DbConfigError('Database config is mSissing');
    }
    const connectionOptions = DbModule.getConnectionOptionsPostgres(config);
    return {
      ...connectionOptions,
      entities: dbconfig.entities,
      synchronize: true,
      logging: true,
    };
  }

  private static getConnectionOptionsPostgres(
    dbdata: Config
  ): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      url: dbdata.url,
      keepConnectionAlive: true,
      ssl:
        process.env.NODE_ENV !== 'local' && process.env.NODE_ENV !== 'test'
          ? { rejectUnauthorized: false }
          : false,
    };
  }

  public static forRoot({
    dbconfig,
    config,
    logger,
    imports,
  }: {
    dbconfig: TypeORMDbConfig;
    config: ExternalProvider<Config>;
    logger: ExternalProvider<Logger>;
    imports: ImportsForExternalProvider;
  }): DynamicModule {
    return {
      module: DbModule,
      imports: [
        ...imports,
        TypeOrmModule.forRootAsync({
          imports: imports,
          useFactory: (config: Config) =>
            DbModule.getConnectionOptions(config, dbconfig),
          inject: [Config, Logger],
          extraProviders: [
            {
              provide: Config,
              ...config,
            },
            {
              provide: Logger,
              ...logger,
            },
          ],
        }),
      ],
    };
  }
}
