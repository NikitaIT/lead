import type { Theme, ThemeOptions } from '@mui/material';
import { createTheme as muiCreateTheme } from '@mui/material';
import { deepmerge } from '@mui/utils';

import themeObject from '../theme';

/**
 * Generate a theme base on the options received.
 * @param options Takes an incomplete theme object and adds the missing parts.
 * @param args Deep merge the arguments with the about to be returned theme.
 * @returns A complete, ready to use theme object.
 */
export default function createTheme(
  options: ThemeOptions = {},
  ...args: Array<Record<string, unknown>>
): Theme {
  const newTheme = deepmerge(themeObject, options);

  return muiCreateTheme(newTheme, ...args);
}
