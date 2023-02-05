
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class Set {
    id: number;
    name: string;
    year: string;
    numParts: number;
}

export abstract class IQuery {
    abstract allSets(): Set[] | Promise<Set[]>;
}

export abstract class IMutation {
    abstract addSet(name?: Nullable<string>, year?: Nullable<string>, numParts?: Nullable<number>): Nullable<Set> | Promise<Nullable<Set>>;
}

type Nullable<T> = T | null;
