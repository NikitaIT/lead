import { alpha } from '@mui/system';

import { colors } from '../constants';
import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiSnackbarContent'>;

const styleOverrides: Component['styleOverrides'] = {
  root: {
    backgroundColor: alpha(colors.commonColors.black, 0.637),
  },
  action: {
    '&:before': {
      position: 'absolute',
      borderLeft: `1px solid ${alpha(colors.oriGrey[100], 0.3)}`,
      height: '100%',
      content: '""',
    },
  },
};

export default {
  styleOverrides,
};
