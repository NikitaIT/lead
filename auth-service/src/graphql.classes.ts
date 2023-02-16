
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

type Nullable<T> = T | null;
