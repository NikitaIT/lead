import type { SnackbarCloseReason } from '@mui/material';
import { Snackbar, Alert, Button } from '@mui/material';
import type { SyntheticEvent } from 'react';
import { useState } from 'react';
import { isDocs } from '@lead/storybook-story';

export const MuiSnackbar = function MuiSnackbar() {
  const [open, setOpen] = useState([!isDocs(), false, false]);

  const handleClick = (index: number) => () => {
    setOpen((currentState) =>
      currentState.map((item, i) => {
        if (i === index) {
          return true;
        }

        return item;
      })
    );
  };

  const handleClose =
    (index: number) =>
    (_: Event | SyntheticEvent<unknown>, reason?: SnackbarCloseReason) => {
      setOpen((currentState) =>
        currentState.map((item, i) => {
          if (i === index) {
            return false;
          }

          return item;
        })
      );
    };

  return (
    <>
      <button type="button" onClick={handleClick(0)}>
        Open snackbar
      </button>
      <button type="button" onClick={handleClick(1)}>
        Open action snackbar
      </button>
      <button type="button" onClick={handleClick(2)}>
        Open error snackbar
      </button>
      <Snackbar
        open={open[0]}
        autoHideDuration={6000}
        message="My Message"
        onClose={handleClose(0)}
      />
      <Snackbar
        open={open[1]}
        autoHideDuration={6000}
        message="My Message"
        action={<Button>Undo</Button>}
        onClose={handleClose(1)}
      />
      <Snackbar open={open[2]} autoHideDuration={6000} onClose={handleClose(2)}>
        <Alert severity="error" sx={{ width: '100%' }} onClose={handleClose(2)}>
          This is a error message!
        </Alert>
      </Snackbar>
    </>
  );
};
