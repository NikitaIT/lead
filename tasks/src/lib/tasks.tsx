import { Banner } from '@lead/shared/ui';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TasksProps {}

const StyledTasks = styled.div`
  color: pink;
`;

export function Tasks(props: TasksProps) {
  return (
    <StyledTasks>
      <Banner text="Welcome to the Tasks." />
      <Link to="/">Continue Shopping</Link>
    </StyledTasks>
  );
}

export default Tasks;
