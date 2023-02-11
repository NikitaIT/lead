import generateUtilityClass from '@mui/base/generateUtilityClass';
import generateUtilityClasses from '@mui/base/generateUtilityClasses';

export interface CounterClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the input element if `disabled={true}`. */
  disabled: string;
  /** Styles applied to the root element if the component is focused. */
  focused: string;
  /** Styles applied to the input element. */
  input: string;
  /** Pseudo class applied to root element if `readOnly={true}` */
  readOnly: string;
  /** Styles applied to the icon button element. */
  iconButton: string;
  /** Styles applied to the increase button element. */
  increaseButton: string;
  /** Styles applied to the decrease button element. */
  decreaseButton: string;
  /** Styles applied to the root element if `size="medium"` */
  sizeMedium: string;
  /** Styles applied to the root element if `size="large"` */
  sizeLarge: string;
  /** Styles applied to the root element if `color="default"` */
  colorDefault: string;
  /** Styles applied to the root element if `color="primary"` */
  colorPrimary: string;
  /** Styles applied to the root element if `variant="contained"` */
  variantContained: string;
  /** Styles applied to the root element if `variant="outlined"` */
  variantOutlined: string;
  /** Styles applied to the root element if `variant="text"` */
  variantText: string;
  /** Styles applied to the root element if `variant="text" color="default" size="medium"`  */
  textDefaultMedium: string;
  /** Styles applied to the root element if `variant="contained" color="primary" size="medium"`  */
  containedPrimaryMedium: string;
  /** Styles applied to the root element if `variant="contained" color="default" size="medium"`  */
  containedDefaultMedium: string;
  /** Styles applied to the root element if `variant="outlined" color="primary" size="medium"`  */
  outlinedPrimaryMedium: string;
  /** Styles applied to the root element if `variant="outlined" color="default" size="medium"`  */
  outlinedDefaultMedium: string;
  /** Styles applied to the root element if `variant="text" color="primary" size="medium"`  */
  textPrimaryMedium: string;
  /** Styles applied to the root element if `variant="text" color="default" size="large"`  */
  textDefaultLarge: string;
  /** Styles applied to the root element if `variant="text" color="primary" size="large"`  */
  textPrimaryLarge: string;
  /** Styles applied to the root element if `variant="contained" color="primary" size="large"`  */
  containedPrimaryLarge: string;
  /** Styles applied to the root element if `variant="contained" color="default" size="large"`  */
  containedDefaultLarge: string;
  /** Styles applied to the root element if `variant="outlined" color="primary" size="large"`  */
  outlinedPrimaryLarge: string;
  /** Styles applied to the root element if `variant="outlined" color="default" size="large"`  */
  outlinedDefaultLarge: string;
  /** Styles applied to the root element if `variant="outlined" color="default"`  */
  outlinedDefault: string;
  /** Styles applied to the root element if `variant="outlined" color="primary"`  */
  outlinedPrimary: string;
  /** Styles applied to the root element if `variant="text" color="default"`  */
  textDefault: string;
  /** Styles applied to the root element if `variant="text" color="primary"`  */
  textPrimary: string;
  /** Styles applied to the root element if `variant="contained" color="default"`  */
  containedDefault: string;
  /** Styles applied to the root element if `variant="contained" color="primary"`  */
  containedPrimary: string;
}

export type CounterClassKey = keyof CounterClasses;

export function getCounterUtilityClass(slot: string): string {
  return generateUtilityClass('MuiLeadCounter', slot);
}

const counterClasses = generateUtilityClasses<CounterClassKey>(
  'MuiLeadCounter',
  [
    'root',
    'input',
    'focused',
    'disabled',
    'readOnly',
    'iconButton',
    'increaseButton',
    'decreaseButton',
    'sizeLarge',
    'sizeMedium',
    'colorDefault',
    'colorPrimary',
    'variantContained',
    'variantOutlined',
    'variantText',
    'containedDefaultLarge',
    'containedDefaultMedium',
    'containedPrimaryLarge',
    'containedPrimaryMedium',
    'textDefaultLarge',
    'textDefaultMedium',
    'textPrimaryLarge',
    'textPrimaryMedium',
    'outlinedDefaultLarge',
    'outlinedDefaultMedium',
    'outlinedPrimaryLarge',
    'outlinedPrimaryMedium',
    'containedDefault',
    'containedPrimary',
    'outlinedDefault',
    'outlinedPrimary',
    'textDefault',
    'textPrimary',
  ]
);

export default counterClasses;
