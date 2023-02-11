import { Box, Tabs, Tab } from '@mui/material';
import type { Dispatch, SetStateAction } from 'react';
import { useCallback, useState } from 'react';

function renderTabs(count = 4) {
  return Array.from({ length: count }, (_, index) => (
    <Tab key={`${index + 1} tab`} label={`${index} Tab`} />
  ));
}

export const MuiTabs = function MuiTabs() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [third, setThird] = useState(0);

  const handleChange = useCallback(
    (dispatchFunction: Dispatch<SetStateAction<number>>) =>
      (_: unknown, tab: number) =>
        dispatchFunction(tab),
    []
  );

  return (
    <>
      <Box m={2}>
        <Tabs centered value={first} onChange={handleChange(setFirst)}>
          {renderTabs()}
        </Tabs>
      </Box>
      <Box m={2}>
        <Tabs
          value={second}
          variant="scrollable"
          onChange={handleChange(setSecond)}
        >
          {renderTabs(12)}
        </Tabs>
      </Box>
      <Box m={2}>
        <Tabs
          value={third}
          variant="fullWidth"
          onChange={handleChange(setThird)}
        >
          {renderTabs()}
        </Tabs>
      </Box>
    </>
  );
};
