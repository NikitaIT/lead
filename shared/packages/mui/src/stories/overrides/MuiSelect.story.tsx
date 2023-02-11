/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ =
  "import type { SelectProps, SelectChangeEvent } from '@mui/material';\nimport { FormControl, InputLabel, MenuItem, Select as MuiSelect } from '@mui/material';\nimport type { ElementType } from 'react';\nimport { useState } from 'react';\n\nimport { withMaterialLink } from '../withMaterialLink';\n\nconst Template = withMaterialLink<SelectProps & { label?: string }, ElementType>(\n  'selects',\n  'select',\n)(({ label, multiple, variant, size, ...props }) => {\n  const [age, setAge] = useState<string[]>([]);\n\n  const selectValues = [\n    { name: 'Ten', value: 10 },\n    { name: 'Twenty', value: 20 },\n    { name: 'Thirty', value: 30 },\n    { name: 'Forty', value: 40 },\n    { name: 'Fifty', value: 50 },\n  ];\n\n  const handleAgeChange = (event: SelectChangeEvent<typeof age>) => {\n    const {\n      target: { value },\n    } = event;\n    setAge(typeof value === 'string' ? value.split(',') : value);\n  };\n\n  if (multiple) {\n    return (\n      <FormControl\n        variant={variant}\n        size={size}\n      >\n        <InputLabel id=\"mui-select\">{label}</InputLabel>\n        <MuiSelect\n          multiple\n          labelId=\"mui-select\"\n          id=\"mui-select\"\n          value={age}\n          onChange={handleAgeChange}\n        >\n          {selectValues.map((item) => (\n            <MenuItem\n              key={item.value}\n              value={item.value}\n            >\n              {item.name}\n            </MenuItem>\n          ))}\n        </MuiSelect>\n      </FormControl>\n    );\n  }\n\n  return (\n    <FormControl\n      variant={variant}\n      size={size}\n    >\n      <InputLabel id=\"mui-select\">{label}</InputLabel>\n      <MuiSelect\n        labelId=\"mui-select\"\n        id=\"mui-select\"\n        {...props}\n      >\n        {selectValues.map((item) => (\n          <MenuItem\n            key={item.value}\n            value={item.value}\n          >\n            {item.name}\n          </MenuItem>\n        ))}\n      </MuiSelect>\n    </FormControl>\n  );\n});\n\nexport const Select = Template.bind({});\n\nSelect.parameters = {\n  loki: { skip: true },\n};\n\nSelect.argTypes = {\n  label: {\n    control: {\n      type: 'text',\n    },\n  },\n  disabled: {\n    type: 'boolean',\n  },\n  multiple: {\n    type: 'boolean',\n  },\n  variant: {\n    control: {\n      type: 'select',\n    },\n    options: ['outlined', 'standard'],\n  },\n  size: {\n    control: {\n      type: 'select',\n    },\n    options: ['medium', 'small'],\n  },\n};\n\nSelect.args = {\n  multiple: false,\n  disabled: false,\n  label: 'Label',\n  variant: 'outlined',\n  size: 'medium',\n};\n";
// @ts-ignore
var __LOCATIONS_MAP__ = {
  Select: {
    startLoc: { col: 17, line: 8 },
    endLoc: { col: 2, line: 78 },
    startBody: { col: 17, line: 8 },
    endBody: { col: 2, line: 78 },
  },
};

import type { SelectProps, SelectChangeEvent } from '@mui/material';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from '@mui/material';
import type { ElementType } from 'react';
import { useState } from 'react';

import { withMaterialLink } from '../withMaterialLink';

const Template = withMaterialLink<
  SelectProps & { label?: string },
  ElementType
>(
  'selects',
  'select'
)(({ label, multiple, variant, size, ...props }) => {
  const [age, setAge] = useState<string[]>([]);

  const selectValues = [
    { name: 'Ten', value: 10 },
    { name: 'Twenty', value: 20 },
    { name: 'Thirty', value: 30 },
    { name: 'Forty', value: 40 },
    { name: 'Fifty', value: 50 },
  ];

  const handleAgeChange = (event: SelectChangeEvent<typeof age>) => {
    const {
      target: { value },
    } = event;
    setAge(typeof value === 'string' ? value.split(',') : value);
  };

  if (multiple) {
    return (
      <FormControl variant={variant} size={size}>
        <InputLabel id="mui-select">{label}</InputLabel>
        <MuiSelect
          multiple
          labelId="mui-select"
          id="mui-select"
          value={age}
          onChange={handleAgeChange}
        >
          {selectValues.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.name}
            </MenuItem>
          ))}
        </MuiSelect>
      </FormControl>
    );
  }

  return (
    <FormControl variant={variant} size={size}>
      <InputLabel id="mui-select">{label}</InputLabel>
      <MuiSelect labelId="mui-select" id="mui-select" {...props}>
        {selectValues.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.name}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
});

export const Select = Template.bind({});

Select.parameters = {
  loki: { skip: true },
};

Select.argTypes = {
  label: {
    control: {
      type: 'text',
    },
  },
  disabled: {
    type: 'boolean',
  },
  multiple: {
    type: 'boolean',
  },
  variant: {
    control: {
      type: 'select',
    },
    options: ['outlined', 'standard'],
  },
  size: {
    control: {
      type: 'select',
    },
    options: ['medium', 'small'],
  },
};

Select.args = {
  multiple: false,
  disabled: false,
  label: 'Label',
  variant: 'outlined',
  size: 'medium',
};

Select.parameters = {
  storySource: {
    source:
      "withMaterialLink<SelectProps & { label?: string }, ElementType>(\n  'selects',\n  'select',\n)(({ label, multiple, variant, size, ...props }) => {\n  const [age, setAge] = useState<string[]>([]);\n\n  const selectValues = [\n    { name: 'Ten', value: 10 },\n    { name: 'Twenty', value: 20 },\n    { name: 'Thirty', value: 30 },\n    { name: 'Forty', value: 40 },\n    { name: 'Fifty', value: 50 },\n  ];\n\n  const handleAgeChange = (event: SelectChangeEvent<typeof age>) => {\n    const {\n      target: { value },\n    } = event;\n    setAge(typeof value === 'string' ? value.split(',') : value);\n  };\n\n  if (multiple) {\n    return (\n      <FormControl\n        variant={variant}\n        size={size}\n      >\n        <InputLabel id=\"mui-select\">{label}</InputLabel>\n        <MuiSelect\n          multiple\n          labelId=\"mui-select\"\n          id=\"mui-select\"\n          value={age}\n          onChange={handleAgeChange}\n        >\n          {selectValues.map((item) => (\n            <MenuItem\n              key={item.value}\n              value={item.value}\n            >\n              {item.name}\n            </MenuItem>\n          ))}\n        </MuiSelect>\n      </FormControl>\n    );\n  }\n\n  return (\n    <FormControl\n      variant={variant}\n      size={size}\n    >\n      <InputLabel id=\"mui-select\">{label}</InputLabel>\n      <MuiSelect\n        labelId=\"mui-select\"\n        id=\"mui-select\"\n        {...props}\n      >\n        {selectValues.map((item) => (\n          <MenuItem\n            key={item.value}\n            value={item.value}\n          >\n            {item.name}\n          </MenuItem>\n        ))}\n      </MuiSelect>\n    </FormControl>\n  );\n})",
  },
  ...Select.parameters,
};
