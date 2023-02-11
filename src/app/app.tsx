import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Root from './root/root';
import { Tasks } from '@lead/tasks';
import { AgGrid } from '@lead/ag-grid';
import './styles.css';
import tw from 'twin.macro';
const StyledApp = styled.div`
  // Test
  ${tw`bg-white text-center rounded py-8 px-5 shadow max-w-xs`}
`;

export function App() {
  return (
    <StyledApp className="bg-blue-600">
      <Routes>
        <Route path="/" element={<Root />}></Route>
        <Route path="/tasks" element={<Tasks />}></Route>
        <Route path="/grid" element={<AgGrid />}></Route>
      </Routes>
    </StyledApp>
  );
}

export default App;
