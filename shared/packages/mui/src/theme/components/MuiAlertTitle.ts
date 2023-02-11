import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiAlertTitle'>;

const styleOverrides: Component['styleOverrides'] = {
  root: {
    fontSize: '17px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
};

export default {
  styleOverrides,
};
