import { Resolver, Args, Query, Context } from '@nestjs/graphql';
import { AuthService } from '../auth';
import { LoginResult, LoginUserInput } from '../graphql.classes';
import { AuthenticationError } from 'apollo-server-core';
import { UsersService } from './users.service';

@Resolver('Auth')
export class AuthResolver {
  constructor(private userService: UsersService) {}

  @Query('login')
  async login(@Args('user') user: LoginUserInput): Promise<LoginResult> {
    const result = await this.userService.validateUserByPassword(user);

    if (result) return result;
    throw new AuthenticationError(
      'Could not log-in with the provided credentials'
    );
  }
}
