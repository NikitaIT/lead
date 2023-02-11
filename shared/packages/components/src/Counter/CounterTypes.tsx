import { Color, Size, Variant } from '../baseTypes';

export type CounterProps = any;
export type CounterTypeMap = {
  props: CounterProps;
  defaultComponent: React.ElementType;
};
export type OwnerState = {
  readOnly: boolean;
  disabled: boolean;
  size: CounterPropsSizeOverrides;
  color: CounterPropsColorOverride;
  variant: CounterPropsVariantOverrides;
} & {
  expandOnFocus: boolean;
  focused: boolean;
  classes?: Record<string, string>;
};

export type CounterPropsColorOverride = Color;

export type CounterPropsSizeOverrides = typeof Size.large | typeof Size.medium;

export type CounterPropsVariantOverrides = Variant;
