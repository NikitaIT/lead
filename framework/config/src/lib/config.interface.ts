import {
  Config as AuthConfig,
  ConfigSchema as AuthConfigSchema,
} from '@lead/auth-client';
import {
  Config as DBConfig,
  ConfigSchema as DBConfigSchema,
} from 'framework/db-client/src';
import {
  Config as LoggerConfig,
  ConfigSchema as LoggerConfigSchema,
} from '@lead/logger';
import { number, object, string } from 'yup';
export { Config as AuthConfig } from '@lead/auth-client';
export { Config as DBConfig } from 'framework/db-client/src';
export { Config as LoggerConfig } from '@lead/logger';

export interface SendGridConfig {
  readonly apiKey: string;
  readonly verifiedEmail: string;
}
export const ConfigDataSchema = object({
  env: string(),
  port: number(),
  db: DBConfigSchema,
  sendGrid: object({
    apiKey: string(),
    verifiedEmail: string(),
  }),
  auth: AuthConfigSchema,
  log: LoggerConfigSchema,
  newRelicKey: string(),
});
/**
 * Configuration data for the app.
 */
export interface ConfigData {
  /**
   * The name of the environment.
   * @example 'production'
   */
  readonly env: string;

  readonly port: number;
  /** Database connection details. */
  readonly db: DBConfig;
  readonly sendGrid: SendGridConfig;
  readonly auth: AuthConfig;
  readonly log: LoggerConfig;

  /** The New Relic key to use. */
  readonly newRelicKey?: string;
}
