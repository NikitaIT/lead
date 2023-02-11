import { useState } from 'react';

import {
  styled,
  TextField,
  Stack,
  DateTimePicker,
  StaticDateTimePicker,
  MobileDateTimePicker,
  DesktopDateTimePicker,
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

export const MuiDateTimePicker = function MuiDateTimePicker() {
  const [value, setValue] = useState<Date | null>(new Date(2021, 0, 1));

  return (
    <Stack spacing={3}>
      <DateTimePicker<Date>
        renderInput={(props) => <TextField {...props} />}
        label="DateTimePicker"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
      <MobileDateTimePicker
        value={value}
        renderInput={(params) => <TextField {...params} />}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
      <DesktopDateTimePicker
        value={value}
        renderInput={(params) => <TextField {...params} />}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
      <Wrap>
        <StaticDateTimePicker
          displayStaticWrapperAs="desktop"
          openTo="year"
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
