/* eslint-disable no-console -- needed for error propagation */
import '@lead/shared/packages/license';

import createEmotionCache from '@emotion/cache';
import { CacheProvider as EmotionCacheProvider } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import type { ThemeProviderProps as MuiThemeProviderProps } from '@mui/material/styles/ThemeProvider';
import { StyledEngineProvider } from '@mui/system';
import { memo, useMemo } from 'react';

import oriTheme from '../theme';
import type { ThemeProviderProps } from './ThemeProviderProps';

export function ThemeProvider({
  children,
  theme = oriTheme,
  enableCacheProvider,
  cacheKey,
  cache,
  injectFirst = true,
  cacheOptions,
}: ThemeProviderProps) {
  const internalTheme = useMemo<MuiThemeProviderProps['theme']>(() => {
    if (typeof theme === 'function') {
      return theme(oriTheme) as MuiThemeProviderProps['theme'];
    }

    return theme;
  }, [theme]);

  const options = useMemo(
    () =>
      cache ??
      createEmotionCache({
        prepend: true,
        ...cacheOptions,
        key: cacheKey ?? 'ori-ui',
      }),
    [cacheKey, cacheOptions, cache]
  );

  if (process.env.NODE_ENV !== 'production') {
    if (
      typeof cacheKey !== 'undefined' &&
      enableCacheProvider !== true &&
      typeof window !== 'undefined'
    ) {
      console.error(
        `ORI-UI: You cannot use cacheKey without enabling cache provider.`
      );
    }
    if (
      typeof cacheOptions !== 'undefined' &&
      enableCacheProvider !== true &&
      typeof window !== 'undefined'
    ) {
      console.error(
        `ORI-UI: You cannot use cacheOptions without enabling cache provider.`
      );
    }
    if (
      typeof cache !== 'undefined' &&
      enableCacheProvider !== true &&
      typeof window !== 'undefined'
    ) {
      console.error(
        `ORI-UI: You cannot use custom "cache" without enabling cacheProvider.`
      );
    }
    if (
      typeof cache !== 'undefined' &&
      typeof cacheKey !== 'undefined' &&
      enableCacheProvider === true &&
      typeof window !== 'undefined'
    ) {
      console.error(
        `ORI-UI: The cacheKey you provided to ThemeProvider will be ignore since you provided custom "cache" too.`
      );
    }
  }

  if (!enableCacheProvider) {
    return (
      <StyledEngineProvider injectFirst={injectFirst}>
        <MuiThemeProvider theme={internalTheme}>{children}</MuiThemeProvider>
      </StyledEngineProvider>
    );
  }

  return (
    <EmotionCacheProvider value={options}>
      <MuiThemeProvider theme={internalTheme}>{children}</MuiThemeProvider>
    </EmotionCacheProvider>
  );
}

export default memo(ThemeProvider);
