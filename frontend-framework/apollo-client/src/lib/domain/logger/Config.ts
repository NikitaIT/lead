import { object } from 'yup';

export const ConfigSchema = object({});
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Config {
  errorCallback?: (error: unknown) => void;
}
