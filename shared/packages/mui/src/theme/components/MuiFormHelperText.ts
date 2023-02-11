import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiFormHelperText'>;
const styleOverrides: Component['styleOverrides'] = {
  contained: {
    marginLeft: 0,
    marginRight: 14,
  },
};

export default { styleOverrides };
