import { alpha } from '@mui/system';

import { colors } from '../constants';
import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiBackdrop'>;

const styleOverrides: Component['styleOverrides'] = {
  root: {
    backdropFilter: 'blur(2px)',
    WebkitBackdropFilter: 'blur(2px)',
    background: alpha(colors.commonColors.black, 0.45),
    '&.MuiBackdrop-invisible': {
      backdropFilter: 'unset',
      WebkitBackdropFilter: 'unset',
      background: 'none',
    },
  },
  invisible: {
    backdropFilter: 'unset',
    WebkitBackdropFilter: 'unset',
    background: 'none',
  },
};

export default {
  styleOverrides,
};
