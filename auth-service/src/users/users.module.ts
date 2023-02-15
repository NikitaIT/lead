import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserResolver } from './users.resolvers';
import { DateScalar } from '../scalars/date.scalar';
import { ConfigModule } from '../config/config.module';
import { AuthModule } from '../auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/users.entity';
import { LoggerModule } from '../logger/logger.module';
import { ConfigService } from '../config/config.service';
import { AdminController } from './users.controller';

@Module({
  imports: [
    LoggerModule,
    TypeOrmModule.forFeature([UserEntity]),
    ConfigModule,
    forwardRef(() => AuthModule),
  ],
  exports: [UsersService],
  controllers: [AdminController],
  providers: [UsersService, UserResolver, DateScalar, ConfigService],
})
export class UsersModule {}
