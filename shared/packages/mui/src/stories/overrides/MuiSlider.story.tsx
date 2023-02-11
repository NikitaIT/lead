/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ =
  "import type { SliderProps } from '@mui/material';\nimport { Slider as MuiSlider } from '@mui/material';\nimport type { ElementType } from 'react';\nimport { useState, useCallback } from 'react';\n\nimport { withMaterialLink } from '../withMaterialLink';\n\nconst Template = withMaterialLink<SliderProps, ElementType>('slider')((props) => (\n  <MuiSlider {...props} />\n));\n\nexport const Slider = Template.bind({});\n\nSlider.argTypes = {\n  marks: {\n    type: 'boolean',\n    default: false,\n  },\n  disabled: {\n    type: 'boolean',\n    default: false,\n  },\n  valueLabelDisplay: {\n    options: ['on', 'off', 'auto'],\n    control: {\n      type: 'select',\n    },\n  },\n};\n\nSlider.args = {\n  valueLabelDisplay: 'off',\n};\n\nconst TemplateRange = withMaterialLink<SliderProps, ElementType>('slider')((props) => {\n  const [value, setValue] = useState([0, 100]);\n  const handleChange = useCallback((_: unknown, newValue: number[] | number) => {\n    setValue(newValue as number[]);\n  }, []);\n\n  return (\n    <MuiSlider\n      {...props}\n      value={value}\n      onChange={handleChange}\n    />\n  );\n});\n\nexport const SliderRange = TemplateRange.bind({});\n\nSliderRange.argTypes = {\n  marks: {\n    type: 'boolean',\n  },\n  disabled: {\n    type: 'boolean',\n  },\n  valueLabelDisplay: {\n    options: ['on', 'off', 'auto'],\n    control: {\n      type: 'select',\n    },\n  },\n};\n\nSliderRange.args = {\n  valueLabelDisplay: 'off',\n};\n";
// @ts-ignore
var __LOCATIONS_MAP__ = {
  Slider: {
    startLoc: { col: 17, line: 8 },
    endLoc: { col: 2, line: 10 },
    startBody: { col: 17, line: 8 },
    endBody: { col: 2, line: 10 },
  },
  SliderRange: {
    startLoc: { col: 22, line: 35 },
    endLoc: { col: 2, line: 48 },
    startBody: { col: 22, line: 35 },
    endBody: { col: 2, line: 48 },
  },
};

import type { SliderProps } from '@mui/material';
import { Slider as MuiSlider } from '@mui/material';
import type { ElementType } from 'react';
import { useState, useCallback } from 'react';

import { withMaterialLink } from '../withMaterialLink';

const Template = withMaterialLink<SliderProps, ElementType>('slider')(
  (props) => <MuiSlider {...props} />
);

export const Slider = Template.bind({});

Slider.argTypes = {
  marks: {
    type: 'boolean',
    default: false,
  },
  disabled: {
    type: 'boolean',
    default: false,
  },
  valueLabelDisplay: {
    options: ['on', 'off', 'auto'],
    control: {
      type: 'select',
    },
  },
};

Slider.args = {
  valueLabelDisplay: 'off',
};

const TemplateRange = withMaterialLink<SliderProps, ElementType>('slider')(
  (props) => {
    const [value, setValue] = useState([0, 100]);
    const handleChange = useCallback(
      (_: unknown, newValue: number[] | number) => {
        setValue(newValue as number[]);
      },
      []
    );

    return <MuiSlider {...props} value={value} onChange={handleChange} />;
  }
);

export const SliderRange = TemplateRange.bind({});

SliderRange.argTypes = {
  marks: {
    type: 'boolean',
  },
  disabled: {
    type: 'boolean',
  },
  valueLabelDisplay: {
    options: ['on', 'off', 'auto'],
    control: {
      type: 'select',
    },
  },
};

SliderRange.args = {
  valueLabelDisplay: 'off',
};

Slider.parameters = {
  storySource: {
    source:
      "withMaterialLink<SliderProps, ElementType>('slider')((props) => (\n  <MuiSlider {...props} />\n))",
  },
  ...Slider.parameters,
};
SliderRange.parameters = {
  storySource: {
    source:
      "withMaterialLink<SliderProps, ElementType>('slider')((props) => {\n  const [value, setValue] = useState([0, 100]);\n  const handleChange = useCallback((_: unknown, newValue: number[] | number) => {\n    setValue(newValue as number[]);\n  }, []);\n\n  return (\n    <MuiSlider\n      {...props}\n      value={value}\n      onChange={handleChange}\n    />\n  );\n})",
  },
  ...SliderRange.parameters,
};
