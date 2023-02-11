/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ =
  "import type { CheckboxProps } from '@mui/material';\nimport { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material';\nimport type { ElementType } from 'react';\n\nimport { withMaterialLink } from '../withMaterialLink';\n\nconst Template = withMaterialLink<CheckboxProps & { label: string }, ElementType>(\n  'checkboxes',\n  'checkbox',\n)(({ label, ...props }) => (\n  <FormControlLabel\n    control={<MuiCheckbox {...props} />}\n    label={label}\n  />\n));\n\nexport const Checkbox = Template.bind({});\n\nCheckbox.argTypes = {\n  color: {\n    options: ['primary', 'secondary', undefined],\n    control: {\n      type: 'select',\n    },\n  },\n  label: {\n    control: {\n      type: 'text',\n    },\n  },\n  disabled: {\n    type: 'boolean',\n  },\n  checked: {\n    type: 'boolean',\n  },\n  onChange: { action: 'change' },\n};\n\nCheckbox.args = {\n  label: 'Label',\n  checked: false,\n};\n";
// @ts-ignore
var __LOCATIONS_MAP__ = {
  Checkbox: {
    startLoc: { col: 17, line: 7 },
    endLoc: { col: 2, line: 15 },
    startBody: { col: 17, line: 7 },
    endBody: { col: 2, line: 15 },
  },
};

import type { CheckboxProps } from '@mui/material';
import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material';
import type { ElementType } from 'react';

import { withMaterialLink } from '../withMaterialLink';

const Template = withMaterialLink<
  CheckboxProps & { label: string },
  ElementType
>(
  'checkboxes',
  'checkbox'
)(({ label, ...props }) => (
  <FormControlLabel control={<MuiCheckbox {...props} />} label={label} />
));

export const Checkbox = Template.bind({});

Checkbox.argTypes = {
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

Checkbox.args = {
  label: 'Label',
  checked: false,
};

Checkbox.parameters = {
  storySource: {
    source:
      "withMaterialLink<CheckboxProps & { label: string }, ElementType>(\n  'checkboxes',\n  'checkbox',\n)(({ label, ...props }) => (\n  <FormControlLabel\n    control={<MuiCheckbox {...props} />}\n    label={label}\n  />\n))",
  },
  ...Checkbox.parameters,
};
