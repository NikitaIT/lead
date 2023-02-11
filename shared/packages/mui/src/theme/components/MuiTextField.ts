import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiTextField'>;

const styleOverrides: Component['styleOverrides'] = {};

const defaultProps: Component['defaultProps'] = {
  InputLabelProps: {
    shrink: true,
  },
};
export default { styleOverrides, defaultProps };
