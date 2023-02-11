import { Modal, CSSInterpolation, styled } from '@mui/material';
import { capitalize, rootShouldForwardProp } from '../../../utils';
import { DialogBaseClassKey } from '../../dialogBaseClasses';
import { OwnerState } from '../../DialogBaseTypes';

export const DialogBaseRoot = styled(Modal, {
  name: 'MuiLeadDialogBase',
  slot: 'Root',
  overridesResolver: (
    { ownerState }: { ownerState: OwnerState },
    styles: Record<DialogBaseClassKey, CSSInterpolation>
  ) => [styles.root, styles[`size${capitalize(ownerState.size)}` as const]],
  shouldForwardProp: (prop: PropertyKey) =>
    rootShouldForwardProp(prop) || prop === 'classes',
})<{ ownerState: OwnerState }>({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  outline: 0,
});
