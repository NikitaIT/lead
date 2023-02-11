import { Typography, CSSInterpolation, styled } from '@mui/material';
import { ConsultantInfoClassKey } from '../../consultantInfoClasses';
import { OwnerState } from '../../ConsultantInfoTypes';

export const Content = styled(Typography, {
  name: 'MuiLeadConsultantInfo',
  slot: 'Content',
  skipSx: true,
  overridesResolver: (
    _: { ownerState: OwnerState },
    styles: Record<ConsultantInfoClassKey, CSSInterpolation>
  ) => [styles.content],
})<{ ownerState: OwnerState }>(({ theme }) => ({
  gridArea: 'content',
  paddingTop: theme.spacing(2),
  alignSelf: 'start',
}));
