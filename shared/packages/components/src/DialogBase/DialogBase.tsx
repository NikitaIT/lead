import { unstable_composeClasses as composeClasses } from '@mui/base';
import { useThemeProps, Grow } from '@mui/material';
import { ArrowLeftThin, Clear } from '@lead/shared/packages/icons';
import clsx from 'clsx';
import type { MouseEvent } from 'react';
import { forwardRef, useCallback, useMemo } from 'react';

import useAutoclose from '../useAutoclose';
import { capitalize } from '../utils';
import { getDialogBaseUtilityClass } from './dialogBaseClasses';
import type { DialogBaseProps, OwnerState } from './DialogBaseTypes';
import { Size } from '../baseTypes';
import {
  BackButton,
  DialogBaseRoot,
  DialogGrid,
  CloseButton,
} from './components';

export const getDialogBaseSlots = (ownerState: OwnerState) => {
  const { size } = ownerState;

  return {
    root: ['root', `size${capitalize(size)}`],
    backButton: ['backButton'],
    closeButton: ['closeButton'],
    dialogGrid: ['dialogGrid'],
  };
};

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;

  const slots = getDialogBaseSlots(ownerState);

  const composedClasses = composeClasses(
    slots,
    getDialogBaseUtilityClass,
    classes
  );

  return { ...classes, ...composedClasses };
};

export const DialogBase = forwardRef<HTMLDivElement, DialogBaseProps>(
  function DialogBase(inProps, ref) {
    const props = useThemeProps({ props: inProps, name: 'MuiLeadDialogBase' });
    const {
      children,
      open,
      hideCloseButton,
      showBackButton,
      onBack,
      backButton: _,
      className,
      disableTransition,
      size = Size.medium,
      timeoutMs = 2000,
      enableAutoClose,
      ...other
    } = props;
    const { onClose } = other;

    const ownerState: OwnerState = useMemo(
      () => ({
        ...props,
        size,
      }),
      [props, size]
    );

    const classes = useUtilityClasses(ownerState);

    const handleClose = useCallback(
      (event?: MouseEvent<HTMLButtonElement>) => {
        onClose?.(event ?? {}, 'escapeKeyDown');
      },
      [onClose]
    );

    useAutoclose({
      autoClose: enableAutoClose,
      open,
      timeoutMs,
      onClose: handleClose,
    });

    const handleBackClick = useCallback(() => {
      onBack?.();
    }, [onBack]);

    const {
      backButton = (
        <BackButton
          ownerState={ownerState}
          variant="text"
          color="default"
          className={classes.backButton}
          onClick={handleBackClick}
        >
          <ArrowLeftThin color="inherit" />
        </BackButton>
      ),
    } = props;

    return (
      <DialogBaseRoot
        ref={ref}
        closeAfterTransition
        ownerState={ownerState}
        className={clsx(classes.root, className)}
        open={open}
        {...other}
      >
        <Grow in={open}>
          <DialogGrid ownerState={ownerState} className={classes.dialogGrid}>
            {showBackButton ? backButton : null}
            {!hideCloseButton && (
              <CloseButton
                ownerState={ownerState}
                variant="text"
                color="default"
                className={classes.closeButton}
                onClick={handleClose}
              >
                <Clear fontSize="small" color="inherit" />
              </CloseButton>
            )}
            {children}
          </DialogGrid>
        </Grow>
      </DialogBaseRoot>
    );
  }
);

export default DialogBase;
