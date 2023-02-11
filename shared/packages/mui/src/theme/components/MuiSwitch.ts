import { colors } from '../constants';
import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiSwitch'>;

const styleOverrides: Component['styleOverrides'] = {
  switchBase: {
    color: colors.oriGrey[100],
  },
  track: {
    opacity: 0.103,
  },
};

export default { styleOverrides };
