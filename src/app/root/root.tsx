import styled from 'styled-components';
import { Banner } from '@lead/shared/ui';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface RootProps {}

const StyledRoot = styled.div`
  color: pink;
`;

export function Root(props: RootProps) {
  return (
    <StyledRoot>
      <Banner text="Here is a list of products to buy..." />
      <h1>Welcome to Root!</h1>
      <Link to="/tasks">View Cart</Link>
    </StyledRoot>
  );
}

export default Root;
