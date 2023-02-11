import { useState } from 'react';

import {
  styled,
  TextField,
  Stack,
  DatePicker,
  StaticDatePicker,
  MobileDatePicker,
  DesktopDatePicker,
} from '../..';

const Wrap = styled('span')`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  background: ${({ theme }) => theme.palette.grey[50]};
  gap: 30px;
  padding: 20px;
`;

export const MuiDatePicker = function MuiDatePicker() {
  const [value, setValue] = useState<Date | null>(new Date(2021, 0, 1));

  return (
    <Stack spacing={3}>
      <DatePicker<Date>
        label="Basic example"
        value={value}
        renderInput={(params) => <TextField {...params} />}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
      <MobileDatePicker
        label="For mobile"
        value={value}
        renderInput={(params) => <TextField {...params} />}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
      <DesktopDatePicker
        label="For desktop"
        value={value}
        minDate={new Date('2017-01-01')}
        renderInput={(params) => <TextField {...params} />}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
      <Wrap>
        <StaticDatePicker<Date>
          displayStaticWrapperAs="desktop"
          value={value}
          renderInput={(params) => <TextField {...params} />}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
        <StaticDatePicker<Date>
          displayStaticWrapperAs="desktop"
          openTo="year"
          value={value}
          renderInput={(params) => <TextField {...params} />}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
        <StaticDatePicker
          orientation="landscape"
          openTo="day"
          value={value}
          renderInput={(params) => <TextField {...params} />}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
        <StaticDatePicker
          openTo="month"
          value={value}
          renderInput={(params) => <TextField {...params} />}
          views={['day', 'month', 'year']}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
      </Wrap>
    </Stack>
  );
};
