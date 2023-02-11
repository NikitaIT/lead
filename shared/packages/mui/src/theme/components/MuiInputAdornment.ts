import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiInputAdornment'>;

const styleOverrides: Component['styleOverrides'] = {
  filled: {
    '&.MuiInputAdornment-positionStart&:not(.MuiInputAdornment-hiddenLabel)': {
      marginTop: 0,
    },
  },
};

export default {
  styleOverrides,
};
