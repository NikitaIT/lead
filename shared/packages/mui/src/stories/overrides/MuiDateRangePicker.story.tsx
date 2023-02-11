/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ =
  "import type { ElementType } from 'react';\nimport { useState } from 'react';\n\nimport { TextField, DateRangePicker as MuiDateRangePicker } from '../..';\nimport type { DateRangePickerProps } from '../..';\nimport { withMaterialLink } from '../withMaterialLink';\n\nconst Template = withMaterialLink<\n  Omit<DateRangePickerProps<Date, Date>, 'onChange' | 'value'>,\n  ElementType\n>('date-range-picker')((props) => {\n  const [value, setValue] = useState<[Date | null, Date | null]>([\n    new Date(2021, 0, 1),\n    new Date(2021, 1, 1),\n  ]);\n\n  return (\n    <MuiDateRangePicker<Date>\n      value={value}\n      {...props}\n      renderInput={(params) => <TextField {...params} />}\n      onChange={setValue}\n    />\n  );\n});\n\nexport const DateRangePicker = Template.bind({});\n\nDateRangePicker.argTypes = {};\n";
// @ts-ignore
var __LOCATIONS_MAP__ = {
  DateRangePicker: {
    startLoc: { col: 17, line: 8 },
    endLoc: { col: 2, line: 25 },
    startBody: { col: 17, line: 8 },
    endBody: { col: 2, line: 25 },
  },
};

import type { ElementType } from 'react';
import { useState } from 'react';

import { TextField, DateRangePicker as MuiDateRangePicker } from '../..';
import type { DateRangePickerProps } from '../..';
import { withMaterialLink } from '../withMaterialLink';

const Template = withMaterialLink<
  Omit<DateRangePickerProps<Date, Date>, 'onChange' | 'value'>,
  ElementType
>('date-range-picker')((props) => {
  const [value, setValue] = useState<[Date | null, Date | null]>([
    new Date(2021, 0, 1),
    new Date(2021, 1, 1),
  ]);

  return (
    <MuiDateRangePicker<Date>
      value={value}
      {...props}
      renderInput={(params) => <TextField {...params} />}
      onChange={setValue}
    />
  );
});

export const DateRangePicker = Template.bind({});

DateRangePicker.argTypes = {};

DateRangePicker.parameters = {
  storySource: {
    source:
      "withMaterialLink<\n  Omit<DateRangePickerProps<Date, Date>, 'onChange' | 'value'>,\n  ElementType\n>('date-range-picker')((props) => {\n  const [value, setValue] = useState<[Date | null, Date | null]>([\n    new Date(2021, 0, 1),\n    new Date(2021, 1, 1),\n  ]);\n\n  return (\n    <MuiDateRangePicker<Date>\n      value={value}\n      {...props}\n      renderInput={(params) => <TextField {...params} />}\n      onChange={setValue}\n    />\n  );\n})",
  },
  ...DateRangePicker.parameters,
};
