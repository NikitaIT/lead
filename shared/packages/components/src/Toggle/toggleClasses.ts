import generateUtilityClass from '@mui/base/generateUtilityClass';
import generateUtilityClasses from '@mui/base/generateUtilityClasses';

export interface ToggleClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Pseudo-class applied to the root element if `fullWidth={true}` */
  fullWidth: string;
  /** Styles applied to the text element */
  text: string;
  /** Pseudo-class applied to the text element when text is active */
  textActive: string;
  /** Pseudo-class applied to the text element if `twoLine={true}` */
  textTwoLine: string;
  /** Styles applied to the indicator element */

  indicator: string;
  /** Pseudo-class applied to the indicator element if `checked={true}` */
  indicatorActive: string;
  /** styles applied to the checkbox element */
  checkbox: string;
  /** Pseudo-class applied to the root element if `disabled={true}`. */
  disabled: string;
}

export type ToggleClassKey = keyof ToggleClasses;

export function getToggleUtilityClass(slot: string): string {
  return generateUtilityClass('MuiLeadToggle', slot);
}

export const switchClasses = generateUtilityClasses<ToggleClassKey>(
  'MuiLeadToggle',
  [
    'root',
    'fullWidth',
    'text',
    'textActive',
    'indicator',
    'disabled',
    'indicatorActive',
    'textTwoLine',
    'checkbox',
  ]
);

export default switchClasses;
