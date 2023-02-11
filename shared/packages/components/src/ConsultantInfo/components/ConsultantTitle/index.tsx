import { Typography, CSSInterpolation, styled } from '@mui/material';
import { ConsultantInfoClassKey } from '../../consultantInfoClasses';
import { OwnerState } from '../../ConsultantInfoTypes';

export const ConsultantTitle = styled(Typography, {
  name: 'MuiLeadConsultantInfo',
  slot: 'ConsultantTitle',
  skipSx: true,
  overridesResolver: (
    _: { ownerState: OwnerState },
    styles: Record<ConsultantInfoClassKey, CSSInterpolation>
  ) => [styles.consultantTitle],
})<{ ownerState: OwnerState }>(({ theme, ownerState }) => ({
  gridArea: 'consultant-title',
  alignSelf: 'start',
  ...(ownerState.size === 'large' && {
    fontSize: '2rem',
  }),
  ...(ownerState.hasChild && {
    color: theme.palette.grey[300],
    fontWeight: 'bold',
  }),
}));
