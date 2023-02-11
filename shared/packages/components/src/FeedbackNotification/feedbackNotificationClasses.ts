import generateUtilityClass from '@mui/base/generateUtilityClass';
import generateUtilityClasses from '@mui/base/generateUtilityClasses';

export interface FeedbackNotificationClasses {
  /** Styles applied to the popper element. */
  root: string;
  /** Styles applied to the notification element. */
  notification: string;
  /** Styles applied to the icon element. */
  icon: string;
  /** Styles applied to the message element. */
  message: string;
  /** Pseudo class applied to the notification element if `size="medium"` */
  sizeMedium: string;
  /** Pseudo class applied to the notification element if `size="large"` */
  sizeLarge: string;
  /** Pseudo class applied to the notification element if `color="primary"` */
  colorPrimary: string;
  /** Pseudo class applied to the notification element if `color="secondary"` */
  colorSecondary: string;
  /** Pseudo class applied to the notification element if `color="error"` */
  colorError: string;
  /** Pseudo class applied to the notification element if `color="info"` */
  colorInfo: string;
  /** Pseudo class applied to the notification element if `color="inherit"` */
  colorInherit: string;
  /** Pseudo class applied to the notification element if `color="success"` */
  colorSuccess: string;
  /** Pseudo class applied to the notification element if `color="warning"` */
  colorWarning: string;
  /** Pseudo class applied to the notification element if `color="initial"` */
  colorInitial: string;
}

export type FeedbackNotificationClassKey = keyof FeedbackNotificationClasses;

export function getFeedbackNotificationUtilityClass(slot: string): string {
  return generateUtilityClass('MuiLeadFeedbackNotification', slot);
}

export const feedbackNotificationClasses =
  generateUtilityClasses<FeedbackNotificationClassKey>(
    'MuiLeadFeedbackNotification',
    [
      'root',
      'icon',
      'notification',
      'message',
      'sizeMedium',
      'sizeLarge',
      'colorPrimary',
      'colorSecondary',
      'colorError',
      'colorInfo',
      'colorInherit',
      'colorSuccess',
      'colorWarning',
      'colorInitial',
    ]
  );

export default feedbackNotificationClasses;
