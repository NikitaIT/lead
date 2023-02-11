import { CSSInterpolation, styled } from '@mui/material';
import IconButton from '../../../IconButton';
import { DialogBaseClassKey } from '../../dialogBaseClasses';
import { OwnerState } from '../../DialogBaseTypes';

export const CloseButton = styled(IconButton, {
  name: 'MuiLeadDialogBase',
  slot: 'CloseButton',
  skipSx: true,
  overridesResolver: (
    _: { ownerState: OwnerState },
    styles: Record<DialogBaseClassKey, CSSInterpolation>
  ) => [styles.backButton],
})<{ ownerState: OwnerState }>(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  padding: theme.spacing(1.4),
  margin: theme.spacing(2),
  background: 'rgba(255,255,255,.75)',
}));
