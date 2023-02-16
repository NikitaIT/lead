import styled from 'styled-components';
import { Banner } from '@lead/shared/ui';
import { Link } from 'react-router-dom';
import { Checkbox, ThemeProvider } from '@mui/material';
import { theme } from '@lead/shared/packages/mui';
import { StarRating } from '@lead/shared/packages/components';
import { getway } from '@lead/data-access';
import Login from '../login/SignInSide';

/* eslint-disable-next-line */
export interface RootProps {}

const StyledRoot = styled.div``;

export function Root(props: RootProps) {
  const { data, error, loading } = getway.useAllUsersQuery();
  return (
    <StyledRoot>
      <div>{JSON.stringify({ loading })}</div>
      <div>{JSON.stringify(error)}</div>
      <div>{JSON.stringify({ data })}</div>
      <Banner text="Here is a list of products to buy..." />
      <Login></Login>
      <Checkbox defaultChecked />
      <StarRating
        max={5}
        value={1.5}
        showTextRating={false}
        precise={false}
        component={'div'}
        className={''}
      ></StarRating>
      <h1>Welcome to Root!</h1>
      <Link to="/tasks">View Cart</Link>
      <Link to="/grid">View Grid</Link>
    </StyledRoot>
  );
}

export default Root;
