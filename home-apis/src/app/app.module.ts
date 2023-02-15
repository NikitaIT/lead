import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { DomainModule } from './domain/domain.module';
import { PubSubModule } from './PubSub.module';


@Module({
  imports: [ConfigModule, DomainModule, PubSubModule],
  controllers: [],
  providers: [],
  exports: [PubSubModule]
})
export class AppModule {

}
