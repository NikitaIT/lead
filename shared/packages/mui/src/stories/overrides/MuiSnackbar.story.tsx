import { isDocs } from '@lead/storybook-story';

import type { SnackbarProps } from '@mui/material';
import { Snackbar as MuiSnackbar, Alert, Button } from '@mui/material';
import type { ElementType } from 'react';
import { useState } from 'react';

import { withMaterialLink } from '../withMaterialLink';

const Template = withMaterialLink<SnackbarProps, ElementType>(
  'snackbars',
  'snackbar'
)(({ children, message, action, ...props }) => {
  const [open, setOpen] = useState(!isDocs());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button type="button" onClick={handleOpen}>
        Open snackbar
      </button>
      <MuiSnackbar
        open={open}
        message={children ? undefined : message}
        action={action ? <Button size="small">Undo</Button> : undefined}
        onClose={handleClose}
        {...props}
      >
        {children ? (
          <Alert key="alert" severity="success" sx={{ width: '100%' }}>
            {message || 'This is a success message!'}
          </Alert>
        ) : undefined}
      </MuiSnackbar>
    </>
  );
});

export const Snackbar = Template.bind({});

Snackbar.argTypes = {
  children: {
    control: {
      type: 'select',
    },
    options: [undefined, true],
  },
  message: {
    control: {
      type: 'text',
    },
  },
  action: {
    type: 'boolean',
  },
};

Snackbar.args = {
  action: false,
  message: 'Snackbar',
};
