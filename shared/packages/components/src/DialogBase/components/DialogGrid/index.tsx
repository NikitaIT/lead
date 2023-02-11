import { Paper, CSSInterpolation, styled } from '@mui/material';
import { DialogBaseClassKey } from '../../dialogBaseClasses';
import { OwnerState } from '../../DialogBaseTypes';

export const DialogGrid = styled(Paper, {
  name: 'MuiLeadDialogBase',
  slot: 'DialogGrid',
  skipSx: true,
  overridesResolver: (
    _: { ownerState: OwnerState },
    styles: Record<DialogBaseClassKey, CSSInterpolation>
  ) => [styles.dialogGrid],
})<{ ownerState: OwnerState }>(({ theme, ownerState }) => ({
  display: 'grid',
  justifyItems: 'center',
  position: 'relative',
  minWidth: 320,
  maxWidth: '60vw',
  minHeight: 100,
  maxHeight: `calc(100vh - ${theme.spacing(32)})`,
  outline: 0,
  padding: theme.spacing(8, 6, 6, 6),
  ...(ownerState.size === 'small' && {
    padding: 0,
  }),
  overflow: 'hidden',
  [theme.breakpoints.only('xs')]: {
    boxSizing: 'border-box',
    minWidth: '100vw',
    maxWidth: '100vw',
    maxHeight: `calc(100vh - ${theme.spacing(12)})`,
    padding: theme.spacing(8, 3, 3, 3),
    ...(ownerState.size === 'small' && {
      padding: 0,
    }),
    position: 'absolute',
    bottom: 0,
    left: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
}));
