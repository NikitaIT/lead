import { colors } from '../constants';
import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiFormControlLabel'>;

const styleOverrides: Component['styleOverrides'] = {
  root: {
    '& .Mui-checked': {
      '&, & + .MuiFormControlLabel-label': {
        color: colors.text.active,
      },
    },
    '& .Mui-disabled': {
      '&, & + .MuiFormControlLabel-label': {
        color: colors.text.disabled,
      },
    },
  },
};

export default {
  styleOverrides,
};
