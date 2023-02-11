import type { SvgIconTypeMap } from '@mui/material';
import type { OverridableComponent } from '@mui/material/OverridableComponent';
import {
  Blogger,
  Douban,
  Email,
  Facebook,
  Instagram,
  Line,
  Messenger,
  Odnoklassniki,
  Pinterest,
  Qq,
  Qzone,
  Renren,
  Rss,
  Signal,
  Telegram,
  Tqq,
  Twitter,
  Viber,
  Vkontakte,
  Wechat,
  Weibo,
  Whatsapp,
  Youku,
  Youtube,
} from '@lead/shared/packages/icons';

import { MessengerGradient, TelegramGradient } from './components/Variants';
import type { SocialIconKind } from './socialIconTypes';

export const iconsMapping: Record<
  SocialIconKind,
  {
    icon: OverridableComponent<SvgIconTypeMap> & { muiName: string };
    multicolor?: React.ReactNode;
  }
> = {
  blogger: { icon: Blogger },
  douban: { icon: Douban },
  email: { icon: Email },
  facebook: { icon: Facebook },
  instagram: { icon: Instagram },
  line: { icon: Line },
  messenger: { icon: Messenger, multicolor: <MessengerGradient /> },
  odnoklassniki: { icon: Odnoklassniki },
  pinterest: { icon: Pinterest },
  qq: { icon: Qq },
  qzone: { icon: Qzone },
  renren: { icon: Renren },
  rss: { icon: Rss },
  signal: { icon: Signal },
  telegram: { icon: Telegram, multicolor: <TelegramGradient /> },
  tqq: { icon: Tqq },
  twitter: { icon: Twitter },
  viber: { icon: Viber },
  vkontakte: { icon: Vkontakte },
  wechat: { icon: Wechat },
  weibo: { icon: Weibo },
  whatsapp: { icon: Whatsapp },
  youku: { icon: Youku },
  youtube: { icon: Youtube },
} as const;
