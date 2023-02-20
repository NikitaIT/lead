import { Module, Provider } from '@nestjs/common';
import {
  ConfigModule as NestConfigModule,
  ConfigService as NestConfigService,
} from '@nestjs/config';
import { ConfigService } from './config.service';

const configFactory: Provider<unknown> = {
  provide: ConfigService,
  useFactory: (x: NestConfigService) => {
    const config = new ConfigService(x);
    config.loadFromEnv();
    return config;
  },
  inject: [NestConfigService],
};

@Module({
  imports: [NestConfigModule.forRoot({})],
  controllers: [],
  providers: [configFactory],
  exports: [configFactory],
})
export class ConfigModule {}
