import styled from 'styled-components';
import { Banner } from '@lead/shared/ui';
import { Link } from 'react-router-dom';
import { Checkbox, ThemeProvider } from '@mui/material';
import { theme } from '@lead/shared/packages/mui';
import { StarRating, StarType } from '@lead/shared/packages/components';

/* eslint-disable-next-line */
export interface RootProps {}

const StyledRoot = styled.div`
  color: pink;
`;

export function Root(props: RootProps) {
  return (
    <StyledRoot>
      <Banner text="Here is a list of products to buy..." />
      <ThemeProvider theme={theme}>
        <Checkbox defaultChecked />
        <StarRating
          max={5}
          value={1.5}
          showTextRating={false}
          precise={false}
          component={'div'}
          className={''}
        ></StarRating>
      </ThemeProvider>
      <h1>Welcome to Root!</h1>
      <Link to="/tasks">View Cart</Link>
      <Link to="/grid">View Grid</Link>
    </StyledRoot>
  );
}

export default Root;
