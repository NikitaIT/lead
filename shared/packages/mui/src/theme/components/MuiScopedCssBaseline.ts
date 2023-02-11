import { colors } from '../constants';
import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiScopedCssBaseline'>;

const styleOverrides: Component['styleOverrides'] = {
  root: {
    // Scrollbar
    '@media (hover: hover) and (pointer: fine)': {
      '&, & *': {
        msOverflowStyle: '-ms-autohiding-scrollbar',
        scrollbarWidth: 'thin',
        scrollbarColor: `${colors.oriGrey[300]} transparent`,
      },
      '::-webkit-scrollbar, & *::-webkit-scrollbar': {
        width: '15px',
        height: '15px',
      },
      '::-webkit-scrollbar-track, & *::-webkit-scrollbar-track': {
        background: 'transparent',
      },
      '::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
        background: colors.oriGrey[300],
        borderRadius: '13px',
        border: '5px solid transparent',
        backgroundClip: 'content-box',
      },
    },
  },
};

export default {
  styleOverrides,
};
