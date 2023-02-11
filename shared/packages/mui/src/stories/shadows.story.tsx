import type { BoxProps } from '@mui/material';
import { Box, Grid, Typography } from '@mui/material';
import type { StoryFn } from '@lead/storybook-story';

import { SHADOW_LEVEL1, SHADOW_LEVEL2, SHADOW_LEVEL3 } from '..';

const Template: StoryFn<BoxProps> = ({ boxShadow, ...props }) => (
  <Grid container>
    <Box
      boxShadow={boxShadow}
      {...props}
      bgcolor="background.default"
      p={4}
      m={5}
    >
      <>shadow {boxShadow}</>
    </Box>
  </Grid>
);

export const Shadow = Template.bind({});

Shadow.argTypes = {
  boxShadow: {
    control: { type: 'range', min: 0, max: 24 },
  },
};

Shadow.args = {
  boxShadow: 0,
};

export const OriShadows = function OriShadows() {
  return (
    <Grid>
      <Box component="div">
        <Typography>
          To use these shadows import them directly from
          @lead/shared/packages/mui; example:{' '}
        </Typography>
        <code
          style={{ fontSize: 14 }}
        >{`import { SHADOW_LEVEL1, SHADOW_LEVEL2, SHADOW_LEVEL3 } from '@lead/shared/packages/mui';`}</code>
      </Box>
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
    </Grid>
  );
};
