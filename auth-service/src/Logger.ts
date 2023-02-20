import { adapters } from '@lead/logger';
import { ConfigModule, ConfigService } from '@lead/config';

export const LoggerModule = () =>
  adapters.LoggerModule.forRootAsync(adapters.LoggerModule, {
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => {
      return configService.get().log;
    },
    inject: [ConfigService],
  });
