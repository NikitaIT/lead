import { Banner } from '@lead/shared/ui';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SetListDocument, useSetListQuery } from '@lead/data-access';
import { useQuery } from '@apollo/client';
import SetForm from './set-form/set-form';

/* eslint-disable-next-line */
export interface TasksProps {}

const StyledTasks = styled.div`
  color: pink;
`;

export const Tasks = (props: TasksProps) => {
  const { loading, error, data } = useSetListQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (data === undefined) return <p>No data :(</p>;

  return (
    <StyledTasks>
      <Banner text="Welcome to the Tasks." />
      <SetForm></SetForm>
      <ul>
        {data.allSets.map(({ id, name, numParts, year }) => (
          <li key={id}>
            {year} - <strong>{name}</strong> ({numParts} parts)
          </li>
        ))}
      </ul>
      <Link to="/">Continue Shopping</Link>
    </StyledTasks>
  );
};

export default Tasks;
