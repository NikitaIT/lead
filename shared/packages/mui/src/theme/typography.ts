import type { TypographyVariantsOptions } from '@mui/material';

import breakpoints from './breakpoints';
import { font, colors } from './constants';

const typography: TypographyVariantsOptions = {
  fontFamily: font.fontFamily,
  fontWeightLight: font.fontWeightLight,
  fontWeightRegular: font.fontWeightRegular,
  fontWeightMedium: font.fontWeightMedium,
  fontWeightBold: font.fontWeightBold,
  htmlFontSize: font.htmlFontSize,
  h1: {
    fontSize: 90,
    fontWeight: 'bold',
    [breakpoints.down('sm')]: {
      fontSize: 30,
    },
  },
  h2: {
    fontSize: 50,
    fontWeight: 'bold',
    [breakpoints.down('sm')]: {
      fontSize: 30,
    },
  },
  h3: {
    fontSize: 40,
    fontWeight: 'bold',
    [breakpoints.down('sm')]: {
      fontSize: 30,
    },
  },
  h4: {
    fontSize: 30,
    fontWeight: 'bold',
    [breakpoints.down('sm')]: {
      fontSize: 25,
    },
  },
  h5: {
    fontSize: 25,
    fontWeight: 'bold',
    [breakpoints.down('sm')]: {
      fontSize: 20,
    },
  },
  h6: {
    fontSize: 20,
    fontWeight: 'bold',
    [breakpoints.down('sm')]: {
      fontSize: 17,
    },
  },
  subtitle1: {
    fontSize: 17,
  },
  subtitle2: {
    fontSize: 17,
    fontWeight: 'normal',
    color: colors.oriGrey.A400,
  },
  body1: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  body2: {
    fontSize: 14,
    color: colors.oriGrey.A400,
  },
  button: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 12,
  },
  overline: {
    fontSize: 10,
    textTransform: 'none',
  },
};

export default typography;
