import { Paper, styled } from '@mui/material';

import theme from '../theme';

const StyledPaper = styled(Paper)({
  width: 300,
  height: 100,
  margin: theme.spacing(3),
  display: 'grid',
  justifyItems: 'center',
  alignContent: 'start',
  '& pre': {
    fontSize: 12,
  },
});

export const Shape = function Shape() {
  return (
    <>
      <StyledPaper
        variant="outlined"
        sx={{
          borderRadius: `${theme.shape.borderRadius}px`,
        }}
      >
        <pre>theme.shape.borderRadius</pre>border radius:{' '}
        {theme.shape.borderRadius}px
      </StyledPaper>
      <StyledPaper
        variant="outlined"
        sx={{
          borderRadius: `${theme.shape.borderRadius}px`,
        }}
      >
        <pre>theme.shape.borderRadius</pre>border radius:{' '}
        {theme.shape.borderRadius}
        px
      </StyledPaper>
      <StyledPaper
        variant="outlined"
        sx={{
          borderRadius: `${theme.shape.borderRadius}px`,
        }}
      >
        <pre>theme.shape.borderRadius</pre>border radius:{' '}
        {theme.shape.borderRadius}px
      </StyledPaper>
      <StyledPaper
        variant="outlined"
        sx={{
          borderRadius: `${theme.shape.borderRadius}px`,
        }}
      >
        <pre>theme.shape.borderRadius</pre>border radius:{' '}
        {theme.shape.borderRadius}
        px
      </StyledPaper>
    </>
  );
};
