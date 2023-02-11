import { ModalProps } from '@mui/material';
import { Severity, Size } from '../baseTypes';

export type FeedbackNotificationProps = OwnerState &
  ModalProps & {
    icon: JSX.Element;
    timeoutMs: number;
  };
export type OwnerState = {
  color: Severity | 'inherit' | 'initial';
  size: typeof Size.medium | typeof Size.large;
  classes?: Record<string, string>;
};
