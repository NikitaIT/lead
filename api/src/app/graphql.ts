
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
    addComment(postId: number, comment: string): Nullable<Comment> | Promise<Nullable<Comment>>;
}

export interface Comment {
    __typename?: 'Comment';
    postId: number;
    comment: string;
}

export interface ISubscription {
    __typename?: 'ISubscription';
    commentAdded(postId: number): Nullable<Comment> | Promise<Nullable<Comment>>;
}

type Nullable<T> = T | null;
