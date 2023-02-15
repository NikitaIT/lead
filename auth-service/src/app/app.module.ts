import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { AuthModule } from '../auth/auth.module';
import { ConfigModule } from '../config/config.module';
import { DbModule } from '../db/db.module';
import { LoggerModule } from '../logger/logger.module';
import { UserEntity } from '../users/entity/users.entity';
import { UsersModule } from '../users/users.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ApolloFederationDriver } from '@nestjs/apollo';

@Module({
  imports: [
    DbModule.forRoot({
      entities: [UserEntity],
    }),
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
        outputAs: 'class',
      },
    }),
    UsersModule,
    AuthModule,
    ConfigModule,
    LoggerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
