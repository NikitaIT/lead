/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ =
  "import type { BackdropProps } from '@mui/material';\nimport { Backdrop as MuiBackdrop, Button, Typography } from '@mui/material';\nimport type { ElementType } from 'react';\n\nimport { withMaterialLink } from '../withMaterialLink';\n\nconst Template = withMaterialLink<BackdropProps, ElementType>('backdrop')((props) => (\n  <div>\n    <Typography\n      gutterBottom\n      variant=\"h3\"\n    >\n      Title behind the backdrop\n    </Typography>\n    <Typography\n      gutterBottom\n      variant=\"body1\"\n    >\n      Content behind the backdrop. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure\n      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim\n      id est laborum.\n    </Typography>\n    <Button\n      variant=\"contained\"\n      color=\"primary\"\n    >\n      Primary button\n    </Button>\n    <MuiBackdrop\n      {...props}\n      style={{ zIndex: 100 }}\n    />\n  </div>\n));\n\nexport const Backdrop = Template.bind({});\n\nBackdrop.argTypes = {\n  open: {\n    type: 'boolean',\n  },\n};\n\nBackdrop.args = {\n  open: false,\n};\n";
// @ts-ignore
var __LOCATIONS_MAP__ = {
  Backdrop: {
    startLoc: { col: 17, line: 7 },
    endLoc: { col: 2, line: 37 },
    startBody: { col: 17, line: 7 },
    endBody: { col: 2, line: 37 },
  },
};

import type { BackdropProps } from '@mui/material';
import { Backdrop as MuiBackdrop, Button, Typography } from '@mui/material';
import type { ElementType } from 'react';

import { withMaterialLink } from '../withMaterialLink';

const Template = withMaterialLink<BackdropProps, ElementType>('backdrop')(
  (props) => (
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
      <MuiBackdrop {...props} style={{ zIndex: 100 }} />
    </div>
  )
);

export const Backdrop = Template.bind({});

Backdrop.argTypes = {
  open: {
    type: 'boolean',
  },
};

Backdrop.args = {
  open: false,
};

Backdrop.parameters = {
  storySource: {
    source:
      'withMaterialLink<BackdropProps, ElementType>(\'backdrop\')((props) => (\n  <div>\n    <Typography\n      gutterBottom\n      variant="h3"\n    >\n      Title behind the backdrop\n    </Typography>\n    <Typography\n      gutterBottom\n      variant="body1"\n    >\n      Content behind the backdrop. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure\n      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim\n      id est laborum.\n    </Typography>\n    <Button\n      variant="contained"\n      color="primary"\n    >\n      Primary button\n    </Button>\n    <MuiBackdrop\n      {...props}\n      style={{ zIndex: 100 }}\n    />\n  </div>\n))',
  },
  ...Backdrop.parameters,
};
