
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface HomeInput {
    name: string;
    description: string;
    is_active: boolean;
}

export interface Home {
    __typename?: 'Home';
    id: string;
    name: string;
    user?: Nullable<User>;
    description: string;
    display_images?: Nullable<string[]>;
    original_images?: Nullable<string[]>;
    is_active: boolean;
    created_at?: Nullable<Date>;
    updated_at?: Nullable<Date>;
}

export interface IQuery {
    __typename?: 'IQuery';
    homes(): Nullable<Home[]> | Promise<Nullable<Home[]>>;
    home(id?: Nullable<string>): Home | Promise<Home>;
    findHomes(name: string): Nullable<Home[]> | Promise<Nullable<Home[]>>;
    activeHomes(): Nullable<Home[]> | Promise<Nullable<Home[]>>;
}

export interface IMutation {
    __typename?: 'IMutation';
    createHome(payload: HomeInput): Nullable<Home> | Promise<Nullable<Home>>;
    updateHome(id: string, payload: HomeInput): Nullable<Home> | Promise<Nullable<Home>>;
}

export interface ISubscription {
    __typename?: 'ISubscription';
    homeAdded(id: string): Nullable<Home> | Promise<Nullable<Home>>;
}

export interface User {
    __typename?: 'User';
    id: string;
}

export type Time = any;
export type DateTime = any;
export type Timestamp = any;
export type TimeZone = any;
export type UtcOffset = any;
export type Duration = any;
export type ISO8601Duration = any;
export type LocalDate = any;
export type LocalTime = any;
export type LocalEndTime = any;
export type EmailAddress = any;
export type NegativeFloat = any;
export type NegativeInt = any;
export type NonEmptyString = any;
export type NonNegativeFloat = any;
export type NonNegativeInt = any;
export type NonPositiveFloat = any;
export type NonPositiveInt = any;
export type PhoneNumber = any;
export type PositiveFloat = any;
export type PositiveInt = any;
export type PostalCode = any;
export type UnsignedFloat = any;
export type UnsignedInt = any;
export type URL = any;
export type BigInt = any;
export type Long = any;
export type Byte = any;
export type UUID = any;
export type GUID = any;
export type Hexadecimal = any;
export type HexColorCode = any;
export type HSL = any;
export type HSLA = any;
export type IP = any;
export type IPv4 = any;
export type IPv6 = any;
export type ISBN = any;
export type JWT = any;
export type Latitude = any;
export type Longitude = any;
export type MAC = any;
export type Port = any;
export type RGB = any;
export type RGBA = any;
export type SafeInt = any;
export type USCurrency = any;
export type Currency = any;
export type JSON = any;
export type JSONObject = any;
export type IBAN = any;
export type ObjectID = any;
export type Void = any;
export type DID = any;
export type CountryCode = any;
export type Locale = any;
export type RoutingNumber = any;
export type AccountNumber = any;
export type Cuid = any;
export type SemVer = any;
type Nullable<T> = T | null;
