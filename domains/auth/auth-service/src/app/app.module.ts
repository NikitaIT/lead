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
import {
  resolvers as scalarResolvers,
  typeDefs as scalarTypeDefs,
} from 'graphql-scalars';
import project from '../../project.json';
const LIB_ROOT_SRC = project.sourceRoot;
@Module({
  imports: [
    DBModule,
    GraphQLModule.forRoot({
      typePaths: [`${LIB_ROOT_SRC}/**/*.graphql`],
      driver: ApolloFederationDriver,
      typeDefs: scalarTypeDefs,
      resolvers: scalarResolvers,
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
        path: join(process.cwd(), `${LIB_ROOT_SRC}/graphql.classes.ts`),
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
