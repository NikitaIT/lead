import generateUtilityClass from '@mui/base/generateUtilityClass';
import generateUtilityClasses from '@mui/base/generateUtilityClasses';

export interface ToggleCardClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the input element. */
  input: string;
  /** Styles applied to indicator element. */
  indicator: string;
  /** Styles applied to the content element. */
  icon: string;
  /** Pseudo-class applied to the root element if `disabled={true}`. */
  disabled: string;
}

export type ToggleCardClassKey = keyof ToggleCardClasses;

export function getToggleCardUtilityClass(slot: string): string {
  return generateUtilityClass('MuiLeadToggleCard', slot);
}

export const toggleCardClasses = generateUtilityClasses<ToggleCardClassKey>(
  'MuiLeadToggleCard',
  ['root', 'icon', 'input', 'indicator', 'disabled']
);

export default toggleCardClasses;
