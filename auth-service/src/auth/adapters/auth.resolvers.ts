import { Resolver, Args, Query, Context } from '@nestjs/graphql';
import { LoginUserInput, LoginResult } from '../../graphql.classes';
import { AuthService } from '../ports';
import { AuthenticationError } from 'apollo-server-core';
import { JwtAuthGuard } from '../guards';
import { UseGuards } from '@nestjs/common';
import { UserEntity } from '../../users';

@Resolver('Auth')
export class AuthResolver {
  constructor(private authService: AuthService) {}

  // There is no username guard here because if the person has the token, they can be any user
  @Query('refreshToken')
  @UseGuards(JwtAuthGuard)
  async refreshToken(
    @Context('req') request: { user: UserEntity }
  ): Promise<string> {
    const user: UserEntity = request.user;
    if (!user)
      throw new AuthenticationError(
        'Could not log-in with the provided credentials'
      );
    const result = await this.authService.createJwt(user);
    if (result) return result.token;
    throw new AuthenticationError(
      'Could not log-in with the provided credentials'
    );
  }
}
