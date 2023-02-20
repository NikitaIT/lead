import { object, string } from 'yup';

export const ConfigSchema = object({
  url: string().required(),
});

/**
 * Configuration for the database connection.
 */
export abstract class Config {}
export interface Config {
  readonly url: string;
}
