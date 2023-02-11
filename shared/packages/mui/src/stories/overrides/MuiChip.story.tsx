/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ =
  "import type { ChipProps } from '@mui/material';\nimport { Chip as MuiChip } from '@mui/material';\nimport type { ElementType } from 'react';\n\nimport { withMaterialLink } from '../withMaterialLink';\n\nconst Template = withMaterialLink<ChipProps, ElementType>(\n  'chips',\n  'chip',\n)(({ ...props }) => <MuiChip {...props} />);\n\nexport const Chip = Template.bind({});\n\nChip.argTypes = {\n  variant: {\n    options: ['default', 'outlined'],\n    control: {\n      type: 'select',\n    },\n  },\n  size: {\n    options: ['medium', 'small'],\n    control: {\n      type: 'select',\n    },\n  },\n  color: {\n    options: ['default', 'primary', 'secondary', 'offer'],\n    control: {\n      type: 'select',\n    },\n  },\n  label: {\n    control: {\n      type: 'text',\n    },\n  },\n  clickable: {\n    type: 'boolean',\n  },\n};\n\nChip.args = {\n  label: 'Label',\n};\n";
// @ts-ignore
var __LOCATIONS_MAP__ = {
  Chip: {
    startLoc: { col: 17, line: 7 },
    endLoc: { col: 43, line: 10 },
    startBody: { col: 17, line: 7 },
    endBody: { col: 43, line: 10 },
  },
};

import type { ChipProps } from '@mui/material';
import { Chip as MuiChip } from '@mui/material';
import type { ElementType } from 'react';

import { withMaterialLink } from '../withMaterialLink';

const Template = withMaterialLink<ChipProps, ElementType>(
  'chips',
  'chip'
)(({ ...props }) => <MuiChip {...props} />);

export const Chip = Template.bind({});

Chip.argTypes = {
  variant: {
    options: ['default', 'outlined'],
    control: {
      type: 'select',
    },
  },
  size: {
    options: ['medium', 'small'],
    control: {
      type: 'select',
    },
  },
  color: {
    options: ['default', 'primary', 'secondary', 'offer'],
    control: {
      type: 'select',
    },
  },
  label: {
    control: {
      type: 'text',
    },
  },
  clickable: {
    type: 'boolean',
  },
};

Chip.args = {
  label: 'Label',
};

Chip.parameters = {
  storySource: {
    source:
      "withMaterialLink<ChipProps, ElementType>(\n  'chips',\n  'chip',\n)(({ ...props }) => <MuiChip {...props} />)",
  },
  ...Chip.parameters,
};
