
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

type Nullable<T> = T | null;
