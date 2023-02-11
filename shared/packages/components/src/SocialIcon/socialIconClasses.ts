import generateUtilityClass from '@mui/base/generateUtilityClass';
import generateUtilityClasses from '@mui/base/generateUtilityClasses';

export interface SocialIconClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if `size="medium"`. */
  sizeMedium: string;
  /** Styles applied to the root element if `size="small"`. */
  sizeSmall: string;
  /** Styles applied to the root element if `kind="blogger"`. */
  kindBlogger: string;
  /** Styles applied to the root element if `kind="douban"`. */
  kindDouban: string;
  /** Styles applied to the root element if `kind="email"`. */
  kindEmail: string;
  /** Styles applied to the root element if `kind="facebook"`. */
  kindFacebook: string;
  /** Styles applied to the root element if `kind="instagram"`. */
  kindInstagram: string;
  /** Styles applied to the root element if `kind="line"`. */
  kindLine: string;
  /** Styles applied to the root element if `kind="messenger"`. */
  kindMessenger: string;
  /** Styles applied to the root element if `kind="odnoklassniki"`. */
  kindOdnoklassniki: string;
  /** Styles applied to the root element if `kind="pinterest"`. */
  kindPinterest: string;
  /** Styles applied to the root element if `kind="qq"`. */
  kindQq: string;
  /** Styles applied to the root element if `kind="qzone"`. */
  kindQzone: string;
  /** Styles applied to the root element if `kind="renren"`. */
  kindRenren: string;
  /** Styles applied to the root element if `kind="rss"`. */
  kindRss: string;
  /** Styles applied to the root element if `kind="signal"`. */
  kindSignal: string;
  /** Styles applied to the root element if `kind="telegram"`. */
  kindTelegram: string;
  /** Styles applied to the root element if `kind="tqq"`. */
  kindTqq: string;
  /** Styles applied to the root element if `kind="twitter"`. */
  kindTwitter: string;
  /** Styles applied to the root element if `kind="viber"`. */
  kindViber: string;
  /** Styles applied to the root element if `kind="vkontakte"`. */
  kindVkontakte: string;
  /** Styles applied to the root element if `kind="wechat"`. */
  kindWechat: string;
  /** Styles applied to the root element if `kind="weibo"`. */
  kindWeibo: string;
  /** Styles applied to the root element if `kind="whatsapp"`. */
  kindWhatsapp: string;
  /** Styles applied to the root element if `kind="youku"`. */
  kindYouku: string;
  /** Styles applied to the root element if `kind="youtube"`. */
  kindYoutube: string;
  /** Styles applied to the icon element based on kind and size */
  icon: string;
}

export type SocialIconClassKey = keyof SocialIconClasses;

export function getSocialIconUtilityClass(slot: string): string {
  return generateUtilityClass('MuiLeadSocialIcon', slot);
}

export const socialIconClasses = generateUtilityClasses<SocialIconClassKey>(
  'MuiLeadSocialIcon',
  [
    'root',
    'sizeMedium',
    'sizeSmall',
    'kindBlogger',
    'kindDouban',
    'kindEmail',
    'kindFacebook',
    'kindInstagram',
    'kindLine',
    'kindMessenger',
    'kindOdnoklassniki',
    'kindPinterest',
    'kindQq',
    'kindQzone',
    'kindRenren',
    'kindRss',
    'kindSignal',
    'kindTelegram',
    'kindTqq',
    'kindTwitter',
    'kindViber',
    'kindVkontakte',
    'kindWechat',
    'kindWeibo',
    'kindWhatsapp',
    'kindYouku',
    'kindYoutube',
    'icon',
  ]
);

export default socialIconClasses;
