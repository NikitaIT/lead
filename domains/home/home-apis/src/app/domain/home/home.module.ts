import { Module } from '@nestjs/common';
import { HomeService } from './home.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeResolver } from './home.resolver';
import { Home } from '../entity/home.entity';
import { DateScalar } from '../../scalars/date.scalar';
import { adapters } from '@lead/auth-client';
import { LoggerModule } from '../../../../src/Logger';
import { ConfigModule, ConfigService } from '@lead/config';

@Module({
  imports: [
    LoggerModule(),
    adapters.AuthModule.forRoot({
      imports: [ConfigModule],
      config: {
        useFactory: (service: ConfigService) => ({
          expireIn: service.get().auth.expireIn,
          jwtSecret: service.get().auth.jwtSecret,
        }),
        inject: [ConfigService],
      },
    }),
    TypeOrmModule.forFeature([Home]),
  ],
  providers: [HomeService, HomeResolver, DateScalar],
})
export class HomeModule {}
