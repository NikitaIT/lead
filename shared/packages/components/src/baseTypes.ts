export const _Color = {
  default: 'default',
  primary: 'primary',
  secondary: 'secondary',
  frontPage: 'frontPage',
  error: 'error',
  success: 'success',
  info: 'info',
  warning: 'warning',
  inherit: 'inherit',
} as const;

export const Color = _Color;
export type Color = keyof typeof _Color;
export type ColorOnly = Exclude<keyof typeof _Color, typeof Color.inherit>;
export type ColorOnlyNotDedault = Exclude<
  keyof typeof _Color,
  typeof Color.inherit | typeof Color.default
>;

const _Variant = {
  contained: 'contained',
  outlined: 'outlined',
  text: 'text',
} as const;
export const Variant = _Variant;
export type Variant = keyof typeof _Variant;

const _Edge = {
  start: 'start',
  end: 'end',
} as const;
export const Edge = _Edge;
export type Edge = keyof typeof _Edge;

const _Size = {
  large: 'large' as const,
  medium: 'medium' as const,
  small: 'small' as const,
} as const;
export const Size = _Size;
export type Size = (typeof _Size)[keyof typeof _Size];

const _Severity = {
  error: 'error',
  info: 'info',
  success: 'success',
  warning: 'warning',
} as const;
export const Severity = _Severity;
export type Severity = (typeof _Severity)[keyof typeof _Severity];
