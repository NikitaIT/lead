import breakpoints from '../breakpoints';
import { colors } from '../constants';
import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiTab'>;

const styleOverrides: Component['styleOverrides'] = {
  root: {
    textTransform: 'none',
    minWidth: 'unset',
    minHeight: 'unset',
    fontSize: 15,
    padding: '10px 4px',
    marginRight: 20,
    [breakpoints.up('md')]: {
      minWidth: 'unset',
      marginRight: 60,
      fontSize: 20,
      padding: '12px 4px',
    },
    [breakpoints.up('lg')]: {
      fontSize: 20,
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
  textColorPrimary: {
    color: colors.oriGrey.A400,
    '&.Mui-selected': {
      color: colors.oriGrey[700],
    },
  },
};

const defaultProps: Component['defaultProps'] = {
  disableRipple: true,
};

export default { styleOverrides, defaultProps };
