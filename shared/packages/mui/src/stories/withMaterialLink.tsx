import { Box, Button, Grid } from '@mui/material';
import { DocumentFilled, List } from '@lead/shared/packages/icons';
import type { StoryFn } from '@lead/storybook-story';
import type { ComponentPropsWithRef, ComponentType, ElementType } from 'react';

export function withMaterialLink<
  P extends ComponentPropsWithRef<T>,
  T extends ElementType
>(name: string, api?: string) {
  return (StoryComponent: ComponentType<P>): StoryFn<ComponentType<P>> => {
    const _: StoryFn<ComponentType<P>> = (props) => (
      <div>
        <Box my={5}>
          <StoryComponent {...props} />
        </Box>
        <Grid container>
          <Grid>
            <Button
              rel="noreferrer noopener"
              target="_blank"
              href={`https://mui.com/components/${name}`}
              startIcon={<DocumentFilled />}
            >
              Documentation
            </Button>
          </Grid>
          <Grid>
            <Button
              rel="noreferrer noopener"
              target="_blank"
              href={`https://mui.com/api/${api ?? name}`}
              startIcon={<List />}
            >
              Api
            </Button>
          </Grid>
        </Grid>
      </div>
    );
    return _;
  };
}
