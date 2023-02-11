import { Severity } from '../baseTypes';
import { DialogProps } from '../Dialog/DialogTypes';
import { FeedbackDialogClasses } from './feedbackDialogClasses';

export type FeedbackDialogClassKey = keyof FeedbackDialogClasses;
export type FeedbackDialogProps = DialogProps &
  OwnerState &
  FeedbackDialogClasses & {
    iconMapping: Record<Severity, JSX.Element>;
    icon: JSX.Element;
  };
export type OwnerState = {
  color: Severity;
  severity: Severity;
  classes?: Record<string, string>;
};
