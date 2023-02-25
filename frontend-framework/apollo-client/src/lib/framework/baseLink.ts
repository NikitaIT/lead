import { ApolloLink } from '@apollo/client';

export interface BaseLink {
  get apolloLink(): ApolloLink;
}
