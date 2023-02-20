import { DynamicModule, Module } from '@nestjs/common';
import { AllwaysValidAuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { PassportStrategyJwtStrategy } from './strategies/jwt.strategy';
import { Config, JwtStrategy, AuthService } from '../ports';
import {
  ExternalProvider,
  ImportsForExternalProvider,
} from 'framework/nest-module/src';
@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
  ],
  controllers: [],
})
export class AuthModule {
  static forRoot({
    config,
    imports,
    AuthService: AuthServiceProvider = {
      useClass: AllwaysValidAuthService,
    },
    JwtStrategy: JwtStrategyProvider = {
      useClass: PassportStrategyJwtStrategy,
    },
  }: {
    config: ExternalProvider<Config>;
    imports: ImportsForExternalProvider;
    AuthService?: ExternalProvider<AuthService>;
    JwtStrategy?: ExternalProvider<JwtStrategy>;
  }): DynamicModule {
    const providers = [
      {
        provide: AuthService,
        ...AuthServiceProvider,
      },
      {
        provide: JwtStrategy,
        ...JwtStrategyProvider,
      },
    ];
    const authConfigModule = AuthConfigModule.forRoot({ imports, config });
    const jwt = JwtModule.registerAsync({
      imports: [authConfigModule, ...imports],
      useFactory: (config: Config) => {
        const options: JwtModuleOptions = {
          secret: config.jwtSecret,
        };
        if (config.expireIn) {
          options.signOptions = {
            expiresIn: config.expireIn,
          };
        }
        return options;
      },
      inject: [Config],
    });
    return {
      module: AuthModule,
      providers,
      imports: [authConfigModule, jwt, ...imports],
      exports: [...providers, jwt, authConfigModule],
    };
  }
}
@Module({})
export class AuthConfigModule {
  static forRoot({
    imports,
    config,
  }: {
    config: ExternalProvider<Config>;
    imports: ImportsForExternalProvider;
  }): DynamicModule {
    const provider = {
      provide: Config,
      ...config,
    };
    return {
      module: AuthConfigModule,
      imports,
      providers: [provider],
      exports: [provider],
    };
  }
}
