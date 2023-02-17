import styled from 'styled-components';
import { SignInSide as Login } from '../login/SignInSide';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface RootProps {}

const StyledRoot = styled.div``;

export function Root(props: RootProps) {
  return (
    <StyledRoot>
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
    </StyledRoot>
  );
}
export default Root;
