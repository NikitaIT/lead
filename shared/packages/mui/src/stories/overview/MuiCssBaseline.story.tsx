import { CssBaseline } from '@mui/material';
import { styled, ThemeProvider } from '@mui/system';

import { theme } from '../..';
import muiCSSBaseline from '../../theme/components/MuiCssBaseline';

const ScrollableDiv = styled('div')({
  height: 500,
  overflowY: 'auto',
});

export const MuiCssBaseline = function MuiCssBaseline() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <p>
        CSS Baseline applies css reset on elements to keep consistency between
        browsers.
      </p>

      <h1>H1</h1>
      <h1>H2</h1>
      <h1>H3</h1>
      <h1>H4</h1>
      <h1>H5</h1>

      <button type="button">button</button>

      <hr />

      <p>paragraph</p>

      <p>Contents: </p>
      <ScrollableDiv>
        <pre>{JSON.stringify(muiCSSBaseline.styleOverrides, null, 2)}</pre>
      </ScrollableDiv>
    </ThemeProvider>
  );
};
