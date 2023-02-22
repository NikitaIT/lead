import { Module, forwardRef, Inject } from '@nestjs/common';
import { PersistedUserAuthService } from './auth.service';
import { UserEntity, UsersModule, UsersService } from '../../users';
import { AuthResolver } from './auth.resolvers';
import { ConfigModule, ConfigService } from '@lead/config';
import { LoggerModule } from '../../Logger';
import { adapters, AuthService as BaseAuthService } from '@lead/auth-client';
import { AuthService } from '../ports';
import { TypeOrmModule } from '@nestjs/typeorm';

const baseAuthModule = adapters.AuthModule.forRoot({
  imports: [ConfigModule, TypeOrmModule.forFeature([UserEntity])],
  config: {
    useFactory: (service: ConfigService) => ({
      expireIn: service.get().auth.expireIn,
      jwtSecret: service.get().auth.jwtSecret,
    }),
    inject: [ConfigService],
  },
  AuthService: {
    useClass: PersistedUserAuthService,
  },
});

@Module({
  imports: [
    baseAuthModule,
    LoggerModule(),
    forwardRef(() => UsersModule),
    ConfigModule,
  ],
  controllers: [],
  providers: [
    {
      provide: AuthService,
      useExisting: BaseAuthService,
    },
    AuthResolver,
  ],
  exports: [
    baseAuthModule,
    {
      provide: AuthService,
      useExisting: BaseAuthService,
    },
  ],
})
export class AuthModule {}
