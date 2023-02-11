/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ =
  "import type { SkeletonProps } from '@mui/material';\nimport { Skeleton as MuiSkeleton } from '@mui/material';\nimport type { ElementType } from 'react';\n\nimport { withMaterialLink } from '../withMaterialLink';\n\nconst Template = withMaterialLink<SkeletonProps, ElementType>('skeleton')((props) => (\n  <MuiSkeleton {...props} />\n));\n\nexport const Skeleton = Template.bind({});\n\nSkeleton.argTypes = {\n  animation: {\n    control: {\n      type: 'select',\n    },\n    options: ['pulse', 'wave', false, undefined],\n  },\n  height: {\n    control: {\n      type: 'text',\n    },\n  },\n  width: {\n    control: {\n      type: 'text',\n    },\n  },\n  variant: {\n    control: {\n      type: 'select',\n    },\n    options: ['text', 'rectangular', 'circular', undefined],\n  },\n};\n";
// @ts-ignore
var __LOCATIONS_MAP__ = {
  Skeleton: {
    startLoc: { col: 17, line: 7 },
    endLoc: { col: 2, line: 9 },
    startBody: { col: 17, line: 7 },
    endBody: { col: 2, line: 9 },
  },
};

import type { SkeletonProps } from '@mui/material';
import { Skeleton as MuiSkeleton } from '@mui/material';
import type { ElementType } from 'react';

import { withMaterialLink } from '../withMaterialLink';

const Template = withMaterialLink<SkeletonProps, ElementType>('skeleton')(
  (props) => <MuiSkeleton {...props} />
);

export const Skeleton = Template.bind({});

Skeleton.argTypes = {
  animation: {
    control: {
      type: 'select',
    },
    options: ['pulse', 'wave', false, undefined],
  },
  height: {
    control: {
      type: 'text',
    },
  },
  width: {
    control: {
      type: 'text',
    },
  },
  variant: {
    control: {
      type: 'select',
    },
    options: ['text', 'rectangular', 'circular', undefined],
  },
};

Skeleton.parameters = {
  storySource: {
    source:
      "withMaterialLink<SkeletonProps, ElementType>('skeleton')((props) => (\n  <MuiSkeleton {...props} />\n))",
  },
  ...Skeleton.parameters,
};
