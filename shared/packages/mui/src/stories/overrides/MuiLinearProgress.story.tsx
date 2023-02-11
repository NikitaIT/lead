/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ =
  "import type { LinearProgressProps } from '@mui/material';\nimport { LinearProgress as MuiLinearProgress } from '@mui/material';\nimport type { ElementType } from 'react';\n\nimport { withMaterialLink } from '../withMaterialLink';\n\nconst Template = withMaterialLink<LinearProgressProps, ElementType>(\n  'progress',\n  'linear-progress',\n)((props) => <MuiLinearProgress {...props} />);\n\nexport const LinearProgress = Template.bind({});\n\nLinearProgress.argTypes = {\n  variant: {\n    options: ['indeterminate', 'determinate', 'buffer', undefined],\n    control: {\n      type: 'select',\n    },\n  },\n  color: {\n    options: ['primary', 'secondary', undefined],\n    control: {\n      type: 'select',\n    },\n  },\n  value: {\n    control: { type: 'range', min: 0, max: 100 },\n  },\n  valueBuffer: {\n    control: { type: 'range', min: 0, max: 100 },\n  },\n};\n\nLinearProgress.args = {\n  value: 0,\n  valueBuffer: 0,\n};\n";
// @ts-ignore
var __LOCATIONS_MAP__ = {
  LinearProgress: {
    startLoc: { col: 17, line: 7 },
    endLoc: { col: 46, line: 10 },
    startBody: { col: 17, line: 7 },
    endBody: { col: 46, line: 10 },
  },
};

import type { LinearProgressProps } from '@mui/material';
import { LinearProgress as MuiLinearProgress } from '@mui/material';
import type { ElementType } from 'react';

import { withMaterialLink } from '../withMaterialLink';

const Template = withMaterialLink<LinearProgressProps, ElementType>(
  'progress',
  'linear-progress'
)((props) => <MuiLinearProgress {...props} />);

export const LinearProgress = Template.bind({});

LinearProgress.argTypes = {
  variant: {
    options: ['indeterminate', 'determinate', 'buffer', undefined],
    control: {
      type: 'select',
    },
  },
  color: {
    options: ['primary', 'secondary', undefined],
    control: {
      type: 'select',
    },
  },
  value: {
    control: { type: 'range', min: 0, max: 100 },
  },
  valueBuffer: {
    control: { type: 'range', min: 0, max: 100 },
  },
};

LinearProgress.args = {
  value: 0,
  valueBuffer: 0,
};

LinearProgress.parameters = {
  storySource: {
    source:
      "withMaterialLink<LinearProgressProps, ElementType>(\n  'progress',\n  'linear-progress',\n)((props) => <MuiLinearProgress {...props} />)",
  },
  ...LinearProgress.parameters,
};
