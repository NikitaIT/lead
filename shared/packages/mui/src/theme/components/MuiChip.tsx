import ChipDeleteIcon from '../../components/ChipDeleteIcon';
import { colors } from '../constants';
import { oriGrey } from '../constants/colors';
import shape from '../shape';
import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiChip'>;

const styleOverrides: Component['styleOverrides'] = {
  root: ({ ownerState }) => ({
    fontWeight: 'bold',
    fontSize: 12,
    borderRadius: shape.borderRadius,
    paddingTop: 5,
    paddingBottom: 5,
    lineHeight: '1.2',
    height: 26,
    '&.MuiChip-deletable': {
      paddingRight: 5,
    },
    ...(ownerState.variant === 'outlined' &&
      ownerState.color === 'default' && {
        color: colors.blueGreyBackground[300],
      }),
    ...(ownerState.variant === 'filled' &&
      ownerState.color === 'default' && {
        backgroundColor: colors.blueGreyBackground[300],
        color: colors.commonColors.white,
      }),
    ...(ownerState.variant === 'rounded' && {
      borderRadius: 999,
      backgroundColor: oriGrey[100],
      height: 32,
      paddingLeft: 15,
      paddingRight: 15,
      color: colors.defaultColors.main,
      '&.MuiChip-deletable': {
        paddingRight: 15,
      },
    }),
  }),
  sizeMedium: {
    fontSize: 14,
    height: 30,
  },
  label: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  outlined: {
    borderColor: 'currentColor',
    borderWidth: 1,
    backgroundColor: 'unset',
  },
};

const defaultProps: Component['defaultProps'] = {
  size: 'small',
  deleteIcon: <ChipDeleteIcon />,
};

export default {
  styleOverrides,
  defaultProps,
};
