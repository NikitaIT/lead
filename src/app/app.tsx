import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Root from './root/root';
import { Tasks } from '@lead/tasks';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Routes>
        <Route path="/" element={<Root />}></Route>
        <Route path="/tasks" element={<Tasks />}></Route>
      </Routes>
    </StyledApp>
  );
}

export default App;
