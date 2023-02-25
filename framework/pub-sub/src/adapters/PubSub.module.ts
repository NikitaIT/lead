import { PubSub as GQLPubSub } from 'graphql-subscriptions';
// import { RedisPubSub } from 'graphql-redis-subscriptions';
import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@lead/config';
import { Config, PubSub } from '../ports';
import { createConfigurableDynamicRootModule } from '@lead/nest-module';

const pubsub = {
  provide: PubSub,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  useFactory: (config: Config) =>
    new GQLPubSub({
      // connection: {
      //   host: configService.get('REDIS_HOST'),
      //   port: configService.get('REDIS_PORT'),
      // }
    }),
  inject: [Config],
};

@Global()
@Module({
  imports: [ConfigModule],
  exports: [PubSub],
})
export class PubSubModule extends createConfigurableDynamicRootModule<
  PubSubModule,
  Config
>(Config as unknown as string, {
  providers: [pubsub],
  exports: [pubsub],
}) {}
