import { useState } from 'react';

import {
  TimePicker,
  StaticTimePicker,
  DesktopTimePicker,
  MobileTimePicker,
  TextField,
  styled,
  Stack,
} from '../..';

const Wrap = styled('span')`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  background: ${({ theme }) => theme.palette.grey[50]};
  gap: 30px;
  padding: 20px;
`;

export const MuiTimePicker = function MuiTimePicker() {
  const [value, setValue] = useState<Date | null>(new Date(2021, 0, 1));

  return (
    <Stack spacing={3}>
      <TimePicker<Date>
        label="Basic example"
        value={value}
        renderInput={(params) => <TextField {...params} />}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
      <MobileTimePicker
        label="For mobile"
        value={value}
        renderInput={(params) => <TextField {...params} />}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
      <DesktopTimePicker
        label="For desktop"
        value={value}
        renderInput={(params) => <TextField {...params} />}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
      <Wrap>
        <StaticTimePicker
          displayStaticWrapperAs="mobile"
          value={value}
          renderInput={(params) => <TextField {...params} />}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
        <StaticTimePicker
          ampm
          orientation="landscape"
          openTo="minutes"
          value={value}
          renderInput={(params) => <TextField {...params} />}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
      </Wrap>
    </Stack>
  );
};
