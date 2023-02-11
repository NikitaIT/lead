import { Backdrop, Button, Typography } from '@mui/material';
import type { CSSProperties } from 'react';
import { isDocs } from '@lead/storybook-story';

export const MuiBackdrop = function MuiBackdrop() {
  const docsStyles: CSSProperties = isDocs()
    ? {
        position: 'absolute',
        zIndex: 100,
      }
    : {
        zIndex: 100,
      };

  return (
    <div>
      <Typography gutterBottom variant="h3">
        Title behind the backdrop
      </Typography>
      <Typography gutterBottom variant="body1">
        Content behind the backdrop. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </Typography>
      <Button variant="contained" color="primary">
        Primary button
      </Button>
      <Backdrop open style={docsStyles} />
    </div>
  );
};
