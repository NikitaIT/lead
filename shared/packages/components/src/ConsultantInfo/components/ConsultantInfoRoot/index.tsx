import { CSSInterpolation, styled } from '@mui/material';
import { capitalize } from '../../../utils/capitalize';
import { ConsultantInfoClassKey } from '../../consultantInfoClasses';
import { OwnerState } from '../../ConsultantInfoTypes';

export const ConsultantInfoRoot = styled('div', {
  name: 'MuiLeadConsultantInfo',
  slot: 'Root',
  overridesResolver: (
    { ownerState }: { ownerState: OwnerState },
    styles: Record<ConsultantInfoClassKey, CSSInterpolation>
  ) => [styles.root, styles[`size${capitalize(ownerState.size)}` as const]],
})<{ ownerState: OwnerState }>(({ theme, ownerState }) => ({
  display: 'grid',
  alignItems: 'center',
  gridTemplateColumns: 'auto auto 1fr',
  gridTemplateRows: 'auto auto auto auto',
  gap: theme.spacing(1, 4),
  gridTemplateAreas: `
        'profile-picture consultant-name    consultant-name'
        'profile-picture consultant-title   consultant-title'
        'profile-picture consultant-number  consultant-number'
        'profile-picture content            content'
        `,
  ...(ownerState.hasChild && {
    gridTemplateAreas: `
        'profile-picture consultant-name    consultant-name'
        'profile-picture consultant-title   consultant-title'
        'profile-picture content            content'
        `,
  }),
}));
