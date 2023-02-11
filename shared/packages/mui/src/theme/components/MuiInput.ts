import { inputClasses } from '@mui/material';

import { colors } from '../constants';
import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiInput'>;

const styleOverrides: Component['styleOverrides'] = {
  root: {
    padding: '4px 0 3px',
    'input::placeholder': {
      color: colors.action.disabled,
      opacity: 1,
      transition: 'none',
    },
  },
  formControl: {
    'label + &': {
      marginTop: 10,
    },
  },
  inputSizeSmall: {
    paddingTop: 6,
  },
  underline: {
    [`&:not(.${inputClasses.disabled}):hover:before`]: {
      borderBottomWidth: 0.75,
    },
    '&:after': {
      borderBottomWidth: 1.2,
    },
  },
  multiline: {
    padding: '10px 0 10px',
  },
};

export default {
  styleOverrides,
};
