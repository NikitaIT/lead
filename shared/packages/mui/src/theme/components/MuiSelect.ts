import { ArrowDownThin } from '@lead/shared/packages/icons';

import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiSelect'>;

const styleOverrides: Component['styleOverrides'] = {
  standard: {
    '&:focus': {
      backgroundColor: 'unset',
    },
  },
  outlined: {
    borderRadius: 5,
  },
};

const defaultProps: Component['defaultProps'] = {
  IconComponent: ArrowDownThin,
  MenuProps: {
    elevation: 0,
    classes: {
      paper: 'OriSelectPaper',
      list: 'OriSelectList',
    },
    BackdropProps: { invisible: true },
  },
};

export default { styleOverrides, defaultProps };
