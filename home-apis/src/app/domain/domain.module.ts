import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@app/config/config.module';
import { DbModule } from '../../db/db.module';
import { Home } from './entity/home.entity';
import { HomeModule } from './home/home.module';
import { LoggerModule } from '@logger/logger.module';
import { NextFn } from '@nestjs/graphql';

import {
  ApolloDriver,
  ApolloDriverConfig,
  ApolloFederationDriver,
} from '@nestjs/apollo';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { join } from 'path';
const LIB_ROOT = 'home-apis';
@Module({
  imports: [
    DbModule.forRoot({
      entities: [Home],
    }),
    LoggerModule,
    HomeModule,
    ConfigModule,

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      path: '/graphql-sub',
      typePaths: [`${LIB_ROOT}/src/app/**/*.{graphql,graphql.pubsub}`],
      definitions: {
        path: join(process.cwd(), `${LIB_ROOT}/src/app/graphql.pubsub.ts`),
        // outputAs: 'class',
        emitTypenameField: true,
      },
      subscriptions: {
        'graphql-ws': {
          // path: '/subscriptions',
        },
        'subscriptions-transport-ws': true,
      },
      // context: {}, = directiveResolvers.ctx
      directiveResolvers: {
        // @key(id: ID!) = args = { id }
        key: (next: NextFn, source: unknown, args: undefined, ctx: unknown) => {
          return next();
        },
      },
    }),
    GraphQLModule.forRoot({
      typePaths: [`${LIB_ROOT}/src/app/**/*.{graphql,graphql.ext}`],
      uploads: false,
      driver: ApolloFederationDriver,
      context: ({ req }: any) => ({ req }),
      formatError: (error: GraphQLError) => {
        console.log(error);
        const graphQLFormattedError: GraphQLFormattedError = {
          message:
            // @ts-expect-error lalala
            error?.extensions?.exception?.response?.message || error?.message,
        };
        return graphQLFormattedError;
      },
    }),
  ],
})
export class DomainModule {}
