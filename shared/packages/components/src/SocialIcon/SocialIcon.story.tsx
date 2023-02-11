/* eslint-disable no-alert -- need alert for onClick */
import { ButtonBase, Link, Typography } from '@mui/material';

import { SocialIcon, SocialIconKind } from '.';
// import mdx from './SocialIcon.mdx';

export default {
  title: 'Components/Social icon',
  parameters: {
    docs: {
      // page: mdx,
    },

    options: {
      showPanel: true,
    },
  },
  component: SocialIcon,
};

interface SocialService {
  kind: SocialIconKind;
  title: string;
  href: string;
}

const collection: SocialService[] = [
  { kind: 'blogger', title: 'Blogger', href: '#' },
  { kind: 'douban', title: 'Douban', href: '#' },
  { kind: 'email', title: 'Email', href: '#' },
  {
    kind: 'facebook',
    title: 'Facebook',
    href: 'http://www.facebook.com/%name%',
  },
  {
    kind: 'instagram',
    title: 'Instagram',
    href: 'https://www.instagram.com/%name%/',
  },
  { kind: 'line', title: 'Line', href: '#' },
  { kind: 'messenger', title: 'Messenger', href: '#' },
  { kind: 'odnoklassniki', title: '', href: '#' },
  { kind: 'pinterest', title: 'Pinterest', href: '#' },
  { kind: 'qq', title: 'Qq', href: '#' },
  { kind: 'qzone', title: 'Qzone', href: '#' },
  { kind: 'renren', title: 'Renren', href: '#' },
  { kind: 'rss', title: 'Rss', href: '#' },
  { kind: 'signal', title: 'Signal', href: '#' },
  { kind: 'telegram', title: 'Telegram', href: '#' },
  { kind: 'tqq', title: 'Tqq', href: '#' },
  { kind: 'twitter', title: 'Twitter', href: '#' },
  { kind: 'viber', title: 'Viber', href: '#' },
  {
    kind: 'vkontakte',
    title: 'Vkontakte',
    href: 'http://vkontakte.ru/%name%',
  },
  { kind: 'wechat', title: 'Wechat', href: '#' },
  { kind: 'weibo', title: 'Weibo', href: '#' },
  { kind: 'whatsapp', title: 'Whatsapp', href: '#' },
  { kind: 'youku', title: 'Youku', href: '#' },
  {
    kind: 'youtube',
    title: 'Youtube',
    href: 'http://youtube.com/%name%',
  },
];

export const BasicUsage = function BasicUsage() {
  return (
    <>
      {collection.map((service) => (
        <SocialIcon key={service.kind} kind={service.kind} />
      ))}
    </>
  );
};

export const SmallSize = function SmallSize() {
  return (
    <>
      {collection.map((service) => (
        <SocialIcon key={service.kind} kind={service.kind} size="small" />
      ))}
    </>
  );
};

export const IconAsLink = function IconAsLink() {
  return (
    <>
      <Typography gutterBottom variant="body1">
        component: Link
      </Typography>
      {collection.map((service) => (
        <SocialIcon
          key={service.kind}
          kind={service.kind}
          component={Link}
          href={service.href}
          title={service.title}
          target="_blank"
          rel="noopener noreferrer"
        />
      ))}
      <hr style={{ margin: '10px 0' }} />
      <Typography gutterBottom variant="body1">
        component: a
      </Typography>
      {collection.map((service) => (
        <SocialIcon
          key={service.kind}
          kind={service.kind}
          component="a"
          href={service.href}
          title={service.title}
          target="_blank"
          rel="noopener noreferrer"
        />
      ))}
    </>
  );
};

export const IconAsButton = function IconAsButton() {
  return (
    <>
      {collection.map((service) => (
        <SocialIcon
          key={service.kind}
          kind={service.kind}
          component={ButtonBase}
          onClick={() => {
            alert(`${service.title} clicked`);
          }}
        />
      ))}
    </>
  );
};
