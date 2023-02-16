import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Root from './root/root';

import { ThemeProvider } from '@mui/material';
import { theme } from '@lead/shared/packages/mui';
// import { Tasks } from '@lead/tasks';
import { AgGrid } from '@lead/ag-grid';
import './styles.css';
import tw from 'twin.macro';
import { getway } from '@lead/data-access';
import { useCallback, useEffect } from 'react';
const StyledApp = styled.div`
  // Test
  /* ${tw`bg-white text-center rounded py-8 px-5 shadow max-w-xs`} */
`;

export function App() {
  const { data, error, loading } = getway.useLoginQuery({
    variables: {
      user: {
        username: 'admin',
        email: 'admin@email.com',
        password: 'password',
      },
    },
    fetchPolicy: 'network-only',
  });
  useEffect(() => {
    if (data) {
      localStorage.setItem('token', data.login.token + '');
      alert(data?.login.token);
    }
  }, [data]);
  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }
  if (loading) {
    return <div>loading</div>;
  }
  return (
    <StyledApp className="">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Root />}></Route>
          {/* <Route path="/tasks" element={<Tasks />}></Route> */}
          <Route path="/grid" element={<AgGrid />}></Route>
        </Routes>
      </ThemeProvider>
    </StyledApp>
  );
}

export default App;
