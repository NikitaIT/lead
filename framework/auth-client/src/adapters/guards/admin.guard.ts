import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthenticationError } from 'apollo-server-core';
import { AuthService } from '../../ports';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  isAdmin(roles: string[]) {
    return roles.includes('admin');
  }
  canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext<{
      req: { user: { permissions: string[] } };
    }>().req;
    console.log(request);
    if (request.user) {
      const user = request.user;
      if (this.isAdmin(user.permissions)) return true;
    }
    throw new AuthenticationError(
      'Could not authenticate with token or user does not have permissions'
    );
  }
}
