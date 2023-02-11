import { sliderClasses } from '@mui/material';
import { alpha } from '@mui/material/styles';

import { colors } from '../constants';
import { SHADOW_LEVEL1, SHADOW_LEVEL2, SHADOW_LEVEL3 } from '../shadows';
import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiSlider'>;

const styleOverrides: Component['styleOverrides'] = {
  rail: {
    height: 4,
    borderRadius: 2,
  },
  track: {
    height: 4,
    borderRadius: 2,
  },
  mark: {
    height: 4,
  },
  thumb: {
    width: 28,
    height: 28,
    backgroundColor: colors.commonColors.white,
    boxShadow: SHADOW_LEVEL1,
    [`&:hover, &.${sliderClasses.focusVisible}`]: {
      boxShadow: SHADOW_LEVEL2,
      '@media (hover: none)': {
        boxShadow: 'none',
      },
    },
    [`&.${sliderClasses.active}`]: {
      boxShadow: SHADOW_LEVEL2,
    },
    [`&.${sliderClasses.disabled}`]: {
      width: 28,
      height: 28,
      backgroundColor: 'currentColor',
      boxShadow: 'none',
      '&:hover': {
        boxShadow: 'none',
      },
    },
  },
  thumbColorPrimary: {
    [`&:hover, &.${sliderClasses.focusVisible}`]: {
      boxShadow: SHADOW_LEVEL2,
      '@media (hover: none)': {
        boxShadow: 'none',
      },
    },
    [`&.${sliderClasses.focusVisible}`]: {
      boxShadow: `${SHADOW_LEVEL2}, 0px 0px 0px 8px ${alpha(colors.primary.main, 0.17)}`,
    },
    '&.Mui-active': {
      boxShadow: SHADOW_LEVEL3,
    },
  },
  thumbColorSecondary: {
    [`&:hover, &.${sliderClasses.focusVisible}`]: {
      boxShadow: SHADOW_LEVEL2,
      '@media (hover: none)': {
        boxShadow: 'none',
      },
    },
    [`&.${sliderClasses.focusVisible}`]: {
      boxShadow: `${SHADOW_LEVEL2}, 0px 0px 0px 8px ${alpha(colors.secondary.main, 0.17)}`,
    },
    '&.Mui-active': {
      boxShadow: SHADOW_LEVEL3,
    },
  },
};

const defaultProps: Component['defaultProps'] = {
  color: 'secondary',
};

export default {
  styleOverrides,
  defaultProps,
};
