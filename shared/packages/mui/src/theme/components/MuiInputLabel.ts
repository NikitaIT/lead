import { colors } from '../constants';
import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiInputLabel'>;

const styleOverrides: Component['styleOverrides'] = {
  root: {
    color: colors.text.primary,
  },
  filled: {
    '&.MuiInputLabel-shrink': {
      transform: 'translate(15px, 0) scale(0.75)',
    },
  },
  outlined: {
    '&.MuiInputLabel-shrink': {
      transform: 'translate(0, 4px) scale(0.75)',
    },
  },
};

const defaultProps: Component['defaultProps'] = {
  shrink: true,
};

export default {
  styleOverrides,
  defaultProps,
};
