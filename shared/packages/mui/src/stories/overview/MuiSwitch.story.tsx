import { Switch } from '@mui/material';

export const MuiSwitch = function MuiSwitch() {
  return (
    <>
      <Switch />
      <Switch checked />
      <Switch color="primary" />
      <Switch checked color="primary" />
      <Switch color="secondary" />
      <Switch checked color="secondary" />
    </>
  );
};
