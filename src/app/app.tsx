import './styles.css';
import styled from 'styled-components';
import { Link, Route, Routes } from 'react-router-dom';
import Root from './root/root';

import { Button, ThemeProvider } from '@mui/material';
import { createTheme, themeObject } from '@lead/shared/packages/mui';
// import { Tasks } from '@lead/tasks';
import tw from 'twin.macro';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';
import { forwardRef } from 'react';
import { LinkProps } from '@mui/material/Link';
import React from 'react';

const StyledApp = styled.div`
  // Test
  /* ${tw`bg-white text-center rounded py-8 px-5 shadow max-w-xs`} */
`;

const LinkBehavior = forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props;
  // Map href (MUI) -> to (react-router)
  return <RouterLink ref={ref} to={href} {...other} />;
});
const theme = createTheme({
  ...themeObject,
  components: {
    ...themeObject.components,
    MuiLink: {
      ...themeObject.components?.MuiLink,
      defaultProps: {
        ...themeObject.components?.MuiLink?.defaultProps,
        component: LinkBehavior,
      } as LinkProps,
    },
    MuiButtonBase: {
      ...themeObject.components?.MuiButtonBase,
      defaultProps: {
        ...themeObject.components?.MuiButtonBase?.defaultProps,
        LinkComponent: LinkBehavior,
      },
    },
  },
});
(window as any).theme = theme;

const AgGridShell = React.lazy(() => import('ag-grid-shell/Module'));
const HomeShell = React.lazy(() => import('home-shell/Module'));
const AuthShell = React.lazy(() => import('auth-shell/Module'));

export function App() {
  return (
    <StyledApp className="">
      <ThemeProvider theme={theme}>
        <React.Suspense fallback={<div>Error</div>}>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Button
                    component={Link}
                    to="/grid"
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Grid
                  </Button>
                  <Button
                    component={Link}
                    to="/auth"
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Auth
                  </Button>
                  <Button
                    component={Link}
                    to="/home"
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Home
                  </Button>
                </div>
              }
            ></Route>
            <Route path="/root" element={<Root />}></Route>
            <Route path="/grid" element={<AgGridShell />}></Route>
            <Route path="/home" element={<HomeShell />}></Route>
            <Route path="/auth" element={<AuthShell />}></Route>
          </Routes>
        </React.Suspense>
      </ThemeProvider>
    </StyledApp>
  );
}

export default App;
