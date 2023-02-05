import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { generateOptions } from './GenerateOptions';
import { generatePubSub } from './subscriptions';

export function createGraphQLModule() {
  return GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    typePaths: ['./**/*.graphql'],
    definitions: generateOptions(),
    subscriptions: generatePubSub(),
    plugins: [ApolloServerPluginLandingPageLocalDefault()],
  });
}
