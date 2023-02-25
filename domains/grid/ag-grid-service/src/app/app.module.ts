import { MiddlewareConsumer, Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PubSubModule } from '../PubSub.module';
import { ConfigModule, ConfigService } from '@lead/config';
import { LoggerModule } from '../Logger';
import { adapters } from '@lead/graphql-client';
import project from '../../project.json';

@Module({
  imports: [
    ConfigModule,
    PubSubModule,
    LoggerModule(),
    adapters.GraphQLModule.forRoot({
      imports: [ConfigModule],
      config: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        useFactory(configService: ConfigService) {
          return {
            sourceRoot: project.sourceRoot,
          };
        },
        inject: [ConfigService],
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(graphqlUploadExpress()).forRoutes('graphql');
  }
}
