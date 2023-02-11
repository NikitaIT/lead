import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiCircularProgress'>;

const styleOverrides: Component['styleOverrides'] = {
  circleDeterminate: {
    strokeLinecap: 'round',
  },
};

export default { styleOverrides };
