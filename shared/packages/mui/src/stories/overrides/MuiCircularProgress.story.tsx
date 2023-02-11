/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ =
  "import type { CircularProgressProps } from '@mui/material';\nimport { CircularProgress as MuiCircularProgress } from '@mui/material';\nimport type { ElementType } from 'react';\n\nimport { withMaterialLink } from '../withMaterialLink';\n\nconst Template = withMaterialLink<CircularProgressProps, ElementType>(\n  'progress',\n  'circular-progress',\n)((props) => <MuiCircularProgress {...props} />);\n\nexport const CircularProgress = Template.bind({});\n\nCircularProgress.argTypes = {\n  variant: {\n    options: ['indeterminate', 'determinate', undefined],\n    control: {\n      type: 'select',\n    },\n  },\n  color: {\n    options: ['primary', 'secondary', 'success', 'warning', 'info', 'error', undefined],\n    control: {\n      type: 'select',\n    },\n  },\n  value: {\n    control: { type: 'range', min: 0, max: 100 },\n  },\n};\n\nCircularProgress.args = {\n  value: 0,\n};\n";
// @ts-ignore
var __LOCATIONS_MAP__ = {
  CircularProgress: {
    startLoc: { col: 17, line: 7 },
    endLoc: { col: 48, line: 10 },
    startBody: { col: 17, line: 7 },
    endBody: { col: 48, line: 10 },
  },
};

import type { CircularProgressProps } from '@mui/material';
import { CircularProgress as MuiCircularProgress } from '@mui/material';
import type { ElementType } from 'react';

import { withMaterialLink } from '../withMaterialLink';

const Template = withMaterialLink<CircularProgressProps, ElementType>(
  'progress',
  'circular-progress'
)((props) => <MuiCircularProgress {...props} />);

export const CircularProgress = Template.bind({});

CircularProgress.argTypes = {
  variant: {
    options: ['indeterminate', 'determinate', undefined],
    control: {
      type: 'select',
    },
  },
  color: {
    options: [
      'primary',
      'secondary',
      'success',
      'warning',
      'info',
      'error',
      undefined,
    ],
    control: {
      type: 'select',
    },
  },
  value: {
    control: { type: 'range', min: 0, max: 100 },
  },
};

CircularProgress.args = {
  value: 0,
};

CircularProgress.parameters = {
  storySource: {
    source:
      "withMaterialLink<CircularProgressProps, ElementType>(\n  'progress',\n  'circular-progress',\n)((props) => <MuiCircularProgress {...props} />)",
  },
  ...CircularProgress.parameters,
};
