import { Avatar, CSSInterpolation, styled } from '@mui/material';
import { ConsultantInfoClassKey } from '../../consultantInfoClasses';
import { OwnerState } from '../../ConsultantInfoTypes';

export const ProfilePicture = styled(Avatar, {
  name: 'MuiLeadConsultantInfo',
  slot: 'ProfilePicture',
  overridesResolver: (
    _: { ownerState: OwnerState },
    styles: Record<ConsultantInfoClassKey, CSSInterpolation>
  ) => [styles.profilePicture],
})<{ ownerState: OwnerState }>(({ theme, ownerState }) => ({
  gridArea: 'profile-picture',
  alignSelf: 'start',
  width: 85,
  height: 85,
  backgroundColor: theme.palette.grey[100],
  fontSize: theme.spacing(6),
  fontWeight: 'bold',
  ...(ownerState.size === 'large' && {
    width: 140,
    height: 140,
  }),
}));
