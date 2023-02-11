import { Size } from '../baseTypes';

type ConsultantInfoPropsRequired = {
  consultantName: string;
  consultantTitle: string;
  consultantNumber: string;
};
export type ConsultantInfoProps = ConsultantInfoPropsRequired &
  Partial<
    {
      profilePictureUrl: string;
      className: string;
      component: React.ElementType<any> | undefined | 'div';
      children: React.ReactNode | undefined;
    } & OwnerState
  >;

export type ConsultantInfoTypeMap = {
  props: ConsultantInfoProps;
  defaultComponent: React.ElementType;
};

export type OwnerState = {
  size: typeof Size.medium | typeof Size.large;
  classes?: Record<string, string>;
  hasChild: boolean;
};
