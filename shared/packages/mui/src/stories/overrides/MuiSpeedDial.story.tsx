/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ =
  "import type { SpeedDialProps } from '@mui/material';\nimport {\n  Button,\n  Box,\n  Backdrop,\n  SpeedDial as MuiSpeedDial,\n  SpeedDialIcon,\n  SpeedDialAction,\n} from '@mui/material';\nimport { Copy, Send, Printer, Heart, Share, PenFilled } from '@lead/shared/packages/icons';\nimport type { ElementType } from 'react';\nimport { useState } from 'react';\n\nimport { withMaterialLink } from '../withMaterialLink';\n\nconst actions = [\n  { icon: <Copy />, name: 'Copy', classNameKey: 'primary' },\n  { icon: <Send />, name: 'Save', classNameKey: 'secondary' },\n  { icon: <Printer />, name: 'Print', classNameKey: 'ternary' },\n  { icon: <Share />, name: 'Share', classNameKey: 'primary' },\n  { icon: <Heart />, name: 'Like', classNameKey: 'ternary' },\n] as const;\n\nconst Template = withMaterialLink<SpeedDialProps, ElementType>('speed-dial')((props) => {\n  const [open, setOpen] = useState(false);\n  const [isForceOpen, setForceOpen] = useState(false);\n\n  const handleOpen = () => {\n    setOpen(true);\n  };\n\n  const handleClose = () => {\n    setOpen(false);\n  };\n\n  const handleForceOpen = () => {\n    setForceOpen((prevOpen) => !prevOpen);\n  };\n\n  return (\n    <Box\n      sx={{\n        height: 380,\n        transform: 'translateZ(0px)',\n        flexGrow: 1,\n      }}\n    >\n      <Button onClick={handleForceOpen}>Toggle force open</Button>\n      <Backdrop open={open || isForceOpen} />\n      <MuiSpeedDial\n        {...props}\n        ariaLabel=\"SpeedDial tooltip example\"\n        icon={<SpeedDialIcon openIcon={<PenFilled />} />}\n        open={open || isForceOpen}\n        onClose={handleClose}\n        onOpen={handleOpen}\n      >\n        {actions.map((action) => (\n          <SpeedDialAction\n            key={action.name}\n            tooltipOpen\n            icon={action.icon}\n            tooltipTitle={action.name}\n            onClick={handleClose}\n          />\n        ))}\n      </MuiSpeedDial>\n    </Box>\n  );\n});\n\nexport const SpeedDial = Template.bind({});\n\nSpeedDial.argTypes = {\n  direction: {\n    control: {\n      type: 'select',\n    },\n    options: ['down', 'left', 'right', 'up'],\n  },\n};\n";
// @ts-ignore
var __LOCATIONS_MAP__ = {
  SpeedDial: {
    startLoc: { col: 17, line: 24 },
    endLoc: { col: 2, line: 70 },
    startBody: { col: 17, line: 24 },
    endBody: { col: 2, line: 70 },
  },
};

import type { SpeedDialProps } from '@mui/material';
import {
  Button,
  Box,
  Backdrop,
  SpeedDial as MuiSpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
} from '@mui/material';
import {
  Copy,
  Send,
  Printer,
  Heart,
  Share,
  PenFilled,
} from '@lead/shared/packages/icons';
import type { ElementType } from 'react';
import { useState } from 'react';

import { withMaterialLink } from '../withMaterialLink';

const actions = [
  { icon: <Copy />, name: 'Copy', classNameKey: 'primary' },
  { icon: <Send />, name: 'Save', classNameKey: 'secondary' },
  { icon: <Printer />, name: 'Print', classNameKey: 'ternary' },
  { icon: <Share />, name: 'Share', classNameKey: 'primary' },
  { icon: <Heart />, name: 'Like', classNameKey: 'ternary' },
] as const;

const Template = withMaterialLink<SpeedDialProps, ElementType>('speed-dial')(
  (props) => {
    const [open, setOpen] = useState(false);
    const [isForceOpen, setForceOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const handleForceOpen = () => {
      setForceOpen((prevOpen) => !prevOpen);
    };

    return (
      <Box
        sx={{
          height: 380,
          transform: 'translateZ(0px)',
          flexGrow: 1,
        }}
      >
        <Button onClick={handleForceOpen}>Toggle force open</Button>
        <Backdrop open={open || isForceOpen} />
        <MuiSpeedDial
          {...props}
          ariaLabel="SpeedDial tooltip example"
          icon={<SpeedDialIcon openIcon={<PenFilled />} />}
          open={open || isForceOpen}
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
        </MuiSpeedDial>
      </Box>
    );
  }
);

export const SpeedDial = Template.bind({});

SpeedDial.argTypes = {
  direction: {
    control: {
      type: 'select',
    },
    options: ['down', 'left', 'right', 'up'],
  },
};

SpeedDial.parameters = {
  storySource: {
    source:
      "withMaterialLink<SpeedDialProps, ElementType>('speed-dial')((props) => {\n  const [open, setOpen] = useState(false);\n  const [isForceOpen, setForceOpen] = useState(false);\n\n  const handleOpen = () => {\n    setOpen(true);\n  };\n\n  const handleClose = () => {\n    setOpen(false);\n  };\n\n  const handleForceOpen = () => {\n    setForceOpen((prevOpen) => !prevOpen);\n  };\n\n  return (\n    <Box\n      sx={{\n        height: 380,\n        transform: 'translateZ(0px)',\n        flexGrow: 1,\n      }}\n    >\n      <Button onClick={handleForceOpen}>Toggle force open</Button>\n      <Backdrop open={open || isForceOpen} />\n      <MuiSpeedDial\n        {...props}\n        ariaLabel=\"SpeedDial tooltip example\"\n        icon={<SpeedDialIcon openIcon={<PenFilled />} />}\n        open={open || isForceOpen}\n        onClose={handleClose}\n        onOpen={handleOpen}\n      >\n        {actions.map((action) => (\n          <SpeedDialAction\n            key={action.name}\n            tooltipOpen\n            icon={action.icon}\n            tooltipTitle={action.name}\n            onClick={handleClose}\n          />\n        ))}\n      </MuiSpeedDial>\n    </Box>\n  );\n})",
  },
  ...SpeedDial.parameters,
};
