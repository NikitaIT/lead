import generateUtilityClass from '@mui/base/generateUtilityClass';
import generateUtilityClasses from '@mui/base/generateUtilityClasses';

export interface SplitButtonClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if `size="medium"`. */
  sizeMedium: string;
  /** State class applied to the root element if `disabled={true}`. */
  disabled: string;
  /** State class applied to the root element if `loading={true}`. */
  loading: string;
  /** Styles applied to the root element if `size="small"`. */
  sizeSmall: string;
  /** Styles applied to the root element if `color="primary"`. */
  colorPrimary: string;
  /** Styles applied to the root element if `color="secondary"`. */
  colorSecondary: string;
  /** Styles applied to the root element if `edge="start"`. */
  edgeStart: string;
  /** Styles applied to the root element if `edge="end"`. */
  edgeEnd: string;
  /** Styles applied to the root element if `fullWidth={true}` */
  fullWidth: string;
  /** Styles applied to the button element. */
  button: string;
  /** Styles applied to the content element. */
  content: string;
}

export type SplitButtonClassKey = keyof SplitButtonClasses;

export function getSplitButtonUtilityClass(slot: string): string {
  return generateUtilityClass('MuiLeadSplitButton', slot);
}

const splitButtonClasses = generateUtilityClasses<SplitButtonClassKey>(
  'MuiLeadSplitButton',
  [
    'root',
    'button',
    'content',
    'colorPrimary',
    'colorSecondary',
    'fullWidth',
    'sizeMedium',
    'sizeSmall',
    'disabled',
    'loading',
    'edgeEnd',
    'edgeStart',
  ]
);

export default splitButtonClasses;
