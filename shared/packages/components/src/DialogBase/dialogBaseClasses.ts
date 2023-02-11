import generateUtilityClass from '@mui/base/generateUtilityClass';
import generateUtilityClasses from '@mui/base/generateUtilityClasses';

export interface DialogBaseClasses {
  /** Styles applied to the root element.  */
  root: string;
  /** Styles applied to the back button element.  */
  backButton: string;
  /** Styles applied to the close button element.  */
  closeButton: string;
  /** Styles applied to the dialog grid element.  */
  dialogGrid: string;
  /** Styles applied to the root element if `size="medium"`. */
  sizeMedium: string;
  /** Styles applied to the root element if `size="small"`. */
  sizeSmall: string;
}

export type DialogBaseClassKey = keyof DialogBaseClasses;

export function getDialogBaseUtilityClass(slot: string): string {
  return generateUtilityClass('MuiLeadDialogBase', slot);
}

export const dialogBaseClasses = generateUtilityClasses<
  keyof DialogBaseClasses
>('MuiLeadDialogBase', [
  'root',
  'backButton',
  'closeButton',
  'dialogGrid',
  'sizeMedium',
  'sizeSmall',
]);

export default dialogBaseClasses;
