import { ApolloLink } from '@apollo/client';
import { assert } from '@lead/std';
import { BaseLink } from '../../framework';
import { Config } from './Config';
import { formatMessage } from './formatMessage';
import { logging } from './logging';
import { onError } from '@apollo/client/link/error';

declare module '@apollo/client' {
  export interface DefaultContext {
    readonly startedAt?: number;
  }
}
export class RequestLogger implements BaseLink {
  constructor(private config: Config) {}
  get apolloLink(): ApolloLink {
    return new ApolloLink((operation, forward) => {
      const definition = operation.query.definitions[0];
      const operationType = (definition as unknown as { operation: string })
        .operation;
      console.log(`GraphQL Request: ${operation.operationName}`);
      operation.setContext({ startedAt: new Date().getTime() });
      // forward: A method to be called in order to continue the chain of links.
      return forward(operation).map((response) => {
        const { startedAt } = operation.getContext();
        assert(startedAt, 'RequestLogger not recive start time');
        const responseTime = new Date().getTime() - startedAt;
        const group = formatMessage(operationType, operation, responseTime);

        logging.groupCollapsed(...group);

        logging.log('INIT', operation);
        logging.log('RESULT', response);

        logging.groupEnd(...group);
        return response;
      });
    });
  }
}

export class ErrorLogger implements BaseLink {
  constructor(private config: Config) {}
  get apolloLink(): ApolloLink {
    return onError((error) => {
      if (error.graphQLErrors)
        error.graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      if (error.networkError)
        console.log(`[Network error]: ${error.networkError}`);
      // const observable = forward(operation);
      // errors will be sent to the errorCallback
      // observable.subscribe({ error: this.config.errorCallback });
      // ps we can't because it call all stack twice
      //observable.subscribe({ error: this.config.errorCallback });
      // return observable;
    });
  }
}
