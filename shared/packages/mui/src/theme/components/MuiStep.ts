import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiStep'>;

const styleOverrides: Component['styleOverrides'] = {
  horizontal: {
    paddingLeft: 15,
    paddingRight: 15,
    '&:first-of-type': {
      paddingLeft: 0,
    },
    '&:last-of-type': {
      paddingRight: 0,
    },
  },
};
export default { styleOverrides };
