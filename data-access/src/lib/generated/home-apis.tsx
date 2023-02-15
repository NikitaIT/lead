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
  _Any: any;
  _FieldSet: any;
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
  _entities: Array<Maybe<_Entity>>;
  _service: _Service;
  activeHomes: Maybe<Array<Home>>;
  findHomes: Maybe<Array<Home>>;
  home: Home;
  homes: Maybe<Array<Home>>;
};


export type Query_EntitiesArgs = {
  representations: Array<Scalars['_Any']>;
};


export type QueryFindHomesArgs = {
  name: Scalars['String'];
};


export type QueryHomeArgs = {
  id: InputMaybe<Scalars['ID']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
};

export type _Entity = Home | User;

export type _Service = {
  __typename?: '_Service';
  sdl: Maybe<Scalars['String']>;
};

export type HomesQueryVariables = Exact<{ [key: string]: never; }>;


export type HomesQuery = { __typename?: 'Query', home: { __typename?: 'Home', id: string, name: string, description: string, user: { __typename?: 'User', id: string } | null } };


export const HomesDocument = gql`
    query homes {
  home {
    id
    name
    user {
      id
    }
    description
  }
}
    `;

/**
 * __useHomesQuery__
 *
 * To run a query within a React component, call `useHomesQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomesQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomesQuery(baseOptions?: Apollo.QueryHookOptions<HomesQuery, HomesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomesQuery, HomesQueryVariables>(HomesDocument, options);
      }
export function useHomesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomesQuery, HomesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomesQuery, HomesQueryVariables>(HomesDocument, options);
        }
export type HomesQueryHookResult = ReturnType<typeof useHomesQuery>;
export type HomesLazyQueryHookResult = ReturnType<typeof useHomesLazyQuery>;
export type HomesQueryResult = Apollo.QueryResult<HomesQuery, HomesQueryVariables>;