/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ =
  "import type { SwitchProps } from '@mui/material';\nimport { Switch as MuiSwitch } from '@mui/material';\nimport type { ElementType } from 'react';\n\nimport { withMaterialLink } from '../withMaterialLink';\n\nconst Template = withMaterialLink<SwitchProps, ElementType>(\n  'switches',\n  'switch',\n)((props) => <MuiSwitch {...props} />);\n\nexport const Switch = Template.bind({});\n\nSwitch.argTypes = {\n  size: {\n    control: {\n      type: 'select',\n    },\n    options: ['small', 'medium', undefined],\n  },\n  color: {\n    control: {\n      type: 'select',\n    },\n    options: ['default', 'primary', 'secondary', undefined],\n  },\n};\n";
// @ts-ignore
var __LOCATIONS_MAP__ = {
  Switch: {
    startLoc: { col: 17, line: 7 },
    endLoc: { col: 38, line: 10 },
    startBody: { col: 17, line: 7 },
    endBody: { col: 38, line: 10 },
  },
};

import type { SwitchProps } from '@mui/material';
import { Switch as MuiSwitch } from '@mui/material';
import type { ElementType } from 'react';

import { withMaterialLink } from '../withMaterialLink';

const Template = withMaterialLink<SwitchProps, ElementType>(
  'switches',
  'switch'
)((props) => <MuiSwitch {...props} />);

export const Switch = Template.bind({});

Switch.argTypes = {
  size: {
    control: {
      type: 'select',
    },
    options: ['small', 'medium', undefined],
  },
  color: {
    control: {
      type: 'select',
    },
    options: ['default', 'primary', 'secondary', undefined],
  },
};

Switch.parameters = {
  storySource: {
    source:
      "withMaterialLink<SwitchProps, ElementType>(\n  'switches',\n  'switch',\n)((props) => <MuiSwitch {...props} />)",
  },
  ...Switch.parameters,
};
