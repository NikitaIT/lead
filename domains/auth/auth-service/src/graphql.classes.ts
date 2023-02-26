
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface LoginUserInput {
    username?: Nullable<string>;
    email?: Nullable<string>;
    password: string;
}

export interface CreateUserInput {
    username: string;
    email: string;
    password: string;
}

export interface UpdateUserInput {
    username?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<UpdatePasswordInput>;
    enabled?: Nullable<boolean>;
}

export interface UpdatePasswordInput {
    oldPassword: string;
    newPassword: string;
}

export interface IQuery {
    login(user: LoginUserInput): LoginResult | Promise<LoginResult>;
    refreshToken(): string | Promise<string>;
    users(): User[] | Promise<User[]>;
    user(id: string): User | Promise<User>;
    forgotPassword(email?: Nullable<string>): Nullable<boolean> | Promise<Nullable<boolean>>;
}

export interface LoginResult {
    user: User;
    token: string;
}

export interface IMutation {
    createUser(createUserInput?: Nullable<CreateUserInput>): User | Promise<User>;
    updateUser(fieldsToUpdate: UpdateUserInput, username?: Nullable<string>): User | Promise<User>;
    addAdminPermission(username: string): User | Promise<User>;
    removeAdminPermission(username: string): User | Promise<User>;
    resetPassword(username: string, code: string, password: string): User | Promise<User>;
}

export interface User {
    id: string;
    username: string;
    email: string;
    permissions: string[];
    created_at: Date;
    updated_at: Date;
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
