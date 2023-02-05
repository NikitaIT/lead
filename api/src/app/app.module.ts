import { Module } from '@nestjs/common';
import { SetResolver } from './set.resolver';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { createGraphQLModule } from '../feature/graphql/createGraphQLModule';
import { PrismaModule } from '@lead/models';
@Module({
  imports: [createGraphQLModule(), PrismaModule],
  controllers: [AppController],
  providers: [AppService, SetResolver],
})
export class AppModule {}
