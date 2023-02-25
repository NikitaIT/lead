import { MiddlewareConsumer, Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { graphqlUploadExpress } from 'graphql-upload';
import { RemoteGraphQLDataSource } from '@apollo/gateway';
import { IntrospectAndCompose } from '@apollo/gateway';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { Auth } from './Auth';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      server: {
        context: new Auth({
          INVALID_BEARER_TOKEN:
            'Invalid Authorization token - Token does not match Bearer .*',
          INVALID_AUTH_TOKEN: 'Invalid Auth Token',
        }).handleAuth,
      },
      driver: ApolloGatewayDriver,
      gateway: {
        buildService: ({ url }) => {
          return new RemoteGraphQLDataSource({
            url,
            willSendRequest({ request, context }) {
              request.http?.headers.set('userId', context.userId);
              // for now pass authorization also
              request.http?.headers.set('authorization', context.authorization);
              request.http?.headers.set('permissions', context.permissions);
            },
          });
        },
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            { name: 'User', url: 'http://localhost:5006/graphql' },
            { name: 'Home', url: 'http://localhost:5003/graphql' },
            // { name: 'Grid', url: 'http://localhost:5004/graphql' },
          ],
          pollIntervalInMs: 2000, // reconnect interval if subgraph was down
          subgraphHealthCheck: true,
          introspectionHeaders: {},
        }),
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(graphqlUploadExpress()).forRoutes('graphql');
  }
}
