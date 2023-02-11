import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiStepper'>;
const styleOverrides: Component['styleOverrides'] = {
  root: {
    padding: 0,
  },
  horizontal: {
    alignItems: 'start',
  },
};
export default { styleOverrides };
