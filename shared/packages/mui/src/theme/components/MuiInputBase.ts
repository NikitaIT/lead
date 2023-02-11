import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiInputBase'>;

const styleOverrides: Component['styleOverrides'] = {
  input: {
    '&&:-webkit-autofill': {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    },
  },
};

export default { styleOverrides };
