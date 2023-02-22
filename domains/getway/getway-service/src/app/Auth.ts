import {
  HttpStatus,
  HttpException,
  UnauthorizedException,
} from '@nestjs/common';
import assert from 'assert';
import { verify } from 'jsonwebtoken';

export class Auth {
  constructor(
    private config: { INVALID_AUTH_TOKEN: string; INVALID_BEARER_TOKEN: string }
  ) {}
  getToken = (authToken: string): string => {
    console.log(authToken);
    const match = authToken.match(/^Bearer (.*)$/);
    if (!match || match.length < 2) {
      throw new HttpException(
        { message: this.config.INVALID_BEARER_TOKEN },
        HttpStatus.UNAUTHORIZED
      );
    }
    console.log(match[1]);
    return match[1];
  };

  decodeToken = (tokenString: string) => {
    assert(process.env.SECRET_KEY, 'set process.env.SECRET_KEY');
    const decoded = verify(tokenString, process.env.SECRET_KEY);
    if (!decoded) {
      throw new HttpException(
        { message: this.config.INVALID_AUTH_TOKEN },
        HttpStatus.UNAUTHORIZED
      );
    }
    return decoded;
  };
  handleAuth = ({ req }) => {
    try {
      console.log('handleAuth', req.headers);
      if (req.headers.authorization) {
        const token = this.getToken(req.headers.authorization);
        console.log('handleAuth:token', token);
        const decoded: any = this.decodeToken(token);
        console.log('handleAuth:decoded', decoded);
        return {
          userId: decoded.userId,
          permissions: decoded.permissions,
          authorization: `${req.headers.authorization}`,
        };
      }
    } catch (err) {
      console.log(err);
      throw new UnauthorizedException(
        'User unauthorized with invalid authorization Headers'
      );
    }
  };
}
