import { colors } from '../constants';
import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiTablePagination'>;

const styleOverrides: Component['styleOverrides'] = {
  root: {
    fontSize: 12,
    color: colors.oriGrey.A400,
    justifyContent: 'center',
  },
  selectLabel: {
    fontSize: 12,
  },
  displayedRows: {
    fontSize: 12,
  },
  actions: {
    display: 'inline-flex',
    gap: 15,
  },
};

const defaultProps: Component['defaultProps'] = {
  // SelectProps: { variant: 'outlined', size: 'small' },
};

export default { styleOverrides, defaultProps };
