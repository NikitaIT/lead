import generateUtilityClass from '@mui/base/generateUtilityClass';
import generateUtilityClasses from '@mui/base/generateUtilityClasses';

export interface ConsultantInfoClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the consultant title element. */
  consultantTitle: string;
  /** Styles applied to the profile picture element. */
  profilePicture: string;
  /** Styles applied to the consultant name element. */
  consultantName: string;
  /** Styles applied to the consultant number element. */
  consultantNumber: string;
  /** Styles applied to the internal child element. */
  content: string;
  /** Styles applied to the root element if `size="large"`. */
  sizeLarge: string;
  /** Styles applied to the root element if `size="medium"`. */
  sizeMedium: string;
  /** Styles applied to the avatar icon. */
  avatarIcon: string;
}

export type ConsultantInfoClassKey = keyof ConsultantInfoClasses;

export function getConsultantInfoUtilityClass(slot: string): string {
  return generateUtilityClass('MuiLeadConsultantInfo', slot);
}

const consultantInfoClasses = generateUtilityClasses<ConsultantInfoClassKey>(
  'MuiLeadConsultantInfo',
  [
    'root',
    'consultantTitle',
    'profilePicture',
    'consultantName',
    'consultantNumber',
    'content',
    'sizeLarge',
    'sizeMedium',
    'avatarIcon',
  ],
);

export default consultantInfoClasses;
