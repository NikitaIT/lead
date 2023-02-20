import { Injectable } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { AuthenticationError } from 'apollo-server-core';
import { Config, JwtPayload, AuthService, JwtStrategy } from '../../ports';

@Injectable()
export class PassportStrategyJwtStrategy
  extends PassportStrategy(Strategy)
  implements JwtStrategy
{
  constructor(private authService: AuthService, config: Config) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.jwtSecret,
    });
  }

  // Documentation for this here: https://www.npmjs.com/package/passport-jwt
  async validate(payload: JwtPayload) {
    // This is called to validate the user in the token exists
    const user = await this.authService.validateJwtPayload(payload);
    if (!user) {
      throw new AuthenticationError(
        'Could ********** not log-in with the provided credentials'
      );
    }

    return user;
  }
}
