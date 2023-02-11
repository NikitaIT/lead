import { Size } from '../baseTypes';

export type SocialIconProps = OwnerReq & Partial<OwnerState>;

export type SocialIconTypeMap = {
  props: SocialIconProps;
  defaultComponent: React.ElementType;
};
export type OwnerReq = {
  kind: SocialIconKind;
};
export type OwnerState = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> &
  OwnerReq & {
    size: typeof Size.medium | typeof Size.small;
    classes?: Record<string, string>;
    component: React.ElementType<any> | undefined | 'span';
  };

export const _SocialIconKind = {
  blogger: 'blogger',
  douban: 'douban',
  email: 'email',
  facebook: 'facebook',
  instagram: 'instagram',
  line: 'line',
  messenger: 'messenger',
  odnoklassniki: 'odnoklassniki',
  pinterest: 'pinterest',
  qq: 'qq',
  qzone: 'qzone',
  renren: 'renren',
  rss: 'rss',
  signal: 'signal',
  telegram: 'telegram',
  tqq: 'tqq',
  twitter: 'twitter',
  viber: 'viber',
  vkontakte: 'vkontakte',
  wechat: 'wechat',
  weibo: 'weibo',
  whatsapp: 'whatsapp',
  youku: 'youku',
  youtube: 'youtube',
} as const;

export const SocialIconKind = _SocialIconKind;
export type SocialIconKind = keyof typeof _SocialIconKind;
