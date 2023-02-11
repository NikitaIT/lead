import { unstable_composeClasses as composeClasses } from '@mui/base';
import { styled, useThemeProps, Typography } from '@mui/material';
import type { CSSInterpolation } from '@mui/system';
import {
  CheckCircle,
  InfoCircle,
  ErrorCircle,
  HelpCircle,
} from '@lead/shared/packages/icons';
import clsx from 'clsx';
import { forwardRef, useMemo } from 'react';

import DialogBase from '../DialogBase';
import dialogBaseClasses from '../DialogBase/dialogBaseClasses';
import { capitalize, rootShouldForwardProp } from '../utils';
import { getFeedbackDialogUtilityClass } from './feedbackDialogClasses';
import type {
  FeedbackDialogClassKey,
  FeedbackDialogProps,
  OwnerState,
} from './FeedbackDialogTypes';
import { Severity } from '../baseTypes';

export const getFeedbackDialogSlots = (ownerState: OwnerState) => {
  const { color, severity } = ownerState;

  return {
    root: ['root', `severity${capitalize(color || severity)}`],
    banner: ['banner'],
    content: ['content'],
    actions: ['actions'],
    header: ['header'],
    text: ['text'],
  };
};

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;

  const slots = getFeedbackDialogSlots(ownerState);

  const composedClasses = composeClasses(
    slots,
    getFeedbackDialogUtilityClass,
    classes
  );

  return { ...classes, ...composedClasses };
};

const DialogRoot = styled(DialogBase, {
  name: 'MuiLeadFeedbackDialog',
  slot: 'Root',
  overridesResolver: (
    { ownerState }: { ownerState: OwnerState },
    styles: Record<FeedbackDialogClassKey, CSSInterpolation>
  ) => [
    styles.root,
    styles[
      `severity${capitalize(ownerState.color || ownerState.severity)}` as const
    ],
  ],
  shouldForwardProp: (prop: PropertyKey) =>
    rootShouldForwardProp(prop) || prop === 'classes',
})<{ ownerState: OwnerState }>(({ theme }) => ({
  [`& .${dialogBaseClasses.dialogGrid}`]: {
    padding: 0,
    gridTemplateAreas: `
        'banner'
        'content'`,
    justifyItems: 'stretch',
    gridTemplateRows: '100px auto',
    gridTemplateColumns: 'auto',
    overflow: 'hidden',
    [theme.breakpoints.up('sm')]: {
      gridTemplateRows: '115px auto',
    },
  },
}));

const Banner = styled('div', {
  name: 'MuiLeadFeedbackDialog',
  slot: 'Banner',
  skipSx: true,
  overridesResolver: (
    _: { ownerState: OwnerState },
    styles: Record<FeedbackDialogClassKey, CSSInterpolation>
  ) => [styles.banner],
})<{ ownerState: OwnerState }>(({ theme, ownerState }) => ({
  justifySelf: 'stretch',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 80,
  gridArea: 'banner',
  color:
    theme.palette[`${ownerState.color || ownerState.severity}` as const].main,
}));

const Content = styled('div', {
  name: 'MuiLeadFeedbackDialog',
  slot: 'Content',
  skipSx: true,
  overridesResolver: (
    _: { ownerState: OwnerState },
    styles: Record<FeedbackDialogClassKey, CSSInterpolation>
  ) => [styles.content],
})<{ ownerState: OwnerState }>(({ theme }) => ({
  display: 'grid',
  gridArea: 'content',
  padding: theme.spacing(0, 3, 6, 3),
  rowGap: theme.spacing(2),
  justifyItems: 'center',
  gridTemplateAreas: `
        'header'
        'content'
        'actions'
      `,
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(0, 6, 6, 6),
  },
}));

const Header = styled(Typography, {
  name: 'MuiLeadFeedbackDialog',
  slot: 'Header',
  skipSx: true,
  overridesResolver: (
    _: { ownerState: OwnerState },
    styles: Record<FeedbackDialogClassKey, CSSInterpolation>
  ) => [styles.header],
})<{ ownerState: OwnerState }>({
  gridArea: 'header',
  textAlign: 'center',
});

const Text = styled(Typography, {
  name: 'MuiLeadFeedbackDialog',
  slot: 'Text',
  skipSx: true,
  overridesResolver: (
    _: { ownerState: OwnerState },
    styles: Record<FeedbackDialogClassKey, CSSInterpolation>
  ) => [styles.text],
})<{ ownerState: OwnerState }>({
  gridArea: 'content',
  textAlign: 'center',
});

const Actions = styled('div', {
  name: 'MuiLeadFeedbackDialog',
  slot: 'Actions',
  skipSx: true,
  overridesResolver: (
    _: { ownerState: OwnerState },
    styles: Record<FeedbackDialogClassKey, CSSInterpolation>
  ) => [styles.actions],
})<{ ownerState: OwnerState }>(({ theme }) => ({
  gridArea: 'actions',
  display: 'grid',
  justifySelf: 'stretch',
  rowGap: theme.spacing(3),
  marginTop: theme.spacing(6),
}));

const defaultIconMapping: FeedbackDialogProps['iconMapping'] = {
  success: <CheckCircle fontSize="inherit" color="inherit" />,
  error: <ErrorCircle fontSize="inherit" color="inherit" />,
  info: <InfoCircle fontSize="inherit" color="inherit" />,
  warning: <HelpCircle fontSize="inherit" color="inherit" />,
};

export const FeedbackDialog = forwardRef<HTMLDivElement, FeedbackDialogProps>(
  function FeedbackDialog(inProps: FeedbackDialogProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'MuiLeadFeedbackDialog',
    });

    const {
      header,
      children,
      actions,
      color,
      severity = Severity.info,
      icon,
      open,
      className,
      iconMapping = defaultIconMapping,
      ...other
    } = props;

    const ownerState = {
      ...props,
      color,
      severity,
    };

    const classes = useUtilityClasses(ownerState);

    const internalIcon = useMemo(
      () => icon ?? iconMapping[severity],
      [icon, severity, iconMapping]
    );

    return (
      <DialogRoot
        ref={ref}
        ownerState={ownerState}
        className={clsx(classes.root, className)}
        open={open}
        {...other}
      >
        <Banner ownerState={ownerState} className={classes.banner}>
          {internalIcon}
        </Banner>
        <Content ownerState={ownerState} className={classes.content}>
          {header ? (
            <Header
              ownerState={ownerState}
              variant="h5"
              className={classes.header}
            >
              {header}
            </Header>
          ) : null}
          {children ? (
            <Text ownerState={ownerState} as="div" className={classes.text}>
              {children}
            </Text>
          ) : null}
          {actions ? (
            <Actions ownerState={ownerState} className={classes.actions}>
              {actions}
            </Actions>
          ) : null}
        </Content>
      </DialogRoot>
    );
  }
);

export default FeedbackDialog;
