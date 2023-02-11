import type { ThemeOptions } from '@mui/material';

import { colors } from './constants';

const palette: ThemeOptions['palette'] = {
  action: colors.action,
  background: colors.background,
  common: colors.commonColors,
  error: colors.error,
  grey: colors.oriGrey,
  info: colors.info,
  primary: colors.primary,
  secondary: colors.secondary,
  success: colors.success,
  text: colors.text,
  warning: colors.warning,
  // --- new
  blue: colors.blueBackground,
  blueGrey: colors.blueGreyBackground,
  brown: colors.brownBackground,
  default: colors.defaultColors,
  frontPage: colors.frontPage,
  green: colors.greenBackground,
  offer: colors.offer,
  pink: colors.pinkBackground,
  purple: colors.purpleBackground,
  red: colors.redBackground,
  superApp: colors.superApp,
  yellow: colors.yellowBackground,
};

export default palette;
