import { useState } from 'react';

import {
  TextField,
  styled,
  Box,
  Stack,
  DateRangePicker,
  StaticDateRangePicker,
  MobileDateRangePicker,
  DesktopDateRangePicker,
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
export const MuiDateRangePicker = function MuiDateRangePicker() {
  const [value, setValue] = useState<[Date | null, Date | null]>([
    new Date(2021, 0, 1),
    new Date(2021, 1, 1),
  ]);

  return (
    <Stack spacing={3}>
      <DateRangePicker
        startText="Check-in"
        endText="Check-out"
        value={value}
        renderInput={(startProps, endProps) => (
          <>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </>
        )}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
      <MobileDateRangePicker
        startText="Mobile start"
        value={value}
        renderInput={(startProps, endProps) => (
          <>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </>
        )}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
      <DesktopDateRangePicker
        startText="Desktop start"
        value={value}
        renderInput={(startProps, endProps) => (
          <>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </>
        )}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
      <Wrap>
        <StaticDateRangePicker
          displayStaticWrapperAs="desktop"
          value={value}
          renderInput={(startProps, endProps) => (
            <>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}> to </Box>
              <TextField {...endProps} />
            </>
          )}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
      </Wrap>
    </Stack>
  );
};
