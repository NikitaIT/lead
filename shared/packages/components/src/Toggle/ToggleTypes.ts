export type OwnerState = JSX.IntrinsicElements['input'] & {
  component: React.ElementType<any> | undefined;
  firstText: string;
  secondText: string;
  fullWidth: boolean;
  twoLines: boolean;
  active: boolean;
  classes?: Record<string, string>;
};
export type ToggleProps = OwnerState;
export type ToggleTypeMap = {
  props: ToggleProps;
  defaultComponent: React.ElementType;
};
