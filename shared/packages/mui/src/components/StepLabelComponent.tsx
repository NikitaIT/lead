import { styled } from '@mui/material';
import type { ReactNode } from 'react';

import { colors } from '../theme/constants';

export interface StepLabelComponentProps {
  active: boolean;
  completed: boolean;
  icon: ReactNode;
}

const Root = styled('div')<{
  ownerState: Pick<StepLabelComponentProps, 'active' | 'completed'>;
}>(({ ownerState: { active, completed } }) => ({
  backgroundColor:
    active || completed ? colors.secondary.dark : colors.oriGrey.A200,
  zIndex: 1,
  fontSize: 18,
  fontWeight: 'bold',
  color: colors.primary.contrastText,
  width: 38,
  height: 38,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
}));

export default function StepLabelComponent({
  completed,
  active,
  icon,
}: StepLabelComponentProps) {
  return (
    <Root
      className="MuiLeadStepLabelComponent"
      ownerState={{ completed, active }}
    >
      {icon}
    </Root>
  );
}
