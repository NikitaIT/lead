import { Module } from '@nestjs/common';
import { adapters } from '@lead/graphql-client';
import { ConfigModule, ConfigService } from '@lead/config';
import { HomeModule } from './home/home.module';
import { DBModule } from './db.module';
import project from '../../../project.json';

@Module({
  imports: [
    DBModule,
    HomeModule,
    ConfigModule,

    adapters.GraphQLModule.forRoot({
      imports: [ConfigModule],
      config: {
        useFactory(configService: ConfigService) {
          return {
            sourceRoot: project.sourceRoot,
          };
        },
        inject: [ConfigService],
      },
    }),
  ],
})
export class DomainModule {}
