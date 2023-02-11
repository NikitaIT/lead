import { Theme } from '@mui/material';
import { EmotionCache, Options } from '@emotion/cache';

export type ThemeProviderProps = {
  children: React.ReactNode | undefined;
  theme: Theme | ((x: Theme) => Theme);
  enableCacheProvider: boolean;
  cacheKey: string;
  cache?: EmotionCache;
  injectFirst: boolean | true;
  cacheOptions: Options;
};
