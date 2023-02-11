import { Typography, Button } from '@lead/shared/packages/mui';
import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import { isDocs } from '@lead/storybook-story';

import DialogBase, { DialogBase as BaseComponent } from './DialogBase';
// import mdx from './DialogBase.mdx';

export default {
  title: 'Components/Dialog base',
  parameters: {
    docs: {
      // page: mdx,
    },
    options: {
      showPanel: true,
    },
  },

  component: BaseComponent,
};

function handleChange<T>(setState: Dispatch<SetStateAction<T>>, nextState: T) {
  return () => {
    setState(nextState);
  };
}

export const BasicUsage = function BasicUsage() {
  const [isOpen, setIsOpen] = useState(!isDocs());

  return (
    <>
      <Typography gutterBottom variant="h3">
        Some nice title
      </Typography>
      <Typography gutterBottom variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleChange<boolean>(setIsOpen, true)}
      >
        Open Dialog
      </Button>
      <DialogBase
        disableTransition
        open={isOpen}
        onClose={handleChange<boolean>(setIsOpen, false)}
      >
        <Typography>test</Typography>
      </DialogBase>
    </>
  );
};

export const BasicUsageSmall = function BasicUsageSmall() {
  const [isOpen, setIsOpen] = useState(!isDocs());

  return (
    <>
      <Typography gutterBottom variant="h3">
        Some nice title
      </Typography>
      <Typography gutterBottom variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleChange<boolean>(setIsOpen, true)}
      >
        Open Dialog
      </Button>
      <DialogBase
        disableTransition
        open={isOpen}
        size="small"
        onClose={handleChange<boolean>(setIsOpen, false)}
      >
        <Typography>
          This is &quot;small&quot; DialogBase component. Small just determine
          the size of padding around the content.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </DialogBase>
    </>
  );
};

export const ExemplaryUsage = function ExemplaryUsage() {
  const [isOpen, setIsOpen] = useState(!isDocs());

  return (
    <>
      <button type="button" onClick={handleChange<boolean>(setIsOpen, true)}>
        Open Dialog
      </button>
      <DialogBase
        disableTransition
        open={isOpen}
        onClose={handleChange<boolean>(setIsOpen, false)}
      >
        <Typography>This is basic dialog</Typography>
      </DialogBase>
    </>
  );
};

export const BackButtonExample = function BackButtonExample() {
  const [isOpen, setIsOpen] = useState(!isDocs());

  return (
    <>
      <button type="button" onClick={handleChange<boolean>(setIsOpen, true)}>
        Open Dialog
      </button>
      <DialogBase
        disableTransition
        showBackButton
        open={isOpen}
        onClose={handleChange<boolean>(setIsOpen, false)}
      >
        <Typography>This is basic dialog</Typography>
      </DialogBase>
    </>
  );
};

export const AutoCloseDialog = function AutoCloseDialog() {
  const [isOpen, setIsOpen] = useState(!isDocs());

  return (
    <>
      <button type="button" onClick={handleChange<boolean>(setIsOpen, true)}>
        Open Dialog
      </button>
      <DialogBase
        disableTransition
        enableAutoClose
        open={isOpen}
        onClose={handleChange<boolean>(setIsOpen, false)}
      >
        <Typography>This is basic dialog</Typography>
      </DialogBase>
    </>
  );
};

export const HideCloseButton = function HideCloseButton() {
  const [isOpen, setIsOpen] = useState(!isDocs());

  return (
    <>
      <button type="button" onClick={handleChange<boolean>(setIsOpen, true)}>
        Open Dialog
      </button>
      <DialogBase
        disableTransition
        hideCloseButton
        open={isOpen}
        onClose={handleChange<boolean>(setIsOpen, false)}
      >
        <Typography>This is basic dialog</Typography>
      </DialogBase>
    </>
  );
};
