import { Button, Tooltip } from '@mui/material';

export const MuiTooltip = function MuiTooltip() {
  return (
    <>
      <Tooltip open title="This is tooltip">
        <Button>Button</Button>
      </Tooltip>
      <Tooltip open placement="top" title="This is tooltip">
        <Button>Button</Button>
      </Tooltip>
      <Tooltip
        open
        placement="right"
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, harum. Vel earum nemo explicabo, nam ex molestias perspiciatis, sequi officiis doloremque quae at. Magnam quisquam reprehenderit assumenda mollitia distinctio saepe."
      >
        <Button>Button</Button>
      </Tooltip>
    </>
  );
};
