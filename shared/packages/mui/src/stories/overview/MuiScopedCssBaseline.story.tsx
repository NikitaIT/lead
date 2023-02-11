import { ScopedCssBaseline } from '@mui/material';
import { styled, ThemeProvider } from '@mui/system';

import { theme } from '../..';
import muiScopedCSSBaseline from '../../theme/components/MuiScopedCssBaseline';

const ScrollableDiv = styled('div')({
  height: 300,
  overflowY: 'auto',
});

export const MuiScopedCssBaseline = function MuiScopedCssBaseline() {
  return (
    <ThemeProvider theme={theme}>
      <ScopedCssBaseline>
        <p>
          Scoped CSS Baseline applies nice scroll to elements that needs
          scrolling. A div (or some other element) to be scrollable, it needs
          some styles applied to it.
        </p>
        <p>Example of styles on scrollable div:</p>
        <pre>
          height: 300,
          <br />
          overflowY: &apos;auto&apos;,
        </pre>
        <p>Contents: </p>
        <ScrollableDiv>
          <pre>
            {JSON.stringify(muiScopedCSSBaseline.styleOverrides, null, 2)}
          </pre>
        </ScrollableDiv>
      </ScopedCssBaseline>
    </ThemeProvider>
  );
};
