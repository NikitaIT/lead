import generateUtilityClass from '@mui/base/generateUtilityClass';
import generateUtilityClasses from '@mui/base/generateUtilityClasses';

export interface FeedbackDialogClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the banner element. */
  banner: string;
  /** Styles applied to the content element. */
  content: string;
  /** Styles applied to the text element. */
  text: string;
  /** Styles applied to the header element. */
  header: string;
  /** Styles applied to the message element. */
  message: string;
  /** Styles applied to the actions element. */
  actions: string;
  /** Styles applied to the root element if `severity="error"` or `color="error"`. */
  severityError: string;
  /** Styles applied to the root element if `severity="info"` or `color="info"`. */
  severityInfo: string;
  /** Styles applied to the root element if `severity="success"` or `color="success"`. */
  severitySuccess: string;
  /** Styles applied to the root element if `severity="warning"` or `color="warning"`. */
  severityWarning: string;
}

export function getFeedbackDialogUtilityClass(slot: string): string {
  return generateUtilityClass('MuiLeadFeedbackDialog', slot);
}

export const feedbackDialogClasses = generateUtilityClasses<
  keyof FeedbackDialogClasses
>('MuiLeadFeedbackDialog', [
  'root',
  'banner',
  'content',
  'header',
  'text',
  'message',
  'actions',
  'severityError',
  'severityInfo',
  'severitySuccess',
  'severityWarning',
]);

export default feedbackDialogClasses;
