/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ =
  "import type { RadioProps } from '@mui/material';\nimport { FormControlLabel, Radio as MuiRadio } from '@mui/material';\nimport type { ElementType } from 'react';\n\nimport { withMaterialLink } from '../withMaterialLink';\n\nconst Template = withMaterialLink<RadioProps & { label: string }, ElementType>(\n  'radio-buttons',\n  'radio',\n)(({ label, ...props }) => (\n  <FormControlLabel\n    control={<MuiRadio {...props} />}\n    label={label}\n  />\n));\n\nexport const Radio = Template.bind({});\n\nRadio.argTypes = {\n  color: {\n    options: ['primary', 'secondary', undefined],\n    control: {\n      type: 'select',\n    },\n  },\n  label: {\n    control: {\n      type: 'text',\n    },\n  },\n  disabled: {\n    type: 'boolean',\n  },\n  checked: {\n    type: 'boolean',\n  },\n  onChange: { action: 'change' },\n};\n\nRadio.args = {\n  label: 'Label',\n};\n";
// @ts-ignore
var __LOCATIONS_MAP__ = {
  Radio: {
    startLoc: { col: 17, line: 7 },
    endLoc: { col: 2, line: 15 },
    startBody: { col: 17, line: 7 },
    endBody: { col: 2, line: 15 },
  },
};

import type { RadioProps } from '@mui/material';
import { FormControlLabel, Radio as MuiRadio } from '@mui/material';
import type { ElementType } from 'react';

import { withMaterialLink } from '../withMaterialLink';

const Template = withMaterialLink<RadioProps & { label: string }, ElementType>(
  'radio-buttons',
  'radio'
)(({ label, ...props }) => (
  <FormControlLabel control={<MuiRadio {...props} />} label={label} />
));

export const Radio = Template.bind({});

Radio.argTypes = {
  color: {
    options: ['primary', 'secondary', undefined],
    control: {
      type: 'select',
    },
  },
  label: {
    control: {
      type: 'text',
    },
  },
  disabled: {
    type: 'boolean',
  },
  checked: {
    type: 'boolean',
  },
  onChange: { action: 'change' },
};

Radio.args = {
  label: 'Label',
};

Radio.parameters = {
  storySource: {
    source:
      "withMaterialLink<RadioProps & { label: string }, ElementType>(\n  'radio-buttons',\n  'radio',\n)(({ label, ...props }) => (\n  <FormControlLabel\n    control={<MuiRadio {...props} />}\n    label={label}\n  />\n))",
  },
  ...Radio.parameters,
};
