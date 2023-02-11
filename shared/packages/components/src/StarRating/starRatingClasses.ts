import generateUtilityClass from '@mui/base/generateUtilityClass';
import generateUtilityClasses from '@mui/base/generateUtilityClasses';

export interface StarRatingClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the star(svg) element. */
  star: string;
  /** Styles applied to the text rating after. */
  textRating: string;
  /** Styles to be applied directly to a SVG empty star */
  emptyStar: string;
  /** Styles to be applied directly to a SVG full star */
  fullStar: string;
  /** Styles to be applied directly to a SVG half star */
  halfStar: string;
}

export type StarRatingClassKey = keyof StarRatingClasses;

export function getStarRatingUtilityClass(slot: string): string {
  return generateUtilityClass('MuiLeadStarRating', slot);
}

export const starRatingClasses = generateUtilityClasses<StarRatingClassKey>(
  'MuiLeadStarRating',
  ['root', 'star', 'textRating', 'emptyStar', 'fullStar', 'halfStar']
);
