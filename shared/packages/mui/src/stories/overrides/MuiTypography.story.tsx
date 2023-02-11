/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ =
  "import type { TypographyProps } from '@mui/material';\nimport { Typography as Text } from '@mui/material';\nimport type { ElementType } from 'react';\n\nimport typography from '../../theme/typography';\nimport { withMaterialLink } from '../withMaterialLink';\n\nconst Template = withMaterialLink<TypographyProps, ElementType>('typography')(\n  ({ children, variant, ...props }) => {\n    let fontSize: number | undefined;\n    if (variant !== 'inherit' && variant !== undefined) {\n      fontSize = typography[variant]?.fontSize as number;\n    }\n\n    return (\n      <Text\n        {...props}\n        variant={variant}\n      >\n        {children}| font size: {fontSize}\n      </Text>\n    );\n  },\n);\n\nexport const Typography = Template.bind({});\n\nTypography.argTypes = {\n  color: {\n    control: {\n      type: 'select',\n    },\n    options: ['primary', 'secondary', 'initial', 'textPrimary', 'textSecondary', 'error'],\n  },\n  variant: {\n    control: {\n      type: 'select',\n    },\n    options: [\n      'h1',\n      'h2',\n      'h3',\n      'h4',\n      'h5',\n      'h6',\n      'subtitle1',\n      'subtitle2',\n      'body1',\n      'body2',\n      'overline',\n      'button',\n      'caption',\n    ],\n  },\n  children: {\n    control: {\n      type: 'text',\n    },\n  },\n};\n\nTypography.args = {\n  children:\n    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, doloremque dolorem voluptate commodi qui quidem maxime inventore aut aliquid ex odio nisi optio id quas debitis enim deserunt a non!',\n  variant: 'body1',\n  color: 'primary',\n};\n";
// @ts-ignore
var __LOCATIONS_MAP__ = {
  Typography: {
    startLoc: { col: 17, line: 8 },
    endLoc: { col: 1, line: 24 },
    startBody: { col: 17, line: 8 },
    endBody: { col: 1, line: 24 },
  },
};

import type { TypographyProps } from '@mui/material';
import { Typography as Text } from '@mui/material';
import type { ElementType } from 'react';

import typography from '../../theme/typography';
import { withMaterialLink } from '../withMaterialLink';

const Template = withMaterialLink<TypographyProps, ElementType>('typography')(
  ({ children, variant, ...props }) => {
    let fontSize: number | undefined;
    if (variant !== 'inherit' && variant !== undefined) {
      fontSize = typography[variant]?.fontSize as number;
    }

    return (
      <Text {...props} variant={variant}>
        {children}| font size: {fontSize}
      </Text>
    );
  }
);

export const Typography = Template.bind({});

Typography.argTypes = {
  color: {
    control: {
      type: 'select',
    },
    options: [
      'primary',
      'secondary',
      'initial',
      'textPrimary',
      'textSecondary',
      'error',
    ],
  },
  variant: {
    control: {
      type: 'select',
    },
    options: [
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'subtitle1',
      'subtitle2',
      'body1',
      'body2',
      'overline',
      'button',
      'caption',
    ],
  },
  children: {
    control: {
      type: 'text',
    },
  },
};

Typography.args = {
  children:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, doloremque dolorem voluptate commodi qui quidem maxime inventore aut aliquid ex odio nisi optio id quas debitis enim deserunt a non!',
  variant: 'body1',
  color: 'primary',
};

Typography.parameters = {
  storySource: {
    source:
      "withMaterialLink<TypographyProps, ElementType>('typography')(\n  ({ children, variant, ...props }) => {\n    let fontSize: number | undefined;\n    if (variant !== 'inherit' && variant !== undefined) {\n      fontSize = typography[variant]?.fontSize as number;\n    }\n\n    return (\n      <Text\n        {...props}\n        variant={variant}\n      >\n        {children}| font size: {fontSize}\n      </Text>\n    );\n  },\n)",
  },
  ...Typography.parameters,
};
