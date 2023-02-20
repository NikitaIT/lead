import { LogLevel } from './LogLevel';
import { boolean, object, mixed } from 'yup';

export const ConfigSchema = object({
  suppressDateAndLevelInMsg: boolean(),
  logLevel: mixed().oneOf(Object.values(LogLevel)),
});

export abstract class Config {}
export interface Config {
  readonly suppressDateAndLevelInMsg?: boolean;
  readonly logLevel?: LogLevel;
}
