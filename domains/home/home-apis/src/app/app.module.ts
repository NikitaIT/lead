import { Module } from '@nestjs/common';
import { ConfigModule } from '@lead/config';
import { DomainModule } from './domain/domain.module';
import { LoggerModule } from '../Logger';
import { PubSubModule } from './PubSub.module';

@Module({
  imports: [ConfigModule, DomainModule, PubSubModule, LoggerModule()],
  controllers: [],
  providers: [],
  exports: [PubSubModule],
})
export class AppModule {}
