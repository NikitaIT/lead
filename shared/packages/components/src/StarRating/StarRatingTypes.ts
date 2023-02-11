import { MUIStyledCommonProps } from '@mui/system';

export type StarRatingProps = MUIStyledCommonProps<any> & OwnerState;
export type Req = {
  max: number;
  value: number;
};
export type StateModifiers = {
  classes?: Record<string, string>;
  showTextRating: boolean | true;
  precise: boolean | false;
  component: React.ElementType<any> | undefined | 'div';
  className: string;
};
export type OwnerState = Req & Partial<StateModifiers>;
export type StarOwnerState = {
  starType: StarType;
  className: string;
  starPercentageWidth?: number | undefined;
};
export type StarProps = StarOwnerState;
export enum StarType {
  empty = 'empty',
  full = 'full',
  half = 'half',
}
export type StarRatingTypeMap = {
  props: StarRatingProps;
  defaultComponent: React.ElementType;
};
