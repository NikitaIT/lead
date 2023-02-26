import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {"context":{"clientName":"getway"}} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AccountNumber: any;
  BigInt: any;
  Byte: any;
  CountryCode: any;
  Cuid: any;
  Currency: any;
  DID: any;
  Date: string;
  DateTime: any;
  Duration: any;
  EmailAddress: any;
  GUID: any;
  HSL: any;
  HSLA: any;
  HexColorCode: any;
  Hexadecimal: any;
  IBAN: any;
  IP: any;
  IPv4: any;
  IPv6: any;
  ISBN: any;
  ISO8601Duration: any;
  JSON: string;
  JSONObject: any;
  JWT: any;
  Latitude: any;
  LocalDate: any;
  LocalEndTime: any;
  LocalTime: any;
  Locale: any;
  Long: any;
  Longitude: any;
  MAC: any;
  NegativeFloat: any;
  NegativeInt: any;
  NonEmptyString: any;
  NonNegativeFloat: any;
  NonNegativeInt: any;
  NonPositiveFloat: any;
  NonPositiveInt: any;
  ObjectID: any;
  PhoneNumber: any;
  Port: any;
  PositiveFloat: any;
  PositiveInt: any;
  PostalCode: any;
  RGB: any;
  RGBA: any;
  RoutingNumber: any;
  SafeInt: any;
  SemVer: any;
  Time: any;
  TimeZone: any;
  Timestamp: any;
  URL: any;
  USCurrency: any;
  UUID: string;
  UnsignedFloat: any;
  UnsignedInt: any;
  UtcOffset: any;
  Void: any;
};

export type CreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
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
  createHome: Maybe<Home>;
  createUser: User;
  removeAdminPermission: User;
  resetPassword: User;
  updateHome: Maybe<Home>;
  updateUser: User;
};


export type MutationAddAdminPermissionArgs = {
  username: Scalars['String'];
};


export type MutationCreateHomeArgs = {
  payload: HomeInput;
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


export type MutationUpdateHomeArgs = {
  id: Scalars['ID'];
  payload: HomeInput;
};


export type MutationUpdateUserArgs = {
  fieldsToUpdate: UpdateUserInput;
  username: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  activeHomes: Maybe<Array<Home>>;
  findHomes: Maybe<Array<Home>>;
  forgotPassword: Maybe<Scalars['Boolean']>;
  home: Home;
  homes: Maybe<Array<Home>>;
  login: LoginResult;
  refreshToken: Scalars['String'];
  user: User;
  users: Array<User>;
};


export type QueryFindHomesArgs = {
  name: Scalars['String'];
};


export type QueryForgotPasswordArgs = {
  email: InputMaybe<Scalars['String']>;
};


export type QueryHomeArgs = {
  id: InputMaybe<Scalars['ID']>;
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

export type LoginQueryVariables = Exact<{
  user: LoginUserInput;
}>;


export type LoginQuery = { __typename?: 'Query', login: { __typename?: 'LoginResult', token: string, user: { __typename?: 'User', id: string, permissions: Array<string> } } };

export type RefreshTokenQueryVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokenQuery = { __typename?: 'Query', refreshToken: string };

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, username: string, email: string, permissions: Array<string>, created_at: string, updated_at: string }> };

export type HomesQueryVariables = Exact<{ [key: string]: never; }>;


export type HomesQuery = { __typename?: 'Query', homes: Array<{ __typename?: 'Home', id: string, name: string, description: string, user: { __typename?: 'User', id: string, username: string } | null }> | null };

export type CreateHomeMutationVariables = Exact<{
  payload: HomeInput;
}>;


export type CreateHomeMutation = { __typename?: 'Mutation', createHome: { __typename?: 'Home', id: string, name: string, description: string, is_active: boolean } | null };


export const LoginDocument = gql`
    query login($user: LoginUserInput!) {
  login(user: $user) {
    user {
      id
      permissions
    }
    token
  }
}
    `;

/**
 * __useLoginQuery__
 *
 * To run a query within a React component, call `useLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginQuery({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useLoginQuery(baseOptions: Apollo.QueryHookOptions<LoginQuery, LoginQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
      }
export function useLoginLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoginQuery, LoginQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
        }
export type LoginQueryHookResult = ReturnType<typeof useLoginQuery>;
export type LoginLazyQueryHookResult = ReturnType<typeof useLoginLazyQuery>;
export type LoginQueryResult = Apollo.QueryResult<LoginQuery, LoginQueryVariables>;
export const RefreshTokenDocument = gql`
    query refreshToken {
  refreshToken
}
    `;

/**
 * __useRefreshTokenQuery__
 *
 * To run a query within a React component, call `useRefreshTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRefreshTokenQuery({
 *   variables: {
 *   },
 * });
 */
export function useRefreshTokenQuery(baseOptions?: Apollo.QueryHookOptions<RefreshTokenQuery, RefreshTokenQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RefreshTokenQuery, RefreshTokenQueryVariables>(RefreshTokenDocument, options);
      }
export function useRefreshTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RefreshTokenQuery, RefreshTokenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RefreshTokenQuery, RefreshTokenQueryVariables>(RefreshTokenDocument, options);
        }
export type RefreshTokenQueryHookResult = ReturnType<typeof useRefreshTokenQuery>;
export type RefreshTokenLazyQueryHookResult = ReturnType<typeof useRefreshTokenLazyQuery>;
export type RefreshTokenQueryResult = Apollo.QueryResult<RefreshTokenQuery, RefreshTokenQueryVariables>;
export const AllUsersDocument = gql`
    query allUsers {
  users {
    id
    username
    email
    permissions
    created_at
    updated_at
  }
}
    `;

/**
 * __useAllUsersQuery__
 *
 * To run a query within a React component, call `useAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
      }
export function useAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
        }
export type AllUsersQueryHookResult = ReturnType<typeof useAllUsersQuery>;
export type AllUsersLazyQueryHookResult = ReturnType<typeof useAllUsersLazyQuery>;
export type AllUsersQueryResult = Apollo.QueryResult<AllUsersQuery, AllUsersQueryVariables>;
export const HomesDocument = gql`
    query homes {
  homes {
    id
    name
    user {
      id
      username
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
export const CreateHomeDocument = gql`
    mutation createHome($payload: HomeInput!) {
  createHome(payload: $payload) {
    id
    name
    description
    is_active
  }
}
    `;
export type CreateHomeMutationFn = Apollo.MutationFunction<CreateHomeMutation, CreateHomeMutationVariables>;

/**
 * __useCreateHomeMutation__
 *
 * To run a mutation, you first call `useCreateHomeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateHomeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createHomeMutation, { data, loading, error }] = useCreateHomeMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useCreateHomeMutation(baseOptions?: Apollo.MutationHookOptions<CreateHomeMutation, CreateHomeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateHomeMutation, CreateHomeMutationVariables>(CreateHomeDocument, options);
      }
export type CreateHomeMutationHookResult = ReturnType<typeof useCreateHomeMutation>;
export type CreateHomeMutationResult = Apollo.MutationResult<CreateHomeMutation>;
export type CreateHomeMutationOptions = Apollo.BaseMutationOptions<CreateHomeMutation, CreateHomeMutationVariables>;
export type HomeKeySpecifier = ('created_at' | 'description' | 'display_images' | 'id' | 'is_active' | 'name' | 'original_images' | 'updated_at' | 'user' | HomeKeySpecifier)[];
export type HomeFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	display_images?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_active?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	original_images?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LoginResultKeySpecifier = ('token' | 'user' | LoginResultKeySpecifier)[];
export type LoginResultFieldPolicy = {
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('addAdminPermission' | 'createHome' | 'createUser' | 'removeAdminPermission' | 'resetPassword' | 'updateHome' | 'updateUser' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	addAdminPermission?: FieldPolicy<any> | FieldReadFunction<any>,
	createHome?: FieldPolicy<any> | FieldReadFunction<any>,
	createUser?: FieldPolicy<any> | FieldReadFunction<any>,
	removeAdminPermission?: FieldPolicy<any> | FieldReadFunction<any>,
	resetPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	updateHome?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUser?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('activeHomes' | 'findHomes' | 'forgotPassword' | 'home' | 'homes' | 'login' | 'refreshToken' | 'user' | 'users' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	activeHomes?: FieldPolicy<any> | FieldReadFunction<any>,
	findHomes?: FieldPolicy<any> | FieldReadFunction<any>,
	forgotPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	home?: FieldPolicy<any> | FieldReadFunction<any>,
	homes?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshToken?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('created_at' | 'email' | 'id' | 'permissions' | 'updated_at' | 'username' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Home?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HomeKeySpecifier | (() => undefined | HomeKeySpecifier),
		fields?: HomeFieldPolicy,
	},
	LoginResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LoginResultKeySpecifier | (() => undefined | LoginResultKeySpecifier),
		fields?: LoginResultFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;