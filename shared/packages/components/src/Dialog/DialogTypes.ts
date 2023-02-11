import { DialogBaseProps } from '../DialogBase';

export type DialogProps = OwnerState &
  DialogBaseProps & {
    header: string;
  };
export type OwnerState = {
  classes?: Record<string, string>;
};
