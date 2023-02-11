/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ =
  "import type { ElementType } from 'react';\n\nimport type { ButtonProps } from '../..';\nimport { Button as MuiButton } from '../..';\nimport { withMaterialLink } from '../withMaterialLink';\n\nconst Template = withMaterialLink<ButtonProps, ElementType>(\n  'buttons',\n  'button',\n)((props) => <MuiButton {...props} />);\n\nexport const Button = Template.bind({});\n\nButton.argTypes = {\n  size: {\n    options: ['small', 'medium', 'large', undefined],\n    control: { type: 'select' },\n  },\n  variant: {\n    options: ['text', 'contained', 'outlined', undefined],\n    control: { type: 'select' },\n  },\n  color: {\n    options: ['inherit', 'default', 'primary', 'superApp', 'frontPage', undefined],\n    control: {\n      type: 'select',\n    },\n  },\n  children: {\n    control: {\n      type: 'text',\n    },\n  },\n  disabled: {\n    type: 'boolean',\n  },\n  onClick: { action: 'clicked' },\n};\n\nButton.args = {\n  children: 'Content',\n};\n";
// @ts-ignore
var __LOCATIONS_MAP__ = {
  Button: {
    startLoc: { col: 17, line: 7 },
    endLoc: { col: 38, line: 10 },
    startBody: { col: 17, line: 7 },
    endBody: { col: 38, line: 10 },
  },
};

import type { ElementType } from 'react';

import type { ButtonProps } from '../..';
import { Button as MuiButton } from '../..';
import { withMaterialLink } from '../withMaterialLink';

const Template = withMaterialLink<ButtonProps, ElementType>(
  'buttons',
  'button'
)((props) => <MuiButton {...props} />);

export const Button = Template.bind({});

Button.argTypes = {
  size: {
    options: ['small', 'medium', 'large', undefined],
    control: { type: 'select' },
  },
  variant: {
    options: ['text', 'contained', 'outlined', undefined],
    control: { type: 'select' },
  },
  color: {
    options: [
      'inherit',
      'default',
      'primary',
      'superApp',
      'frontPage',
      undefined,
    ],
    control: {
      type: 'select',
    },
  },
  children: {
    control: {
      type: 'text',
    },
  },
  disabled: {
    type: 'boolean',
  },
  onClick: { action: 'clicked' },
};

Button.args = {
  children: 'Content',
};

Button.parameters = {
  storySource: {
    source:
      "withMaterialLink<ButtonProps, ElementType>(\n  'buttons',\n  'button',\n)((props) => <MuiButton {...props} />)",
  },
  ...Button.parameters,
};
