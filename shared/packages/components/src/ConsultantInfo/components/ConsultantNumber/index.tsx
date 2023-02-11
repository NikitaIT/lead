import { Typography, CSSInterpolation, styled } from '@mui/material';
import { ConsultantInfoClassKey } from '../../consultantInfoClasses';
import { OwnerState } from '../../ConsultantInfoTypes';

export const ConsultantNumber = styled(Typography, {
  name: 'MuiLeadConsultantInfo',
  slot: 'ConsultantNumber',
  skipSx: true,
  overridesResolver: (
    _: { ownerState: OwnerState },
    styles: Record<ConsultantInfoClassKey, CSSInterpolation>
  ) => [styles.consultantNumber],
})<{ ownerState: OwnerState }>(({ theme }) => ({
  gridArea: 'consultant-number',
  color: theme.palette.text.disabled,
  alignSelf: 'start',
}));
