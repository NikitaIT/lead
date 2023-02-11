/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ =
  "import type { ElementType } from 'react';\nimport { useState } from 'react';\n\nimport type { TimePickerProps } from '../..';\nimport { TimePicker as MuiTimePicker, TextField } from '../..';\nimport { withMaterialLink } from '../withMaterialLink';\n\nconst Template = withMaterialLink<\n  Omit<TimePickerProps<Date, Date>, 'onChange' | 'value'>,\n  ElementType\n>('date-time-picker')((props) => {\n  const [value, setValue] = useState<Date | null>(new Date(2021, 0, 1));\n\n  return (\n    <MuiTimePicker<Date>\n      value={value}\n      {...props}\n      renderInput={(params) => <TextField {...params} />}\n      onChange={setValue}\n    />\n  );\n});\n\nexport const TimePicker = Template.bind({});\n\nTimePicker.argTypes = {\n  openTo: {\n    control: {\n      type: 'select',\n    },\n    options: ['hours', 'minutes', 'seconds', undefined],\n  },\n};\n";
// @ts-ignore
var __LOCATIONS_MAP__ = {
  TimePicker: {
    startLoc: { col: 17, line: 8 },
    endLoc: { col: 2, line: 22 },
    startBody: { col: 17, line: 8 },
    endBody: { col: 2, line: 22 },
  },
};

import type { ElementType } from 'react';
import { useState } from 'react';

import type { TimePickerProps } from '../..';
import { TimePicker as MuiTimePicker, TextField } from '../..';
import { withMaterialLink } from '../withMaterialLink';

const Template = withMaterialLink<
  Omit<TimePickerProps<Date, Date>, 'onChange' | 'value'>,
  ElementType
>('date-time-picker')((props) => {
  const [value, setValue] = useState<Date | null>(new Date(2021, 0, 1));

  return (
    <MuiTimePicker<Date>
      value={value}
      {...props}
      renderInput={(params) => <TextField {...params} />}
      onChange={setValue}
    />
  );
});

export const TimePicker = Template.bind({});

TimePicker.argTypes = {
  openTo: {
    control: {
      type: 'select',
    },
    options: ['hours', 'minutes', 'seconds', undefined],
  },
};

TimePicker.parameters = {
  storySource: {
    source:
      "withMaterialLink<\n  Omit<TimePickerProps<Date, Date>, 'onChange' | 'value'>,\n  ElementType\n>('date-time-picker')((props) => {\n  const [value, setValue] = useState<Date | null>(new Date(2021, 0, 1));\n\n  return (\n    <MuiTimePicker<Date>\n      value={value}\n      {...props}\n      renderInput={(params) => <TextField {...params} />}\n      onChange={setValue}\n    />\n  );\n})",
  },
  ...TimePicker.parameters,
};
