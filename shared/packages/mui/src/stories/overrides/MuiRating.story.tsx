/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ =
  "import type { RatingProps } from '@mui/material';\nimport { Rating as MuiRating } from '@mui/material';\nimport type { ElementType } from 'react';\n\nimport { withMaterialLink } from '../withMaterialLink';\n\nconst Template = withMaterialLink<RatingProps, ElementType>('rating')((props) => (\n  <MuiRating\n    name=\"rating\"\n    {...props}\n  />\n));\n\nexport const Rating = Template.bind({});\n\nRating.argTypes = {\n  disabled: {\n    type: 'boolean',\n  },\n  readOnly: {\n    type: 'boolean',\n  },\n  precision: {\n    options: [0.5, 1],\n    control: { type: 'select' },\n  },\n};\n\nRating.args = {\n  precision: 1,\n  defaultValue: 2,\n};\n";
// @ts-ignore
var __LOCATIONS_MAP__ = {
  Rating: {
    startLoc: { col: 17, line: 7 },
    endLoc: { col: 2, line: 12 },
    startBody: { col: 17, line: 7 },
    endBody: { col: 2, line: 12 },
  },
};

import type { RatingProps } from '@mui/material';
import { Rating as MuiRating } from '@mui/material';
import type { ElementType } from 'react';

import { withMaterialLink } from '../withMaterialLink';

const Template = withMaterialLink<RatingProps, ElementType>('rating')(
  (props) => <MuiRating name="rating" {...props} />
);

export const Rating = Template.bind({});

Rating.argTypes = {
  disabled: {
    type: 'boolean',
  },
  readOnly: {
    type: 'boolean',
  },
  precision: {
    options: [0.5, 1],
    control: { type: 'select' },
  },
};

Rating.args = {
  precision: 1,
  defaultValue: 2,
};

Rating.parameters = {
  storySource: {
    source:
      'withMaterialLink<RatingProps, ElementType>(\'rating\')((props) => (\n  <MuiRating\n    name="rating"\n    {...props}\n  />\n))',
  },
  ...Rating.parameters,
};
