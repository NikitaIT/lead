/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ =
  "import type { BadgeProps } from '@mui/material';\nimport { Badge as MuiBadge } from '@mui/material';\nimport { Notification } from '@lead/shared/packages/icons';\nimport type { ElementType } from 'react';\n\nimport { withMaterialLink } from '../withMaterialLink';\n\nconst Template = withMaterialLink<BadgeProps, ElementType>(\n  'badges',\n  'badge',\n)(({ ...props }) => (\n  <MuiBadge {...props}>\n    <Notification sx={{ fontSize: '3rem' }} />\n  </MuiBadge>\n));\n\nexport const Badge = Template.bind({});\n\nBadge.argTypes = {\n  color: {\n    options: ['default', 'primary', 'secondary', 'error'],\n    control: {\n      type: 'select',\n    },\n  },\n  variant: {\n    options: ['dot', 'standard'],\n    control: {\n      type: 'select',\n    },\n  },\n  badgeContent: {\n    control: {\n      type: 'text',\n    },\n  },\n  overlap: {\n    options: ['circular', 'rectangular'],\n    control: {\n      type: 'select',\n    },\n  },\n  max: {\n    options: [9, 99, 999],\n    control: {\n      type: 'select',\n    },\n  },\n};\n\nBadge.args = {\n  color: 'primary',\n  variant: 'standard',\n  badgeContent: '2',\n  overlap: 'circular',\n  max: 999,\n};\n";
// @ts-ignore
var __LOCATIONS_MAP__ = {
  Badge: {
    startLoc: { col: 17, line: 8 },
    endLoc: { col: 2, line: 15 },
    startBody: { col: 17, line: 8 },
    endBody: { col: 2, line: 15 },
  },
};

import type { BadgeProps } from '@mui/material';
import { Badge as MuiBadge } from '@mui/material';
import { Notification } from '@lead/shared/packages/icons';
import type { ElementType } from 'react';

import { withMaterialLink } from '../withMaterialLink';

const Template = withMaterialLink<BadgeProps, ElementType>(
  'badges',
  'badge'
)(({ ...props }) => (
  <MuiBadge {...props}>
    <Notification sx={{ fontSize: '3rem' }} />
  </MuiBadge>
));

export const Badge = Template.bind({});

Badge.argTypes = {
  color: {
    options: ['default', 'primary', 'secondary', 'error'],
    control: {
      type: 'select',
    },
  },
  variant: {
    options: ['dot', 'standard'],
    control: {
      type: 'select',
    },
  },
  badgeContent: {
    control: {
      type: 'text',
    },
  },
  overlap: {
    options: ['circular', 'rectangular'],
    control: {
      type: 'select',
    },
  },
  max: {
    options: [9, 99, 999],
    control: {
      type: 'select',
    },
  },
};

Badge.args = {
  color: 'primary',
  variant: 'standard',
  badgeContent: '2',
  overlap: 'circular',
  max: 999,
};

Badge.parameters = {
  storySource: {
    source:
      "withMaterialLink<BadgeProps, ElementType>(\n  'badges',\n  'badge',\n)(({ ...props }) => (\n  <MuiBadge {...props}>\n    <Notification sx={{ fontSize: '3rem' }} />\n  </MuiBadge>\n))",
  },
  ...Badge.parameters,
};
