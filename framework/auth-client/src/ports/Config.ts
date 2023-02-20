import { object, string, number } from 'yup';

export const ConfigSchema = object({
  jwtSecret: string().trim().required('Pleace provide JWT_SECRET .env'),
  expireIn: number()
    .positive()
    .min(1)
    .required('Pleace provide EXPIRE_IN .env'),
});

export abstract class Config {}
export interface Config {
  readonly jwtSecret: string;
  readonly expireIn: number;
}
