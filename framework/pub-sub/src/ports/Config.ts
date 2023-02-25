import { string, object, number, mixed } from 'yup';

export const ConfigSchema = mixed().oneOf([
  object({
    type: string().oneOf(['redis']),
    host: string(),
    port: number(),
  }),
  object({
    type: string().oneOf(['self']).default('self'),
  }),
]);

export abstract class Config {}
export interface Config {
  readonly type?: 'redis' | 'self';
  readonly host?: string;
  readonly port?: number;
}
