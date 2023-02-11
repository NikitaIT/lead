import generateUtilityClass from '@mui/base/generateUtilityClass';
import generateUtilityClasses from '@mui/base/generateUtilityClasses';

export interface LazyImageClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the skeleton element. */
  skeleton: string;
  /** Styles applied to the img element. */
  image: string;
}

export type LazyImageClassKey = keyof LazyImageClasses;

export function getLazyImageUtilityClass(slot: string): string {
  return generateUtilityClass('MuiLeadLazyImage', slot);
}

const lazyImageClasses = generateUtilityClasses<LazyImageClassKey>(
  'MuiLeadLazyImage',
  ['root']
);

export default lazyImageClasses;
