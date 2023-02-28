import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {"context":{"clientName":"home"}} as const;
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

export type Home = {
  readonly __typename?: 'Home';
  readonly created_at: Maybe<Scalars['Date']>;
  readonly description: Scalars['String'];
  readonly display_images: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly id: Scalars['ID'];
  readonly is_active: Scalars['Boolean'];
  readonly name: Scalars['String'];
  readonly original_images: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly updated_at: Maybe<Scalars['Date']>;
  readonly user: Maybe<User>;
};

export type HomeInput = {
  readonly description: Scalars['String'];
  readonly is_active: Scalars['Boolean'];
  readonly name: Scalars['String'];
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  readonly createHome: Maybe<Home>;
  readonly updateHome: Maybe<Home>;
};


export type MutationCreateHomeArgs = {
  payload: HomeInput;
};


export type MutationUpdateHomeArgs = {
  id: Scalars['ID'];
  payload: HomeInput;
};

export type Query = {
  readonly __typename?: 'Query';
  readonly activeHomes: Maybe<ReadonlyArray<Home>>;
  readonly findHomes: Maybe<ReadonlyArray<Home>>;
  readonly home: Home;
  readonly homes: Maybe<ReadonlyArray<Home>>;
};


export type QueryFindHomesArgs = {
  name: Scalars['String'];
};


export type QueryHomeArgs = {
  id: InputMaybe<Scalars['ID']>;
};

export type Subscription = {
  readonly __typename?: 'Subscription';
  readonly homeAdded: Maybe<Home>;
};


export type SubscriptionHomeAddedArgs = {
  id: Scalars['ID'];
};

export type User = {
  readonly __typename?: 'User';
  readonly id: Scalars['ID'];
};

export type HomesQueryResultItemFragment = { readonly __typename?: 'Home', readonly id: string, readonly name: string, readonly description: string, readonly user: { readonly __typename?: 'User', readonly id: string } | null };

export type HomeAddedSubscriptionVariables = Exact<{
  id: Scalars['ID'];
}>;


export type HomeAddedSubscription = { readonly __typename?: 'Subscription', readonly homeAdded: { readonly __typename?: 'Home', readonly id: string, readonly name: string, readonly description: string, readonly user: { readonly __typename?: 'User', readonly id: string } | null } | null };

export const HomesQueryResultItemFragmentDoc = gql`
    fragment HomesQueryResultItem on Home {
  id
  name
  description
  user {
    id
  }
}
    `;
export const HomeAddedDocument = gql`
    subscription homeAdded($id: ID!) {
  homeAdded(id: $id) {
    ...HomesQueryResultItem
  }
}
    ${HomesQueryResultItemFragmentDoc}`;

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
export type MutationKeySpecifier = ('createHome' | 'updateHome' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	createHome?: FieldPolicy<any> | FieldReadFunction<any>,
	updateHome?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('activeHomes' | 'findHomes' | 'home' | 'homes' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	activeHomes?: FieldPolicy<any> | FieldReadFunction<any>,
	findHomes?: FieldPolicy<any> | FieldReadFunction<any>,
	home?: FieldPolicy<any> | FieldReadFunction<any>,
	homes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscriptionKeySpecifier = ('homeAdded' | SubscriptionKeySpecifier)[];
export type SubscriptionFieldPolicy = {
	homeAdded?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('id' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Home?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HomeKeySpecifier | (() => undefined | HomeKeySpecifier),
		fields?: HomeFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Subscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscriptionKeySpecifier | (() => undefined | SubscriptionKeySpecifier),
		fields?: SubscriptionFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    