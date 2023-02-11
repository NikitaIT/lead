import { unstable_composeClasses as composeClasses } from '@mui/base';
import { alpha, Modal, styled, useThemeProps } from '@mui/material';
import type { CSSInterpolation } from '@mui/system';
import clsx from 'clsx';
import { forwardRef, useCallback, useMemo } from 'react';
import { Size } from '../baseTypes';

import useAutoclose from '../useAutoclose';
import { capitalize, rootShouldForwardProp } from '../utils';
import type { FeedbackNotificationClassKey } from './feedbackNotificationClasses';
import { getFeedbackNotificationUtilityClass } from './feedbackNotificationClasses';
import type {
  FeedbackNotificationProps,
  OwnerState,
} from './FeedbackNotificationTypes';

export const getFeedbackNotificationSlots = (ownerState: OwnerState) => {
  const { color, size } = ownerState;

  return {
    root: ['root', `size${capitalize(size)}`, `color${capitalize(color)}`],
    notification: ['notification'],
    icon: ['icon'],
    message: ['message'],
  };
};

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;

  const slots = getFeedbackNotificationSlots(ownerState);

  const composedClasses = composeClasses(
    slots,
    getFeedbackNotificationUtilityClass,
    classes
  );

  return { ...classes, ...composedClasses };
};

const FeedbackNotificationRoot = styled(Modal, {
  name: 'MuiLeadFeedbackNotification',
  slot: 'Root',
  overridesResolver: (
    { ownerState }: { ownerState: OwnerState },
    styles: Record<FeedbackNotificationClassKey, CSSInterpolation>
  ) => [
    styles.root,
    styles[`size${capitalize(ownerState.size)}` as const],
    styles[`color${capitalize(ownerState.color)}` as const],
  ],
  shouldForwardProp: (prop: PropertyKey) =>
    rootShouldForwardProp(prop) || prop === 'classes',
})<{ ownerState: OwnerState }>({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  outline: 0,
});

const Notification = styled('div', {
  name: 'MuiLeadFeedbackNotification',
  slot: 'Notification',
  skipSx: true,
  overridesResolver: (
    _: { ownerState: OwnerState },
    styles: Record<FeedbackNotificationClassKey, CSSInterpolation>
  ) => [styles.notification],
})<{ ownerState: OwnerState }>(({ theme, ownerState }) => ({
  display: 'flex',
  backdropFilter: 'blur(2px)',
  outline: 0,
  flexDirection: 'row',
  justifyItems: 'center',
  alignItems: 'flex-start',
  columnGap: theme.spacing(2),
  padding: theme.spacing(3),
  minHeight: 'unset',
  borderRadius: theme.shape.borderRadius,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(6),
  },
  ...(ownerState.size === 'large' && {
    flexDirection: 'column',
    rowGap: theme.spacing(2),
    minWidth: 150,
  }),
  ...(ownerState.color !== 'initial' &&
    ownerState.color !== 'inherit' && {
      backgroundColor: alpha(theme.palette[ownerState.color].main, 0.85),
      color: theme.palette[ownerState.color].contrastText,
    }),
  ...(ownerState.color === 'initial' && {
    backgroundColor: alpha(theme.palette.grey['900'], 0.8),
    color: theme.palette.common.white,
  }),
  ...(ownerState.color === 'inherit' && {
    color: 'inherit',
  }),
}));

const Message = styled('div', {
  name: 'MuiLeadFeedbackNotification',
  slot: 'Message',
  skipSx: true,
  overridesResolver: (
    _: { ownerState: OwnerState },
    styles: Record<FeedbackNotificationClassKey, CSSInterpolation>
  ) => [styles.message],
})<{ ownerState: OwnerState }>(({ theme, ownerState }) => ({
  fontSize: theme.typography.body1.fontSize,
  fontWeight: 'bold',
  alignSelf: 'center',
  order: 2,
  display: 'flex',
  alignItems: 'flex-start',
  maxWidth: 250,
  '&>p': {
    fontSize: 'inherit',
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: 350,
  },
  ...(ownerState.size === 'large' && {
    margin: '0 auto',
    fontSize: theme.typography.h6.fontSize,
    fontWeight: 'normal',
  }),
}));

const IconRoot = styled('div', {
  name: 'MuiLeadFeedbackNotification',
  slot: 'Icon',
  skipSx: true,
  overridesResolver: (
    _: { ownerState: OwnerState },
    styles: Record<FeedbackNotificationClassKey, CSSInterpolation>
  ) => [styles.icon],
})<{ ownerState: OwnerState }>(({ theme, ownerState }) => ({
  fontSize: theme.typography.pxToRem(30),
  lineHeight: 1,
  '&>svg': {
    fontSize: 'inherit',
  },
  ...(ownerState.size === 'large' && {
    margin: '0 auto',
    fontSize: theme.typography.pxToRem(36),
  }),
}));

export const FeedbackNotification = forwardRef<
  HTMLDivElement,
  FeedbackNotificationProps
>(function FeedbackNotification(inProps: FeedbackNotificationProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiLeadFeedbackNotification',
  });

  const {
    open,
    children,
    onClose,
    icon,
    timeoutMs = 2000,
    color = 'initial',
    size = Size.medium,
    className,
    ...other
  } = props;

  const ownerState: OwnerState = useMemo(
    () => ({
      ...props,
      color,
      size,
    }),
    [color, props, size]
  );

  const classes = useUtilityClasses(ownerState);

  const handleClose = useCallback(() => {
    onClose?.({}, 'backdropClick');
  }, [onClose]);

  useAutoclose({
    onClose: handleClose,
    open,
    timeoutMs,
    autoClose: true,
  });

  return (
    <FeedbackNotificationRoot
      ref={ref}
      disableScrollLock
      hideBackdrop
      open={open}
      className={clsx(classes.root, className)}
      ownerState={ownerState}
      {...other}
    >
      <Notification className={classes.notification} ownerState={ownerState}>
        <IconRoot ownerState={ownerState} className={classes.icon}>
          {icon}
        </IconRoot>
        <Message ownerState={ownerState} className={classes.message}>
          {children}
        </Message>
      </Notification>
    </FeedbackNotificationRoot>
  );
});

export default FeedbackNotification;
