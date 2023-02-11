import generateUtilityClass from '@mui/base/generateUtilityClass';
import generateUtilityClasses from '@mui/base/generateUtilityClasses';

export interface DialogClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the header element. */
  header: string;
  /** Styles applied to the content element. */
  content: string;
}

export function getDialogUtilityClass(slot: string): string {
  return generateUtilityClass('MuiLeadDialog', slot);
}

export const dialogClasses = generateUtilityClasses<keyof DialogClasses>(
  'MuiLeadDialog',
  ['root', 'header', 'content']
);

export default dialogClasses;
