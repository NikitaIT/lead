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

export type CreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type LoginResult = {
  __typename?: 'LoginResult';
  token: Scalars['String'];
  user: User;
};

export type LoginUserInput = {
  email: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  username: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAdminPermission: User;
  createUser: User;
  removeAdminPermission: User;
  resetPassword: User;
  updateUser: User;
};


export type MutationAddAdminPermissionArgs = {
  username: Scalars['String'];
};


export type MutationCreateUserArgs = {
  createUserInput: InputMaybe<CreateUserInput>;
};


export type MutationRemoveAdminPermissionArgs = {
  username: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  fieldsToUpdate: UpdateUserInput;
  username: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  _entities: Array<Maybe<_Entity>>;
  _service: _Service;
  forgotPassword: Maybe<Scalars['Boolean']>;
  login: LoginResult;
  refreshToken: Scalars['String'];
  user: User;
  users: Array<User>;
};


export type Query_EntitiesArgs = {
  representations: Array<Scalars['_Any']>;
};


export type QueryForgotPasswordArgs = {
  email: InputMaybe<Scalars['String']>;
};


export type QueryLoginArgs = {
  user: LoginUserInput;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type UpdatePasswordInput = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

export type UpdateUserInput = {
  email: InputMaybe<Scalars['String']>;
  enabled: InputMaybe<Scalars['Boolean']>;
  password: InputMaybe<UpdatePasswordInput>;
  username: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  created_at: Scalars['Date'];
  email: Scalars['String'];
  id: Scalars['ID'];
  permissions: Array<Scalars['String']>;
  updated_at: Scalars['Date'];
  username: Scalars['String'];
};

export type _Entity = User;

export type _Service = {
  __typename?: '_Service';
  sdl: Maybe<Scalars['String']>;
};

export type UserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string } };


export const UserDocument = gql`
    query user($id: ID!) {
  user(id: $id) {
    id
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;