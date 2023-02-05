
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Set {
    __typename?: 'Set';
    id: number;
    name: string;
    year: string;
    numParts: number;
}

export interface IQuery {
    __typename?: 'IQuery';
    allSets(): Set[] | Promise<Set[]>;
}

export interface IMutation {
    __typename?: 'IMutation';
    addSet(name?: Nullable<string>, year?: Nullable<string>, numParts?: Nullable<number>): Nullable<Set> | Promise<Nullable<Set>>;
}

type Nullable<T> = T | null;
