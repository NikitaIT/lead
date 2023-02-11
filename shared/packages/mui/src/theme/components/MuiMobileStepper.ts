import { duration, easing } from '@mui/material/styles';

import { colors, font } from '../constants';
import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiMobileStepper'>;

const styleOverrides: Component['styleOverrides'] = {
  root: {
    backgroundColor: 'transparent',
  },
  dotActive: {
    backgroundColor: colors.blueGreyBackground[300],
    transform: 'scale(1.2)',
  },
  dots: {
    alignItems: 'center',
  },
  dot: {
    transition: `transform ${duration.short}ms ${easing.easeInOut}, box-shadow ${duration.short}ms ${easing.easeInOut}, background-color ${duration.short}ms ${easing.easeInOut}`,
    willChange: 'transform, box-shadow, background-color',
    backgroundColor: colors.oriGrey.A200,
    width: 10,
    height: 10,
    margin: '0 5px',
  },
  positionStatic: {
    color: colors.oriGrey[700],
    fontSize: '14px',
    fontWeight: font.fontWeightBold,
  },
};

export default { styleOverrides };
