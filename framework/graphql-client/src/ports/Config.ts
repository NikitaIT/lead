import { string, object, number, mixed } from 'yup';

export const ConfigSchema = object({
  sourceRoot: string().required('Define project.sourceRoot from project.json'),
});

export abstract class Config {}
export interface Config {
  readonly sourceRoot: string;
}
