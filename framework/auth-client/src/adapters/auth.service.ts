import { Injectable } from '@nestjs/common';
import { JwtPayload } from '../ports';
import { AuthService } from '../ports';

@Injectable()
export class AllwaysValidAuthService implements AuthService {
  async validateJwtPayload(payload: JwtPayload): Promise<unknown | undefined> {
    // This will be used when the user has already logged in and has a JWT
    // ? how should we make sure that user is valid from another service
    return payload;
  }
}
