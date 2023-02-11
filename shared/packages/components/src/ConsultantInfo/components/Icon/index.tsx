import { UserFilled } from '@lead/shared/packages/icons';
import { Typography, CSSInterpolation, styled } from '@mui/material';
import { ConsultantInfoClassKey } from '../../consultantInfoClasses';
import { OwnerState } from '../../ConsultantInfoTypes';

export const Icon = styled(UserFilled, {
  name: 'MuiLeadConsultantInfo',
  slot: 'AvatarIcon',
  skipSx: true,
  overridesResolver: (
    _: { ownerState: OwnerState },
    styles: Record<ConsultantInfoClassKey, CSSInterpolation>
  ) => [styles.avatarIcon],
})<{ ownerState: OwnerState }>(({ theme, ownerState }) => ({
  fontSize: theme.typography.pxToRem(40),
  color: theme.palette.grey[300],
  ...(ownerState.size === 'large' && {
    fontSize: theme.typography.pxToRem(75),
  }),
}));
