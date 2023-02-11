import { Typography, CSSInterpolation, styled } from '@mui/material';
import { ConsultantInfoClassKey } from '../../consultantInfoClasses';
import { OwnerState } from '../../ConsultantInfoTypes';

export const ConsultantName = styled(Typography, {
  name: 'MuiLeadConsultantInfo',
  slot: 'ConsultantName',
  skipSx: true,
  overridesResolver: (
    _: { ownerState: OwnerState },
    styles: Record<ConsultantInfoClassKey, CSSInterpolation>
  ) => [styles.consultantName],
})<{ ownerState: OwnerState }>(({ theme, ownerState }) => ({
  gridArea: 'consultant-name',
  alignSelf: 'start',
  ...(ownerState.size === 'large' && {
    fontSize: theme.typography.pxToRem(35),
  }),
}));
