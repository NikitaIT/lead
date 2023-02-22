import { PubSub as GQLPubSub } from 'graphql-subscriptions';
// import { RedisPubSub } from 'graphql-redis-subscriptions';
import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@lead/config';

export abstract class PubSub extends GQLPubSub {}

@Global()
@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: PubSub,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      useFactory: (configService: ConfigService) =>
        new GQLPubSub({
          // connection: {
          //   host: configService.get('REDIS_HOST'),
          //   port: configService.get('REDIS_PORT'),
          // }
        }),
      inject: [ConfigService],
    },
  ],
  exports: [PubSub],
})
export class PubSubModule {}
