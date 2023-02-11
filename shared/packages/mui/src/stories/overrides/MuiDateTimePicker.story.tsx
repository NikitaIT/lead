/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ =
  "import type { ElementType } from 'react';\nimport { useState } from 'react';\n\nimport type { DateTimePickerProps } from '../..';\nimport { DateTimePicker as MuiDateTimePicker, TextField } from '../..';\nimport { withMaterialLink } from '../withMaterialLink';\n\nconst Template = withMaterialLink<\n  Omit<DateTimePickerProps<Date, Date>, 'onChange' | 'value'>,\n  ElementType\n>('date-time-picker')((props) => {\n  const [value, setValue] = useState<Date | null>(new Date(2021, 0, 1));\n\n  return (\n    <MuiDateTimePicker<Date>\n      value={value}\n      {...props}\n      renderInput={(params) => <TextField {...params} />}\n      onChange={setValue}\n    />\n  );\n});\n\nexport const DateTimePicker = Template.bind({});\n\nDateTimePicker.argTypes = {\n  openTo: {\n    control: {\n      type: 'select',\n    },\n    options: ['day', 'month', 'hours', 'minutes', 'year', undefined],\n  },\n};\n";
// @ts-ignore
var __LOCATIONS_MAP__ = {
  DateTimePicker: {
    startLoc: { col: 17, line: 8 },
    endLoc: { col: 2, line: 22 },
    startBody: { col: 17, line: 8 },
    endBody: { col: 2, line: 22 },
  },
};

import type { ElementType } from 'react';
import { useState } from 'react';

import type { DateTimePickerProps } from '../..';
import { DateTimePicker as MuiDateTimePicker, TextField } from '../..';
import { withMaterialLink } from '../withMaterialLink';

const Template = withMaterialLink<
  Omit<DateTimePickerProps<Date, Date>, 'onChange' | 'value'>,
  ElementType
>('date-time-picker')((props) => {
  const [value, setValue] = useState<Date | null>(new Date(2021, 0, 1));

  return (
    <MuiDateTimePicker<Date>
      value={value}
      {...props}
      renderInput={(params) => <TextField {...params} />}
      onChange={setValue}
    />
  );
});

export const DateTimePicker = Template.bind({});

DateTimePicker.argTypes = {
  openTo: {
    control: {
      type: 'select',
    },
    options: ['day', 'month', 'hours', 'minutes', 'year', undefined],
  },
};

DateTimePicker.parameters = {
  storySource: {
    source:
      "withMaterialLink<\n  Omit<DateTimePickerProps<Date, Date>, 'onChange' | 'value'>,\n  ElementType\n>('date-time-picker')((props) => {\n  const [value, setValue] = useState<Date | null>(new Date(2021, 0, 1));\n\n  return (\n    <MuiDateTimePicker<Date>\n      value={value}\n      {...props}\n      renderInput={(params) => <TextField {...params} />}\n      onChange={setValue}\n    />\n  );\n})",
  },
  ...DateTimePicker.parameters,
};
