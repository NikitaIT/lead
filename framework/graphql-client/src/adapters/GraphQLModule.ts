import { DynamicModule, Global, Module, Provider } from '@nestjs/common';
import { Config } from '../ports';
import { GraphQLModule as BaseGraphQLModule, NextFn } from '@nestjs/graphql';
import {
  ApolloDriver,
  ApolloDriverConfig,
  ApolloFederationDriver,
} from '@nestjs/apollo';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { join } from 'path';
import {
  ImportsForExternalProvider,
  ExternalProvider,
} from '@lead/nest-module';
import {
  resolvers as scalarResolvers,
  typeDefs as scalarTypeDefs,
} from 'graphql-scalars';

const baseGraphQLModule = ({
  imports,
}: {
  imports: ImportsForExternalProvider;
}): DynamicModule[] => [
  BaseGraphQLModule.forRootAsync<ApolloDriverConfig>({
    driver: ApolloDriver,
    imports,
    useFactory(config: Config) {
      return {
        path: '/graphql-sub',
        typePaths: [`${config.sourceRoot}/app/**/*.{graphql,graphql.pubsub}`],
        definitions: {
          path: join(
            process.cwd(),
            `${config.sourceRoot}/app/graphql.pubsub.ts`
          ),
          // outputAs: 'class',
          emitTypenameField: true,
        },
        subscriptions: {
          'graphql-ws': {
            // path: '/subscriptions',
          },
          'subscriptions-transport-ws': true,
        },
        typeDefs: scalarTypeDefs,
        resolvers: scalarResolvers,
        // context: {}, = directiveResolvers.ctx
        directiveResolvers: {
          // @key(id: ID!) = args = { id }
          key: (
            next: NextFn,
            source: unknown,
            args: undefined,
            ctx: unknown
          ) => {
            return next();
          },
        },
      };
    },
    inject: [Config],
  }),
  BaseGraphQLModule.forRootAsync({
    driver: ApolloFederationDriver,
    imports,
    useFactory(config: Config) {
      return {
        typePaths: [`${config.sourceRoot}/app/**/*.{graphql,graphql.ext}`],
        uploads: false,
        typeDefs: scalarTypeDefs,
        resolvers: scalarResolvers,
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
      };
    },
    inject: [Config],
  }),
];

@Module({})
export class GraphQLModule {
  public static forRoot({
    imports,
    config,
  }: {
    config: ExternalProvider<Config>;
    imports: ImportsForExternalProvider;
  }): DynamicModule {
    const provider = {
      provide: Config,
      ...config,
    };
    const x = {
      imports: [GraphQLModuleConfig.forRoot({ imports, provider })],
    };
    return {
      module: GraphQLModule,
      imports: baseGraphQLModule(x),
      exports: baseGraphQLModule(x),
    };
  }
}

@Module({})
export class GraphQLModuleConfig {
  public static forRoot({
    imports,
    provider,
  }: {
    imports: ImportsForExternalProvider;
    provider: Provider<Config>;
  }): DynamicModule {
    return {
      module: GraphQLModuleConfig,
      imports,
      providers: [provider],
      exports: [provider],
    };
  }
}
