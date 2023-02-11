/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ =
  "import { useState } from 'react';\n\nimport { DatePicker as MuiDatePicker, TextField } from '../..';\nimport { withMaterialLink } from '../withMaterialLink';\n\nconst Template = withMaterialLink('date-picker')((props) => {\n  const [value, setValue] = useState<Date | null>(new Date(2021, 0, 1));\n\n  return (\n    <MuiDatePicker<Date>\n      value={value}\n      {...props}\n      renderInput={(params) => <TextField {...params} />}\n      onChange={setValue}\n    />\n  );\n});\n\nexport const DatePicker = Template.bind({});\n\nDatePicker.argTypes = {\n  openTo: {\n    control: {\n      type: 'select',\n    },\n    options: ['day', 'month', 'year', undefined],\n  },\n};\n";
// @ts-ignore
var __LOCATIONS_MAP__ = {
  DatePicker: {
    startLoc: { col: 17, line: 6 },
    endLoc: { col: 2, line: 17 },
    startBody: { col: 17, line: 6 },
    endBody: { col: 2, line: 17 },
  },
};

import { useState } from 'react';

import { DatePicker as MuiDatePicker, TextField } from '../..';
import { withMaterialLink } from '../withMaterialLink';

const Template = withMaterialLink('date-picker')((props) => {
  const [value, setValue] = useState<Date | null>(new Date(2021, 0, 1));

  return (
    <MuiDatePicker<Date>
      value={value}
      {...props}
      renderInput={(params) => <TextField {...params} />}
      onChange={setValue}
    />
  );
});

export const DatePicker = Template.bind({});

DatePicker.argTypes = {
  openTo: {
    control: {
      type: 'select',
    },
    options: ['day', 'month', 'year', undefined],
  },
};

DatePicker.parameters = {
  storySource: {
    source:
      "withMaterialLink('date-picker')((props) => {\n  const [value, setValue] = useState<Date | null>(new Date(2021, 0, 1));\n\n  return (\n    <MuiDatePicker<Date>\n      value={value}\n      {...props}\n      renderInput={(params) => <TextField {...params} />}\n      onChange={setValue}\n    />\n  );\n})",
  },
  ...DatePicker.parameters,
};
