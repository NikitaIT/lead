import { ApolloLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BaseLink } from '../../framework';
import { Config } from './Config';

declare module '@apollo/client' {
  export interface DefaultContext {
    readonly headers?: DefaultContextHeaders;
  }
  export interface DefaultContextHeaders {
    readonly authorization: string;
  }
}

export class LinkAuth implements BaseLink {
  constructor(private config: Config) {}
  get apolloLink(): ApolloLink {
    return setContext((_, context) => {
      // return the hesaders to the context so httpLink can read them
      return {
        ...context,
        headers: {
          ...(context['headers'] || {}),
          authorization: this.authorizationHeader,
        },
      };
    });
  }
  // todo: should be shared from backend code
  get authorizationHeader(): string {
    const token = this.config.token;
    return token.length > 0 ? this.bearer(token) : '';
  }
  bearer(token: string) {
    return `Bearer ${token}`;
  }
}
