import { Module } from '@nestjs/common';
import { SetResolver } from './set.resolver';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { createGraphQLModule } from '../feature/graphql/createGraphQLModule';
import { PubSubModule } from './PubSub.module';
import { ConfigModule } from '@nestjs/config';
// import { PrismaModule } from '@lead/models';
@Module({
  imports: [createGraphQLModule(), PubSubModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, SetResolver],
  exports: [PubSubModule],
})
export class AppModule {}
