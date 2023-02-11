import { alpha } from '@mui/system';

import { colors } from '../constants';
import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiList'>;

const styleOverrides: Component['styleOverrides'] = {
  root: {
    '.OriSelectList&>[role="option"]:focus': {
      backgroundColor: 'unset',
    },
    '.OriSelectList&>[role="option"]:hover': {
      backgroundColor: alpha(colors.primary.main, 0.08),
    },
    '.OriSelectList&>[aria-selected="true"]': {
      backgroundColor: alpha(colors.primary.main, 0.15),
    },
    '.OriSelectList&>[aria-selected="true"]:focus': {
      backgroundColor: alpha(colors.primary.main, 0.15),
    },
    '.OriSelectList&>[aria-selected="true"]:hover': {
      backgroundColor: alpha(colors.primary.main, 0.2),
    },
  },
};

export default { styleOverrides };
