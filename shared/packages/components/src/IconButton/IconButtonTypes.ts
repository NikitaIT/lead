import { ButtonBaseProps } from '@mui/material';
import { Color, Edge, Size, Variant } from '../baseTypes';

export type IconButtonProps = Partial<OwnerState>;
export type ExtendIconButton = OwnerState;
export type ExtendIconButtonTypeMap = {
  props: IconButtonProps;
  defaultComponent: React.ElementType;
};
export type IconButtonColors = Color | 'inherit' | 'frontPage';
export type IconButtonPropsColorOverrides = Color | 'inherit' | 'frontPage';
export type IconButtonPropsSizeOverrides = Size;
export type IconButtonPropsVariantOverrides = Variant;
export type IconButtonTypeMap = {
  props: IconButtonProps;
  defaultComponent: React.ElementType;
};

export type OwnerState = ButtonBaseProps & {
  color: IconButtonPropsColorOverrides;
  size: IconButtonPropsSizeOverrides;
  variant: IconButtonPropsVariantOverrides;
  edge: typeof Edge.start | typeof Edge.end | false;
  classes?: Record<string, string>;
  disableElevation?: boolean;
  disableFocusRipple: boolean;
};
