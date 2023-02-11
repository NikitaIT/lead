import { Box, Grid } from '@mui/material';

import { SHADOW_LEVEL1, SHADOW_LEVEL2, SHADOW_LEVEL3 } from '../..';

export const MuiShadows = function MuiShadows() {
  return (
    <Grid container>
      {Array.from({ length: 24 }, (_, item) => (
        <Box
          key={`box-shadow${item}`}
          boxShadow={item}
          bgcolor="background.default"
          m={5}
          p={5}
          style={{ width: '8rem', height: '5rem' }}
        >
          boxShadow={item}
        </Box>
      ))}
    </Grid>
  );
};

export const MuiLeadShadows = function MuiLeadShadows() {
  return (
    <Grid container>
      <Box
        boxShadow={SHADOW_LEVEL1}
        bgcolor="background.default"
        m={5}
        p={5}
        style={{ width: '8rem', height: '5rem' }}
      >
        SHADOW_LEVEL1
      </Box>
      <Box
        boxShadow={SHADOW_LEVEL2}
        bgcolor="background.default"
        m={5}
        p={5}
        style={{ width: '8rem', height: '5rem' }}
      >
        SHADOW_LEVEL2
      </Box>
      <Box
        boxShadow={SHADOW_LEVEL3}
        bgcolor="background.default"
        m={5}
        p={5}
        style={{ width: '8rem', height: '5rem' }}
      >
        SHADOW_LEVEL3
      </Box>
    </Grid>
  );
};
