import { colors } from '../constants';
import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiLinearProgress'>;
const styleOverrides: Component['styleOverrides'] = {
  root: {
    height: 5,
    borderRadius: 2.5,
  },
  barColorPrimary: {
    backgroundColor: colors.error.light,
  },
  bar: {
    borderRadius: 2.5,
  },
  colorPrimary: {
    backgroundColor: colors.oriGrey[100],
  },
  dashedColorPrimary: {
    backgroundImage: `radial-gradient(${colors.error.light} 0%, ${colors.error.light} 16%, transparent 42%)`,
  },
  barColorSecondary: {
    backgroundColor: colors.success.light,
  },
  colorSecondary: {
    backgroundColor: colors.oriGrey[100],
  },
  dashedColorSecondary: {
    backgroundImage: `radial-gradient(${colors.success.light} 0%, ${colors.success.light} 16%, transparent 42%)`,
  },
};

export default { styleOverrides };
