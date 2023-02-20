import { LogLevel } from '@lead/logger';
import { Injectable } from '@nestjs/common';
import { DEFAULT_CONFIG } from './config.default';
import { ConfigData, ConfigDataSchema } from './config.interface';
import { ConfigService as NestConfigService } from '@nestjs/config';
/**
 * Provides a means to access the application configuration.
 */
@Injectable()
export class ConfigService {
  private config: ConfigData;

  constructor(x: NestConfigService, data: ConfigData = DEFAULT_CONFIG) {
    this.config = data;
  }

  /**
   * Loads the config from environment variables.
   */
  public loadFromEnv() {
    this.load().catch((x: { errors: string }) => {
      console.error('Invalid env', x.errors);
      const nextTrySec = 5;
      console.error(`Retry load env afrer ${nextTrySec}s`);
      setTimeout(() => this.load(), nextTrySec * 1000);
    });
  }

  async load() {
    this.config = this.parseConfigFromEnv(process.env);
    return ConfigDataSchema.validate(this.config);
  }

  public parseConfigFromEnv(env: NodeJS.ProcessEnv): ConfigData {
    const envVal = env.NODE_ENV || DEFAULT_CONFIG.env;
    return {
      env: envVal,
      port: parseInt(env.PORT, 10),
      db: {
        url: env.DATABASE_URL || DEFAULT_CONFIG.db.url,
      },
      log: {
        logLevel: (env.LOG_LEVEL || DEFAULT_CONFIG.log.logLevel) as LogLevel,
        suppressDateAndLevelInMsg: envVal === 'test',
      },
      newRelicKey: env.NEW_RELIC_KEY || DEFAULT_CONFIG.newRelicKey,
      sendGrid: {
        apiKey: env.SENDGRID_API_KEY || '',
        verifiedEmail: env.SENDGRID_VERIFIED_SENDER_EMAIL || '',
      },
      auth: {
        jwtSecret: env.JWT_SECRET || '',
        expireIn: Number(env.JWT_EXPIRE_IN) || 268000,
      },
    };
  }
  /**
   * Retrieves the config.
   * @returns immutable view of the config data
   */
  public get(): Readonly<ConfigData> {
    return this.config;
  }
}
