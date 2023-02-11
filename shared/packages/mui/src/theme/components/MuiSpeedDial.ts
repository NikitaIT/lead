import { colors } from '../constants';
import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiSpeedDial'>;

const styleOverrides: Component['styleOverrides'] = {
  fab: {
    width: 40,
    height: 40,
    backgroundColor: colors.commonColors.white,
    color: colors.text.primary,
    '&:hover': {
      backgroundColor: colors.commonColors.white,
    },
  },
};

export default { styleOverrides };
