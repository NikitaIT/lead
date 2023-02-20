import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { adapters } from '../auth';
import { ConfigModule } from '@lead/config';
import { DBModule } from './db.module';
import { UsersModule } from '../users';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ApolloFederationDriver } from '@nestjs/apollo';
import { LoggerModule } from '../Logger';

@Module({
  imports: [
    DBModule,
    GraphQLModule.forRoot({
      typePaths: ['auth-service/src/**/*.graphql'],
      driver: ApolloFederationDriver,
      context: ({ req }) => ({ req }),
      formatError: (error: GraphQLError) => {
        const graphQLFormattedError: GraphQLFormattedError = {
          message:
            // @ts-expect-error lalala
            error?.extensions?.exception?.response?.message || error?.message,
        };
        return graphQLFormattedError;
      },
      definitions: {
        path: join(process.cwd(), '/auth-service/src/graphql.classes.ts'),
        // outputAs: 'class',
      },
    }),
    UsersModule,
    adapters.AuthModule,
    ConfigModule,
    LoggerModule(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
