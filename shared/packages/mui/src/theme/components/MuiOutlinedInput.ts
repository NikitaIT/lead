import { outlinedInputClasses } from '@mui/material/OutlinedInput';

import { colors } from '../constants';
import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiOutlinedInput'>;

const styleOverrides: Component['styleOverrides'] = {
  root: {
    'label + &': {
      marginTop: 20,
    },
    'input::placeholder, textarea::placeholder': {
      color: colors.action.disabled,
      opacity: 1,
      transition: 'none',
    },
    borderRadius: 5,
    [`&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
      borderWidth: 1,
    },
    [`&:not(.${outlinedInputClasses.disabled}):hover .${outlinedInputClasses.notchedOutline}`]: {
      borderColor: colors.action.disabled,
    },
    [`&.${outlinedInputClasses.disabled}`]: {
      color: colors.action.disabled,
    },
  },
  input: {
    padding: '12.5px 15px',
  },
  inputSizeSmall: {
    padding: '8.5px 14px',
  },
  adornedStart: {
    [`& .${outlinedInputClasses.input}`]: {
      paddingLeft: 0,
    },
  },
  adornedEnd: {
    [`& .${outlinedInputClasses.input}`]: {
      paddingRight: 0,
    },
  },
  notchedOutline: {
    top: 0,
    background: 'unset',
    '& legend': {
      maxWidth: 0,
    },
  },
  multiline: {
    padding: '15px 25px 15px 15px',
  },
};
export default { styleOverrides };
