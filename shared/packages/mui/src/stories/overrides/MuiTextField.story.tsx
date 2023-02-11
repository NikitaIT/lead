/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ =
  "import type { TextFieldProps } from '@mui/material';\nimport { TextField as MuiTextField } from '@mui/material';\nimport type { ElementType } from 'react';\n\nimport { withMaterialLink } from '../withMaterialLink';\n\nconst Template = withMaterialLink<TextFieldProps, ElementType>(\n  'text-fields',\n  'text-field',\n)((props) => <MuiTextField {...props} />);\n\nconst defaultArgs = {\n  variant: {\n    control: {\n      type: 'select',\n    },\n    options: ['standard', 'filled', 'outlined', undefined],\n  },\n  color: {\n    control: {\n      type: 'select',\n    },\n    options: ['primary', 'secondary', undefined],\n  },\n  placeholder: {\n    control: {\n      type: 'text',\n    },\n  },\n  helperText: {\n    control: {\n      type: 'text',\n    },\n  },\n  label: {\n    control: {\n      type: 'text',\n    },\n  },\n  disabled: {\n    control: {\n      type: 'boolean',\n    },\n  },\n  required: {\n    control: {\n      type: 'boolean',\n    },\n  },\n  onChange: { action: 'change' },\n};\n\nexport const TextField = Template.bind({});\n\nTextField.argTypes = defaultArgs;\n\nTextField.args = {\n  defaultValue: 'Value',\n  label: 'Label',\n  helperText: 'Helper text',\n  placeholder: 'Placeholder',\n};\n\nexport const TextFieldTextArea = Template.bind({});\n\nTextFieldTextArea.args = {\n  multiline: true,\n  fullWidth: true,\n  variant: 'outlined',\n  rows: 22,\n  defaultValue: 'This is textarea',\n};\n\nTextFieldTextArea.argTypes = defaultArgs;\n";
// @ts-ignore
var __LOCATIONS_MAP__ = {
  TextField: {
    startLoc: { col: 17, line: 7 },
    endLoc: { col: 41, line: 10 },
    startBody: { col: 17, line: 7 },
    endBody: { col: 41, line: 10 },
  },
  TextFieldTextArea: {
    startLoc: { col: 17, line: 7 },
    endLoc: { col: 41, line: 10 },
    startBody: { col: 17, line: 7 },
    endBody: { col: 41, line: 10 },
  },
};

import type { TextFieldProps } from '@mui/material';
import { TextField as MuiTextField } from '@mui/material';
import type { ElementType } from 'react';

import { withMaterialLink } from '../withMaterialLink';

const Template = withMaterialLink<TextFieldProps, ElementType>(
  'text-fields',
  'text-field'
)((props) => <MuiTextField {...props} />);

const defaultArgs = {
  variant: {
    control: {
      type: 'select',
    },
    options: ['standard', 'filled', 'outlined', undefined],
  },
  color: {
    control: {
      type: 'select',
    },
    options: ['primary', 'secondary', undefined],
  },
  placeholder: {
    control: {
      type: 'text',
    },
  },
  helperText: {
    control: {
      type: 'text',
    },
  },
  label: {
    control: {
      type: 'text',
    },
  },
  disabled: {
    control: {
      type: 'boolean',
    },
  },
  required: {
    control: {
      type: 'boolean',
    },
  },
  onChange: { action: 'change' },
};

export const TextField = Template.bind({});

TextField.argTypes = defaultArgs;

TextField.args = {
  defaultValue: 'Value',
  label: 'Label',
  helperText: 'Helper text',
  placeholder: 'Placeholder',
};

export const TextFieldTextArea = Template.bind({});

TextFieldTextArea.args = {
  multiline: true,
  fullWidth: true,
  variant: 'outlined',
  rows: 22,
  defaultValue: 'This is textarea',
};

TextFieldTextArea.argTypes = defaultArgs;

TextField.parameters = {
  storySource: {
    source:
      "withMaterialLink<TextFieldProps, ElementType>(\n  'text-fields',\n  'text-field',\n)((props) => <MuiTextField {...props} />)",
  },
  ...TextField.parameters,
};
TextFieldTextArea.parameters = {
  storySource: {
    source:
      "withMaterialLink<TextFieldProps, ElementType>(\n  'text-fields',\n  'text-field',\n)((props) => <MuiTextField {...props} />)",
  },
  ...TextFieldTextArea.parameters,
};
