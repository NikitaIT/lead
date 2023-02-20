import { JwtPayload } from './jwt-payload.interface';

export abstract class AuthService {}
export interface AuthService {
  /**
   * Verifies that the JWT payload associated with a JWT is valid by making sure the user exists and is enabled
   *
   * @param {JwtPayload} payload
   * @returns {(Promise<UserDocument | undefined>)} returns undefined if there is no user or the account is not enabled
   * @memberof AuthService
   */
  validateJwtPayload(payload: JwtPayload): Promise<unknown | undefined>;
}
