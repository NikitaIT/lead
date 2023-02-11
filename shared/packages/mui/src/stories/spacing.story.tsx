import type { GridProps } from '@mui/material';
import { Grid, Typography } from '@mui/material';
import type { StoryFn } from '@lead/storybook-story';
import type { FC, PropsWithChildren } from 'react';

import theme from '../theme';

// TODO - Remove Record<> after updating to latest @types/react
const Item: FC<PropsWithChildren<Record<string, unknown>>> = ({ children }) => (
  <Grid
    item
    sx={{
      display: 'flex',
      alignItems: 'center',
      '& div:first-of-type': {
        width: 100,
        height: 100,
        borderRadius: `${theme.shape.borderRadius}px`,
      },
    }}
  >
    <div style={{ backgroundColor: `${children}` }} />
  </Grid>
);

const Template: StoryFn<GridProps> = ({ spacing, ...props }) => (
  <>
    <Typography gutterBottom sx={{ marginTop: 3 }}>
      <>Spacing {spacing}</>
    </Typography>
    <Grid container {...props} spacing={spacing}>
      <Item>{theme.palette.primary.light}</Item>
      <Item>{theme.palette.primary.main}</Item>
      <Item>{theme.palette.primary.dark}</Item>
    </Grid>
  </>
);

export const Spacing = Template.bind({});

Spacing.args = {
  spacing: 0,
};

Spacing.argTypes = {
  spacing: {
    control: {
      type: 'range',
      min: 0,
      max: 20,
      step: 0.5,
    },
  },
};
