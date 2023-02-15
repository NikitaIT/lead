import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@app/config/config.module';
import { DbModule } from '../../db/db.module';
import { Home } from './entity/home.entity';
import { HomeModule } from './home/home.module';
import { LoggerModule } from '@logger/logger.module';

import {
  ApolloFederationDriver,
} from '@nestjs/apollo';
import { GraphQLError, GraphQLFormattedError } from 'graphql';

@Module({
  imports: [
    DbModule.forRoot({
      entities: [Home]
    }),
    LoggerModule,
    HomeModule,
    ConfigModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      uploads: false,
      driver: ApolloFederationDriver,
      context: ({ req }: any) => ({ req }),
      formatError: (error: GraphQLError) => {
        console.log(error);
        const graphQLFormattedError: GraphQLFormattedError = {
          // @ts-expect-error lalala
          message: error?.extensions?.exception?.response?.message || error?.message,
        };
        return graphQLFormattedError;
      },
    }),
  ]
})

export class DomainModule {}
