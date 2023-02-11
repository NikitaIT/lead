import generateUtilityClass from '@mui/base/generateUtilityClass';
import generateUtilityClasses from '@mui/base/generateUtilityClasses';

export interface SuspenseImageClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type SuspenseImageClassKey = keyof SuspenseImageClasses;

export function getSuspenseImageUtilityClass(slot: string): string {
  return generateUtilityClass('MuiLeadSuspenseImage', slot);
}

const suspenseImageClasses = generateUtilityClasses<SuspenseImageClassKey>(
  'MuiLeadSuspenseImage',
  ['root']
);

export default suspenseImageClasses;
