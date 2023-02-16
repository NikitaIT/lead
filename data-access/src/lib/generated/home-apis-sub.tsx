import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Home = {
  __typename?: 'Home';
  created_at: Maybe<Scalars['Date']>;
  description: Scalars['String'];
  display_images: Maybe<Array<Scalars['String']>>;
  id: Scalars['ID'];
  is_active: Scalars['Boolean'];
  name: Scalars['String'];
  original_images: Maybe<Array<Scalars['String']>>;
  updated_at: Maybe<Scalars['Date']>;
  user: Maybe<User>;
};

export type HomeInput = {
  description: Scalars['String'];
  is_active: Scalars['Boolean'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createHome: Maybe<Home>;
  updateHome: Maybe<Home>;
};


export type MutationCreateHomeArgs = {
  payload: HomeInput;
};


export type MutationUpdateHomeArgs = {
  id: Scalars['ID'];
  payload: HomeInput;
};

export type Query = {
  __typename?: 'Query';
  activeHomes: Maybe<Array<Home>>;
  findHomes: Maybe<Array<Home>>;
  home: Home;
  homes: Maybe<Array<Home>>;
};


export type QueryFindHomesArgs = {
  name: Scalars['String'];
};


export type QueryHomeArgs = {
  id: InputMaybe<Scalars['ID']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  homeAdded: Maybe<Home>;
};


export type SubscriptionHomeAddedArgs = {
  id: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
};

export type HomeAddedSubscriptionVariables = Exact<{
  id: Scalars['ID'];
}>;


export type HomeAddedSubscription = { __typename?: 'Subscription', homeAdded: { __typename?: 'Home', id: string, name: string } | null };


export const HomeAddedDocument = gql`
    subscription homeAdded($id: ID!) {
  homeAdded(id: $id) {
    id
    name
  }
}
    `;

/**
 * __useHomeAddedSubscription__
 *
 * To run a query within a React component, call `useHomeAddedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useHomeAddedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeAddedSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useHomeAddedSubscription(baseOptions: Apollo.SubscriptionHookOptions<HomeAddedSubscription, HomeAddedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<HomeAddedSubscription, HomeAddedSubscriptionVariables>(HomeAddedDocument, options);
      }
export type HomeAddedSubscriptionHookResult = ReturnType<typeof useHomeAddedSubscription>;
export type HomeAddedSubscriptionResult = Apollo.SubscriptionResult<HomeAddedSubscription>;