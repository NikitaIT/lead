import { CSSInterpolation, styled } from '@mui/material';
import { DialogBaseClassKey } from '../../dialogBaseClasses';
import { OwnerState } from '../../DialogBaseTypes';
import IconButton from '../../../IconButton';

export const BackButton = styled(IconButton, {
  name: 'MuiLeadDialogBase',
  slot: 'BackButton',
  skipSx: true,
  overridesResolver: (
    _: { ownerState: OwnerState },
    styles: Record<DialogBaseClassKey, CSSInterpolation>
  ) => [styles.backButton],
})<{ ownerState: OwnerState }>(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  padding: theme.spacing(1),
  margin: theme.spacing(2),
  background: 'rgba(255,255,255,.75)',
}));
