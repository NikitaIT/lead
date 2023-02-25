import { object, string } from 'yup';

export const DomainSchema = object({
  name: string(),
  link: string(),
});

export interface Domain {
  readonly name: string;
  readonly link: string;
}
