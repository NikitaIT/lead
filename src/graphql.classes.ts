
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class LoginUserInput {
    username?: Nullable<string>;
    email?: Nullable<string>;
    password: string;
}

export class CreateUserInput {
    username: string;
    email: string;
    password: string;
}

export class UpdateUserInput {
    username?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<UpdatePasswordInput>;
    enabled?: Nullable<boolean>;
}

export class UpdatePasswordInput {
    oldPassword: string;
    newPassword: string;
}

export class Set {
    id: number;
    name: string;
    year: string;
    numParts: number;
}

export abstract class IQuery {
    abstract allSets(): Set[] | Promise<Set[]>;

    abstract login(user: LoginUserInput): LoginResult | Promise<LoginResult>;

    abstract refreshToken(): string | Promise<string>;

    abstract users(): User[] | Promise<User[]>;

    abstract user(id: string): User | Promise<User>;

    abstract forgotPassword(email?: Nullable<string>): Nullable<boolean> | Promise<Nullable<boolean>>;
}

export abstract class IMutation {
    abstract addSet(name?: Nullable<string>, year?: Nullable<string>, numParts?: Nullable<number>): Nullable<Set> | Promise<Nullable<Set>>;

    abstract addComment(postId: number, comment: string): Nullable<Comment> | Promise<Nullable<Comment>>;

    abstract createUser(createUserInput?: Nullable<CreateUserInput>): User | Promise<User>;

    abstract updateUser(fieldsToUpdate: UpdateUserInput, username?: Nullable<string>): User | Promise<User>;

    abstract addAdminPermission(username: string): User | Promise<User>;

    abstract removeAdminPermission(username: string): User | Promise<User>;

    abstract resetPassword(username: string, code: string, password: string): User | Promise<User>;
}

export class Comment {
    postId: number;
    comment: string;
}

export abstract class ISubscription {
    abstract commentAdded(postId: number): Nullable<Comment> | Promise<Nullable<Comment>>;
}

export class LoginResult {
    user: User;
    token: string;
}

export class User {
    id: string;
    username: string;
    email: string;
    permissions: string[];
    created_at: Date;
    updated_at: Date;
}

type Nullable<T> = T | null;
