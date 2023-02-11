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
};

export type Comment = {
  __typename?: 'Comment';
  comment: Scalars['String'];
  postId: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addComment: Maybe<Set>;
  addSet: Maybe<Set>;
};


export type MutationAddCommentArgs = {
  comment: Scalars['String'];
  postId: Scalars['String'];
};


export type MutationAddSetArgs = {
  name: InputMaybe<Scalars['String']>;
  numParts: InputMaybe<Scalars['Int']>;
  year: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  allSets: Array<Set>;
};

export type Set = {
  __typename?: 'Set';
  id: Scalars['Int'];
  name: Scalars['String'];
  numParts: Scalars['Int'];
  year: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  commentAdded: Maybe<Comment>;
};


export type SubscriptionCommentAddedArgs = {
  postId: Scalars['String'];
};

export type SetListQueryVariables = Exact<{ [key: string]: never; }>;


export type SetListQuery = { __typename?: 'Query', allSets: Array<{ __typename?: 'Set', id: number, name: string, numParts: number, year: string }> };

export type AddSetMutationVariables = Exact<{
  name: Scalars['String'];
  year: Scalars['String'];
  numParts: Scalars['Int'];
}>;


export type AddSetMutation = { __typename?: 'Mutation', addSet: { __typename?: 'Set', id: number, name: string, numParts: number, year: string } | null };


export const SetListDocument = gql`
    query setList {
  allSets {
    id
    name
    numParts
    year
  }
}
    `;

/**
 * __useSetListQuery__
 *
 * To run a query within a React component, call `useSetListQuery` and pass it any options that fit your needs.
 * When your component renders, `useSetListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSetListQuery({
 *   variables: {
 *   },
 * });
 */
export function useSetListQuery(baseOptions?: Apollo.QueryHookOptions<SetListQuery, SetListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SetListQuery, SetListQueryVariables>(SetListDocument, options);
      }
export function useSetListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SetListQuery, SetListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SetListQuery, SetListQueryVariables>(SetListDocument, options);
        }
export type SetListQueryHookResult = ReturnType<typeof useSetListQuery>;
export type SetListLazyQueryHookResult = ReturnType<typeof useSetListLazyQuery>;
export type SetListQueryResult = Apollo.QueryResult<SetListQuery, SetListQueryVariables>;
export const AddSetDocument = gql`
    mutation addSet($name: String!, $year: String!, $numParts: Int!) {
  addSet(name: $name, year: $year, numParts: $numParts) {
    id
    name
    numParts
    year
  }
}
    `;
export type AddSetMutationFn = Apollo.MutationFunction<AddSetMutation, AddSetMutationVariables>;

/**
 * __useAddSetMutation__
 *
 * To run a mutation, you first call `useAddSetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddSetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addSetMutation, { data, loading, error }] = useAddSetMutation({
 *   variables: {
 *      name: // value for 'name'
 *      year: // value for 'year'
 *      numParts: // value for 'numParts'
 *   },
 * });
 */
export function useAddSetMutation(baseOptions?: Apollo.MutationHookOptions<AddSetMutation, AddSetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddSetMutation, AddSetMutationVariables>(AddSetDocument, options);
      }
export type AddSetMutationHookResult = ReturnType<typeof useAddSetMutation>;
export type AddSetMutationResult = Apollo.MutationResult<AddSetMutation>;
export type AddSetMutationOptions = Apollo.BaseMutationOptions<AddSetMutation, AddSetMutationVariables>;