import { ButtonBase, ButtonBaseProps } from '@mui/material';
import { Color, Edge, Size } from '../baseTypes';
import { ButtonProps } from './Button';
import { ContentProps } from './Content';
import { SplitButtonRootProps } from './SplitButtonRoot';

export type SplitButtonProps = Req & Partial<OwnerState & Modif>;
export type Req = {
  buttonContent: JSX.Element | string;
};
export type Modif = {
  onClick: ButtonBaseProps['onClick'];
  ButtonComponent: typeof ButtonBase;
  ButtonProps: ButtonBaseProps;
  className: string;
  loadingIndicator: JSX.Element | string;
  component: React.ElementType<any> | undefined | 'span';
  children?: React.ReactNode | undefined;
  classes?: Record<string, string>;
};
export type OwnerStateProps = {
  children?: React.ReactNode | undefined;
  classes?: Record<string, string>;
};
export type OwnerState = ButtonProps &
  ContentProps &
  SplitButtonRootProps &
  Req &
  OwnerStateProps;
export type SplitButtonTypeMap = {
  props: SplitButtonProps;
  defaultComponent: React.ElementType;
};
