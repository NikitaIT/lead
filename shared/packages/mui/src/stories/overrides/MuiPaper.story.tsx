/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ =
  "import type { PaperProps } from '@mui/material';\nimport { Box, Paper as MuiPaper, Typography } from '@mui/material';\nimport type { ElementType } from 'react';\n\nimport { withMaterialLink } from '../withMaterialLink';\n\nconst Template = withMaterialLink<PaperProps, ElementType>('paper')((props) => (\n  <MuiPaper {...props}>\n    <Box p={5}>\n      <Typography variant=\"h4\">Paper content</Typography>\n    </Box>\n  </MuiPaper>\n));\n\nexport const Paper = Template.bind({});\n\nPaper.argTypes = {\n  variant: {\n    options: ['elevation', 'outlined'],\n    control: {\n      type: 'select',\n    },\n  },\n  square: {\n    type: 'boolean',\n  },\n  elevation: {\n    control: {\n      type: 'range',\n      min: 0,\n      max: 10,\n      step: 1,\n    },\n  },\n};\n\nPaper.args = {\n  variant: 'elevation',\n  square: false,\n  elevation: 1,\n};\n";
// @ts-ignore
var __LOCATIONS_MAP__ = {
  Paper: {
    startLoc: { col: 17, line: 7 },
    endLoc: { col: 2, line: 13 },
    startBody: { col: 17, line: 7 },
    endBody: { col: 2, line: 13 },
  },
};

import type { PaperProps } from '@mui/material';
import { Box, Paper as MuiPaper, Typography } from '@mui/material';
import type { ElementType } from 'react';

import { withMaterialLink } from '../withMaterialLink';

const Template = withMaterialLink<PaperProps, ElementType>('paper')((props) => (
  <MuiPaper {...props}>
    <Box p={5}>
      <Typography variant="h4">Paper content</Typography>
    </Box>
  </MuiPaper>
));

export const Paper = Template.bind({});

Paper.argTypes = {
  variant: {
    options: ['elevation', 'outlined'],
    control: {
      type: 'select',
    },
  },
  square: {
    type: 'boolean',
  },
  elevation: {
    control: {
      type: 'range',
      min: 0,
      max: 10,
      step: 1,
    },
  },
};

Paper.args = {
  variant: 'elevation',
  square: false,
  elevation: 1,
};

Paper.parameters = {
  storySource: {
    source:
      'withMaterialLink<PaperProps, ElementType>(\'paper\')((props) => (\n  <MuiPaper {...props}>\n    <Box p={5}>\n      <Typography variant="h4">Paper content</Typography>\n    </Box>\n  </MuiPaper>\n))',
  },
  ...Paper.parameters,
};
