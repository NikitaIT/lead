import '@code-hike/mdx/styles.css';
import { _globalTypes } from '@lead/storybook-preview';
import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { theme } from '../src';
import { ThemeProvider } from '@mui/material';
export const globalTypes = _globalTypes;

export const decorators = [
  (Story: any): any => (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </LocalizationProvider>
  ),
];
