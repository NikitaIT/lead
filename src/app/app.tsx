import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Root from './root/root';

import { ThemeProvider } from '@mui/material';
import { createTheme, themeObject } from '@lead/shared/packages/mui';
// import { Tasks } from '@lead/tasks';
import './styles.css';
import tw from 'twin.macro';
import { AgGridRoot } from './grid/AgGridRoot';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';
import { forwardRef } from 'react';
import { LinkProps } from '@mui/material/Link';
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
export function App() {
  return (
    <StyledApp className="">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Root />}></Route>
          {/* <Route path="/tasks" element={<Tasks />}></Route> */}
          <Route path="/grid" element={<AgGridRoot />}></Route>
        </Routes>
      </ThemeProvider>
    </StyledApp>
  );
}

export default App;
