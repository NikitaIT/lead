import { filledInputClasses } from '@mui/material';

import { colors } from '../constants';
import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiFilledInput'>;

const styleOverrides: Component['styleOverrides'] = {
  root: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderRadius: 24,
    'input::placeholder': {
      color: colors.action.disabled,
      opacity: 1,
      transition: 'none',
    },
    'label + &': {
      marginTop: 15,
    },
    backgroundColor: colors.oriGrey[100],
  },
  input: {
    padding: '14px 17px',
  },
  inputSizeSmall: {
    paddingTop: 6,
    paddingBottom: 6,
  },
  adornedStart: {
    [`& .${filledInputClasses.input}`]: {
      paddingLeft: 0,
    },
  },
  adornedEnd: {
    [`& .${filledInputClasses.input}`]: {
      paddingRight: 0,
    },
  },
  multiline: {
    [`&.${filledInputClasses.sizeSmall}`]: {
      paddingTop: 6,
      paddingBottom: 6,
    },
    padding: '14px 15px',
  },
};

const defaultProps: Component['defaultProps'] = {
  disableUnderline: true,
};
export default {
  defaultProps,
  styleOverrides,
};
