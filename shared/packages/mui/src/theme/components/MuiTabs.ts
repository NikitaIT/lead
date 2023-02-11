import { colors } from '../constants';
import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiTabs'>;

const styleOverrides: Component['styleOverrides'] = {
  root: {
    justifyContent: 'center',
    minHeight: 'unset',
    position: 'relative',
    '&:after': {
      position: 'absolute',
      bottom: 0,
      content: '""',
      width: '100%',
      height: 4,
      backgroundColor: colors.oriGrey[100],
    },
  },
  indicator: {
    height: 4,
    zIndex: 1,
    backgroundColor: colors.oriGrey[700],
  },
  scroller: {
    flexGrow: 0,
    zIndex: 1,
  },
};

const defaultProps: Component['defaultProps'] = {
  textColor: 'primary',
};
export default { styleOverrides, defaultProps };
