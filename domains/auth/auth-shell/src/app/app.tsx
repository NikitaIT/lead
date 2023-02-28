import NxWelcome from './nx-welcome';
import { SignInSide as Login } from './login/SignInSide';
import { Link } from 'react-router-dom';

import { Button, LinkProps, ThemeProvider } from '@mui/material';
import { createTheme, themeObject } from '@lead/shared/packages/mui';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';
import { forwardRef } from 'react';

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
export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Login>
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
      </Login>
    </ThemeProvider>
  );
}

export default App;
