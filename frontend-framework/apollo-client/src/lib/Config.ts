import { InMemoryCacheConfig } from '@apollo/client';
import { object, string, array } from 'yup';
import {
  AuthConfig,
  AuthConfigSchema,
  Domain,
  DomainSchema,
  LoggerConfig,
  LoggerConfigSchema,
} from './domain';
import 'localforage';

export const ConfigSchema = object({
  name: string().required(),
  version: string().required(),
  localForageOptions: object(),
  domains: array(DomainSchema).required(),
  getway: string().required(),
  auth: AuthConfigSchema.required(),
  logger: LoggerConfigSchema.optional(),
});

export interface Config {
  readonly name: string;
  readonly version: string;
  readonly localForageOptions: LocalForageOptions;
  // generator create all getway-service methods with this name
  readonly domains: Domain[];
  readonly getway: string;
  readonly auth: AuthConfig;
  readonly logger?: LoggerConfig;
  readonly inMemoryCacheConfig?: InMemoryCacheConfig;
}
