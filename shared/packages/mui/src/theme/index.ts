import type { ThemeOptions } from '@mui/material';
import { createTheme } from '@mui/material';

import breakpoints from './breakpoints';
import * as components from './components';
import palette from './palette';
import shadows from './shadows';
import shape from './shape';
import spacing from './spacing';
import typography from './typography';

export const themeObject: ThemeOptions = {
  shape,
  breakpoints,
  components,
  palette,
  shadows,
  spacing,
  typography,
};

const theme = createTheme(themeObject);

export default theme;

export * from './shadows';
