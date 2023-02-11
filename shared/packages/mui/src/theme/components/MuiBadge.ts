import { colors } from '../constants';
import { SHADOW_LEVEL3 } from '../shadows';
import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiBadge'>;

const styleOverrides: Component['styleOverrides'] = {
  badge: ({ ownerState }) => ({
    boxShadow: 'none',
    border: `1px solid ${colors.commonColors.white}`,
    fontSize: '1rem',
    letterSpacing: 0,
    lineHeight: 1.5,
    height: 22,
    minWidth: 22,
    borderRadius: 11,
    padding: '0 3px',
    top: '20%',
    ...(ownerState.color === 'default' && {
      backgroundColor: colors.commonColors.white,
      boxShadow: SHADOW_LEVEL3,
    }),
  }),
  dot: {
    width: 10,
    height: 10,
    minWidth: 'unset',
    borderRadius: '50%',
    padding: 0,
  },
};

const defaultProps: Component['defaultProps'] = {
  color: 'default',
};

export default {
  styleOverrides,
  defaultProps,
};
