import { styled } from '@mui/material';
import { Clear } from '@lead/shared/packages/icons';

import { colors } from '../theme/constants';

const Icon = styled(Clear)({
  fontSize: 20,
  color: colors.defaultColors.main,
  margin: '0 -2px 0 -2px',
  cursor: 'pointer',
  '&:hover': {
    color: colors.defaultColors.light,
  },
});

export default function ChipDeleteIcon() {
  return <Icon className="MuiLeadChipDeleteButton" />;
}
