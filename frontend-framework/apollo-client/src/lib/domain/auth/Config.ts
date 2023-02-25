import { object, string } from 'yup';

export const ConfigSchema = object({
  token: string(),
});

export interface Config {
  readonly token: string;
}
