import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserResolver } from './users.resolvers';
// import { DateScalar } from '../scalars/date.scalar';
import { ConfigModule } from '@lead/config';
import { adapters } from '../auth';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/users.entity';
import { LoggerModule } from '../Logger';
import { AdminController } from './users.controller';
import { AuthResolver } from './Login.resolver';

@Module({
  imports: [
    LoggerModule(),
    TypeOrmModule.forFeature([UserEntity]),
    ConfigModule,
    forwardRef(() => adapters.AuthModule),
  ],
  exports: [UsersService],
  controllers: [AdminController],
  providers: [UsersService, UserResolver, AuthResolver /* DateScalar */],
})
export class UsersModule {}
