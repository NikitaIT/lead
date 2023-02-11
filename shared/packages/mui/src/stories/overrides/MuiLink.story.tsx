/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ =
  "import type { LinkProps } from '@mui/material';\nimport { Link as MuiLink } from '@mui/material';\nimport type { ElementType } from 'react';\n\nimport { withMaterialLink } from '../withMaterialLink';\n\nconst Template = withMaterialLink<LinkProps, ElementType>(\n  'links',\n  'Link',\n)((props) => <MuiLink {...props} />);\n\nexport const Link = Template.bind({});\n\nLink.args = {\n  href: 'google.com',\n  children: 'Content',\n};\n\nLink.argTypes = {\n  variant: {\n    options: ['button', 'body1', undefined],\n    control: {\n      type: 'select',\n    },\n  },\n  color: {\n    options: ['primary', 'secondary', 'textPrimary', 'textSecondary', 'error', undefined],\n    control: {\n      type: 'select',\n    },\n  },\n  children: {\n    control: {\n      type: 'text',\n    },\n  },\n  onClick: { action: 'clicked' },\n};\n";
// @ts-ignore
var __LOCATIONS_MAP__ = {
  Link: {
    startLoc: { col: 17, line: 7 },
    endLoc: { col: 36, line: 10 },
    startBody: { col: 17, line: 7 },
    endBody: { col: 36, line: 10 },
  },
};

import type { LinkProps } from '@mui/material';
import { Link as MuiLink } from '@mui/material';
import type { ElementType } from 'react';

import { withMaterialLink } from '../withMaterialLink';

const Template = withMaterialLink<LinkProps, ElementType>(
  'links',
  'Link'
)((props) => <MuiLink {...props} />);

export const Link = Template.bind({});

Link.args = {
  href: 'google.com',
  children: 'Content',
};

Link.argTypes = {
  variant: {
    options: ['button', 'body1', undefined],
    control: {
      type: 'select',
    },
  },
  color: {
    options: [
      'primary',
      'secondary',
      'textPrimary',
      'textSecondary',
      'error',
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
  onClick: { action: 'clicked' },
};

Link.parameters = {
  storySource: {
    source:
      "withMaterialLink<LinkProps, ElementType>(\n  'links',\n  'Link',\n)((props) => <MuiLink {...props} />)",
  },
  ...Link.parameters,
};
