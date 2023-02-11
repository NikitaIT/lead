import { alpha, buttonClasses } from '@mui/material';

import { colors } from '../constants';
import { SHADOW_LEVEL2 } from '../shadows';
import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiButton'>;

const styleOverrides: Component['styleOverrides'] = {
  root: ({ ownerState, theme }) => ({
    lineHeight: 1.3,
    borderRadius: 25,
    ...(ownerState.variant === 'outlined' &&
      ownerState.color === 'default' && {
        color: colors.oriGrey[900],
        border: `1px solid ${colors.oriGrey[900]}`,
        '&:hover,&:focus': {
          color: colors.oriGrey[900],
          border: `1px solid ${colors.oriGrey[900]}`,
        },
      }),
    ...(ownerState.color === 'frontPage' && {
      backdropFilter: 'blur(30px)',
      color: colors.commonColors.white,
      border: `1px solid transparent`,
      '&:hover': {
        opacity: '.8',
      },
      [`&.${buttonClasses.focusVisible}`]: {
        opacity: '.8',
      },
      [`&.${buttonClasses.disabled}`]: {
        border: `1px solid transparent`,
        opacity: '.9',
      },
    }),
    ...(ownerState.variant === 'contained' &&
      ownerState.color === 'superApp' && {
        background: `linear-gradient(90deg, ${colors.superApp.light} 0%, ${colors.superApp.main} 100%)`,
        '&:hover,&:focus': {
          boxShadow: SHADOW_LEVEL2,
        },
        [`&.${buttonClasses.disabled}`]: {
          background: colors.action.disabledBackground,
        },
      }),
    ...(ownerState.variant === 'outlined' &&
      ownerState.color === 'superApp' && {
        borderWidth: '3px',
        borderColor: colors.superApp.main,
        '&:hover,&:focus': {
          borderWidth: '3px',
          boxShadow: SHADOW_LEVEL2,
        },
        [`&.${buttonClasses.disabled}`]: {
          borderWidth: '3px',
        },
      }),
    ...(ownerState.variant === 'contained' &&
      ownerState.color === 'secondary' && {
        background: alpha(colors.primary.light, 0.3),
        color: colors.primary.dark,
      }),
  }),
  sizeLarge: ({ ownerState }) => ({
    padding: '14px 23px',
    lineHeight: 1.25,
    ...(ownerState.variant === 'outlined' &&
      ownerState.color === 'superApp' && {
        padding: '11px 20px',
      }),
  }),
  sizeSmall: ({ ownerState }) => ({
    padding: '10px 23px',
    ...(ownerState.variant === 'outlined' &&
      ownerState.color === 'superApp' && {
        padding: '7px 20px',
      }),
  }),
  sizeMedium: ({ ownerState }) => ({
    padding: '12px 23px',
    ...(ownerState.variant === 'outlined' &&
      ownerState.color === 'superApp' && {
        padding: '9px 20px',
      }),
  }),
  text: {
    padding: '10px 23px',
  },
  textPrimary: {
    '&:hover,&:focus': {
      color: colors.primary.main,
    },
  },
  textSecondary: {
    '&:hover,&:focus': {
      color: colors.secondary.main,
    },
  },
  contained: {
    borderRadius: 25,
  },
  containedPrimary: {
    '&:hover,&:focus': {
      color: colors.primary.contrastText,
    },
  },
  containedSecondary: {
    '&:hover,&:focus': {
      color: colors.primary.dark,
      background: alpha(colors.primary.main, 0.3),
    },
  },
  outlined: {
    borderRadius: 25,
    padding: '10px 23px',
    lineHeight: 1.35,
  },
  outlinedPrimary: {
    '&:hover,&:focus': {
      color: colors.primary.main,
    },
  },
  outlinedSecondary: {
    '&:hover,&:focus': {
      color: colors.secondary.main,
    },
  },
};

const defaultProps: Component['defaultProps'] = {
  disableElevation: true,
  color: 'default',
};

export default {
  defaultProps,
  styleOverrides,
};
