import {
  MiddlewareConsumer,
  Module,
  Logger as NestLogger,
} from '@nestjs/common';
import { WinstonLogger } from './WinstonLogger';
import { LoggerMiddleware } from './logger.middleware';
import { Config, Logger } from '../ports';
import { createConfigurableDynamicRootModule } from '@lead/nest-module';

@Module({})
export class LoggerModule extends createConfigurableDynamicRootModule<
  LoggerModule,
  Config
>(Config as unknown as string, {
  providers: [
    {
      provide: Logger,
      useClass: WinstonLogger,
    },
    WinstonLogger,
    {
      provide: NestLogger,
      useClass: WinstonLogger,
    },
  ],
  exports: [
    Logger,
    WinstonLogger,
    {
      provide: NestLogger,
      useClass: WinstonLogger,
    },
  ],
}) {
  public configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
