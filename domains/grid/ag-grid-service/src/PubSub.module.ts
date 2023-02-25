import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@lead/config';
import { adapters } from '@lead/pub-sub';

const pubsub = adapters.PubSubModule.forRootAsync(adapters.PubSubModule, {
  imports: [ConfigModule],
  useFactory(configService: ConfigService) {
    return {
      type: 'self',
    };
  },
  inject: [ConfigService],
});
@Global()
@Module({
  imports: [pubsub],
  exports: [pubsub],
})
export class PubSubModule {}
