import { AuthService as BaseAuthService } from '@lead/auth-client';
import { LoginUserInput, LoginResult } from '../../graphql.classes';
import { UserEntity } from '../../users';
import { JwtPayload } from './JwtPayload';

export abstract class AuthService {}
export interface AuthService extends BaseAuthService {
  validateUserByPassword(
    user: UserEntity,
    loginAttempt: LoginUserInput
  ): Promise<LoginResult | undefined>;
  validateJwtPayload(payload: JwtPayload): Promise<UserEntity | undefined>;
  createJwt(user: UserEntity): { data: JwtPayload; token: string };
}
