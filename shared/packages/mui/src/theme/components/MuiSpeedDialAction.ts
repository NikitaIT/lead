import { colors } from '../constants';
import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiSpeedDialAction'>;

const styleOverrides: Component['styleOverrides'] = {
  fab: {
    backgroundColor: colors.commonColors.white,
    color: colors.text.primary,
  },
  staticTooltipLabel: {
    backgroundColor: 'transparent',
    boxShadow: 'unset',
    color: colors.commonColors.white,
    fontWeight: 'bold',
    padding: '4px 12px',
  },
  tooltipPlacementLeft: {
    '& .MuiSpeedDialAction-staticTooltipLabel': {
      marginRight: 0,
    },
  },
};
export default { styleOverrides };
