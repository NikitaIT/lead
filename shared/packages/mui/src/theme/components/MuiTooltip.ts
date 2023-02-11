import { colors } from '../constants';
import { SHADOW_LEVEL3, SHADOW_LEVEL1 } from '../shadows';
import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiTooltip'>;

const styleOverrides: Component['styleOverrides'] = {
  tooltip: {
    backgroundColor: colors.commonColors.white,
    color: colors.text.primary,
    boxShadow: SHADOW_LEVEL3,
    fontSize: 14,
    fontWeight: 'normal',
    maxWidth: 330,
    textAlign: 'center',
    padding: 15,
    borderRadius: 10,
  },
  arrow: {
    color: colors.commonColors.white,
    '&:before': {
      boxShadow: SHADOW_LEVEL1,
    },
  },
};
const defaultProps: Component['defaultProps'] = {
  arrow: true,
};

export default { styleOverrides, defaultProps };
