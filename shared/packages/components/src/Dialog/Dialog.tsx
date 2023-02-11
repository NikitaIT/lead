import { unstable_composeClasses as composeClasses } from '@mui/base';
import {
  styled,
  useThemeProps,
  Typography,
  ScopedCssBaseline,
} from '@mui/material';
import type { CSSInterpolation } from '@mui/system';
import clsx from 'clsx';
import { forwardRef, useMemo } from 'react';

import DialogBase from '../DialogBase';
import dialogBaseClasses from '../DialogBase/dialogBaseClasses';
import { rootShouldForwardProp } from '../utils';
import type { DialogClasses } from './dialogClasses';
import dialogClasses, { getDialogUtilityClass } from './dialogClasses';
import type { DialogProps, OwnerState } from './DialogTypes';

export const getDialogSlots = (_?: OwnerState) => ({
  root: ['root'],
  content: ['content'],
  header: ['header'],
});

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;

  const slots = getDialogSlots(ownerState);

  const composedClasses = composeClasses(slots, getDialogUtilityClass, classes);

  return { ...classes, ...composedClasses };
};

const DialogRoot = styled(DialogBase, {
  name: 'MuiLeadDialog',
  slot: 'Root',
  overridesResolver: (
    _: { ownerState: OwnerState },
    styles: Record<keyof DialogClasses, CSSInterpolation>
  ) => [styles.root],
  shouldForwardProp: (prop: PropertyKey) =>
    rootShouldForwardProp(prop) || prop === 'classes',
})<{ ownerState: OwnerState }>(({ theme }) => ({
  [`& .${dialogBaseClasses.dialogGrid}`]: {
    gridTemplateAreas: `
    ". header ."
    "content content content"
  `,
    gridTemplateColumns: '1fr auto 1fr',
    gridTemplateRows: 'auto 1fr',
    justifyItems: 'stretch',
  },
  [`&.${dialogBaseClasses.sizeSmall} .${dialogClasses.header}`]: {
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
    paddingTop: theme.spacing(6),
    [theme.breakpoints.only('xs')]: {
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8),
      paddingTop: theme.spacing(3),
      marginTop: 0,
    },
  },
}));

const Header = styled('div', {
  name: 'MuiLeadDialog',
  slot: 'Header',
  skipSx: true,
  overridesResolver: (
    _: { ownerState: OwnerState },
    styles: Record<keyof DialogClasses, CSSInterpolation>
  ) => [styles.header],
})<{ ownerState: OwnerState }>(({ theme }) => ({
  gridArea: 'header',
  [theme.breakpoints.only('xs')]: {
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    marginTop: theme.spacing(-5),
  },
}));

const Content = styled(ScopedCssBaseline, {
  name: 'MuiLeadDialog',
  slot: 'Content',
  skipSx: true,
  overridesResolver: (
    _: { ownerState: OwnerState },
    styles: Record<keyof DialogClasses, CSSInterpolation>
  ) => [styles.content],
})<{ ownerState: OwnerState }>(({ theme }) => ({
  gridArea: 'content',
  overflowY: 'auto',
  height: '100%',
  background: 'transparent',
}));

export const Dialog = forwardRef<HTMLDivElement, DialogProps>(function Dialog(
  inProps: DialogProps,
  ref
) {
  const props = useThemeProps({ props: inProps, name: 'MuiLeadDialog' });
  const {
    header,
    children = null,
    open,
    className,
    ...dialogBaseProps
  } = props;
  const classes = useUtilityClasses(props);
  const ownerState = { ...props };

  const headerComponent = useMemo(() => {
    if (typeof header === 'string') {
      return (
        <Typography gutterBottom variant="h4" align="center">
          {header}
        </Typography>
      );
    }

    return header;
  }, [header]);

  return (
    <DialogRoot
      ref={ref}
      open={open}
      className={clsx(classes.root, className)}
      ownerState={ownerState}
      {...dialogBaseProps}
      classes={classes}
    >
      {header ? (
        <Header ownerState={ownerState} className={classes.header}>
          {headerComponent}
        </Header>
      ) : null}
      {children ? (
        <Content ownerState={ownerState} className={classes.content}>
          {children}
        </Content>
      ) : null}
    </DialogRoot>
  );
});

export default Dialog;
