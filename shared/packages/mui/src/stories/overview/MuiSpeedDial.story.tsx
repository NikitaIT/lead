import {
  Box,
  Backdrop,
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
} from '@mui/material';
import { Copy, Send, Printer, Heart, Share } from '@lead/shared/packages/icons';
import { useState } from 'react';
import { isDocs } from '@lead/storybook-story';

const actions = [
  { icon: <Copy />, name: 'Copy', classNameKey: 'primary' },
  { icon: <Send />, name: 'Save', classNameKey: 'secondary' },
  { icon: <Printer />, name: 'Print', classNameKey: 'ternary' },
  { icon: <Share />, name: 'Share', classNameKey: 'primary' },
  { icon: <Heart />, name: 'Like', classNameKey: 'ternary' },
] as const;

export const MuiSpeedDial = function MuiSpeedDial() {
  const [open, setOpen] = useState(!isDocs());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ height: 380, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <Backdrop open={open} />
      <SpeedDial
        direction="down"
        ariaLabel="SpeedDial tooltip example"
        icon={<SpeedDialIcon />}
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            tooltipOpen
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};
