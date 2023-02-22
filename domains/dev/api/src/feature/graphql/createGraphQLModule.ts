import {
  ApolloDriverConfig,
  ApolloDriver,
  ApolloFederationDriver,
} from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { generateFederationOptions, generateOptions } from './GenerateOptions';
import { generatePubSub } from './subscriptions';
//*.graphql: for GraphQL syntax supported in both federation and normal mode
//*.graphql.federation: for syntax supported only in federation mode (e.g., extends)
//*.graphql.pubsub: for syntax supported only in normal mode (e.g., subscription)
export function createGraphQLModule() {
  return [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      path: '/graphql',
      typePaths: ['./**/*.{graphql,graphql.pubsub}'],
      definitions: generateOptions(),
      subscriptions: generatePubSub(),

      directiveResolvers: {},
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloFederationDriver,
      debug: false,
      playground: false,
      path: '/graphql-federated',
      typePaths: ['./**/*.{graphql,graphql.federation}'],
      definitions: generateFederationOptions(),
    }),
  ];
}
