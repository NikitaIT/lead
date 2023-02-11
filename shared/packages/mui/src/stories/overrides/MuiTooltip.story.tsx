/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ =
  "import type { TooltipProps } from '@mui/material';\nimport { Button, Tooltip as MuiTooltip } from '@mui/material';\nimport type { ElementType } from 'react';\n\nimport { withMaterialLink } from '../withMaterialLink';\n\nconst Template = withMaterialLink<TooltipProps, ElementType>(\n  'tooltips',\n  'tooltip',\n)((props) => (\n  <MuiTooltip {...props}>\n    <Button>Button</Button>\n  </MuiTooltip>\n));\n\nexport const Tooltip = Template.bind({});\n\nTooltip.argTypes = {\n  title: {\n    control: {\n      type: 'text',\n    },\n  },\n  open: {\n    type: 'boolean',\n  },\n};\n\nTooltip.args = {\n  title: 'title',\n};\n";
// @ts-ignore
var __LOCATIONS_MAP__ = {
  Tooltip: {
    startLoc: { col: 17, line: 7 },
    endLoc: { col: 2, line: 14 },
    startBody: { col: 17, line: 7 },
    endBody: { col: 2, line: 14 },
  },
};

import type { TooltipProps } from '@mui/material';
import { Button, Tooltip as MuiTooltip } from '@mui/material';
import type { ElementType } from 'react';

import { withMaterialLink } from '../withMaterialLink';

const Template = withMaterialLink<TooltipProps, ElementType>(
  'tooltips',
  'tooltip'
)((props) => (
  <MuiTooltip {...props}>
    <Button>Button</Button>
  </MuiTooltip>
));

export const Tooltip = Template.bind({});

Tooltip.argTypes = {
  title: {
    control: {
      type: 'text',
    },
  },
  open: {
    type: 'boolean',
  },
};

Tooltip.args = {
  title: 'title',
};

Tooltip.parameters = {
  storySource: {
    source:
      "withMaterialLink<TooltipProps, ElementType>(\n  'tooltips',\n  'tooltip',\n)((props) => (\n  <MuiTooltip {...props}>\n    <Button>Button</Button>\n  </MuiTooltip>\n))",
  },
  ...Tooltip.parameters,
};
