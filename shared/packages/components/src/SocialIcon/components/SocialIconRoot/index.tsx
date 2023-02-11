import { CSSInterpolation, styled } from '@mui/material';
import { capitalize } from '../../../utils';
import { SocialIconClassKey } from '../../socialIconClasses';
import { OwnerState } from '../../socialIconTypes';

export const SocialIconRoot = styled('span', {
  name: 'MuiLeadSocialIcon',
  slot: 'Root',
  overridesResolver: (
    { ownerState }: { ownerState: OwnerState },
    styles: Record<SocialIconClassKey, CSSInterpolation>
  ) => [
    styles.root,
    styles[`size${capitalize(ownerState.size)}` as const],
    styles[`kind${capitalize(ownerState.kind)}` as const],
  ],
})<{ ownerState: OwnerState }>(({ theme, ownerState }) => ({
  display: 'inline-block',
  position: 'relative',
  boxSizing: 'border-box',
  overflow: 'hidden',
  borderRadius: '50%',
  margin: theme.spacing(1),
  padding: 0,
  textAlign: 'center',
  verticalAlign: 'middle',
  cursor: 'pointer',
  textDecoration: 'none',
  fontWeight: 'normal',
  '&::after': {
    content: '" "',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0,
  },
  '&:hover, &:focus': {
    color: theme.palette.common.white,
    fontWeight: 'normal',
  },
  '&:hover&::after, &:focus&::after': {
    opacity: 0.4,
  },
  ...(ownerState.size === 'medium' && {
    width: '3.5rem',
    height: '3.5rem',
    fontSize: '3.3rem',
    lineHeight: '4.2rem',
  }),
  ...(ownerState.size === 'small' && {
    width: '3rem',
    height: '3rem',
    fontSize: '2.8rem',
    lineHeight: '3.6rem',
  }),
  ...(ownerState.kind === 'blogger' && {
    color: theme.palette.common.white,
    backgroundColor: '#F59241',
    '&:hover, &:focus': {
      color: theme.palette.common.white,
      backgroundColor: '#F59241',
      fontWeight: 'normal',
    },
  }),
  ...(ownerState.kind === 'douban' && {
    color: '#00b51e',
    background: 'radial-gradient(#fff 0, #fff 65%, transparent 70%)',
    '&:hover, &:focus': {
      color: '#00b51e',
      fontWeight: 'normal',
    },
  }),
  ...(ownerState.kind === 'email' && {
    color: theme.palette.common.white,
    backgroundColor: '#333',
    '&:hover, &:focus': {
      color: theme.palette.common.white,
      backgroundColor: '#333',
      fontWeight: 'normal',
    },
  }),
  ...(ownerState.kind === 'facebook' && {
    color: '#1877F2',
    background: 'radial-gradient(#fff 0, #fff 67%, transparent 71%)',
    '&:hover, &:focus': {
      color: '#1877F2',
      fontWeight: 'normal',
    },
  }),
  ...(ownerState.kind === 'instagram' && {
    color: theme.palette.common.white,
    backgroundColor: '#F00075',
    '&:hover, &:focus': {
      color: theme.palette.common.white,
      backgroundColor: '#F00075',
      fontWeight: 'normal',
    },
  }),
  ...(ownerState.kind === 'line' && {
    color: '#1dcc00',
    background: 'radial-gradient(#fff 0, #fff 65%, transparent 70%)',
    '&:hover, &:focus': {
      color: '#1dcc00',
      fontWeight: 'normal',
    },
  }),
  ...(ownerState.kind === 'messenger' && {
    borderRadius: '50% 50% 50% 20%',
    color: 'transparent',
    background: 'radial-gradient(#fff 0%, #fff 62%, transparent 63%)',
    '&:hover, &:focus': {
      color: 'transpatent',
      fontWeight: 'normal',
    },
  }),
  ...(ownerState.kind === 'odnoklassniki' && {
    color: theme.palette.common.white,
    backgroundColor: '#EE8208',
    '&:hover, &:focus': {
      color: theme.palette.common.white,
      backgroundColor: '#EE8208',
      fontWeight: 'normal',
    },
  }),
  ...(ownerState.kind === 'pinterest' && {
    color: '#E60023',
    '&:hover, &:focus': {
      color: '#E60023',
      fontWeight: 'normal',
    },
  }),
  ...(ownerState.kind === 'qq' && {
    color: theme.palette.common.white,
    backgroundColor: '#12B7F5',
    '&:hover, &:focus': {
      color: theme.palette.common.white,
      backgroundColor: '#12B7F5',
      fontWeight: 'normal',
    },
  }),
  ...(ownerState.kind === 'qzone' && {
    color: theme.palette.common.white,
    backgroundColor: '#00a2ff',
    fontSize: '3.5rem',
    '&:hover, &:focus': {
      color: theme.palette.common.white,
      backgroundColor: '#00a3ff',
      fontWeight: 'normal',
    },
    ...(ownerState.size === 'small' && {
      fontSize: '3rem',
    }),
  }),
  ...(ownerState.kind === 'renren' && {
    color: '#0071be',
    background: 'radial-gradient(#fff 0, #fff 67%, transparent 71%)',
    '&:hover, &:focus': {
      color: '#0071be',
      fontWeight: 'normal',
    },
  }),
  ...(ownerState.kind === 'rss' && {
    color: theme.palette.common.white,
    backgroundColor: '#f47c00',
    fontSize: '2.6rem',
    '&:hover, &:focus': {
      color: theme.palette.common.white,
      backgroundColor: '#f47c00',
      fontWeight: 'normal',
    },
    ...(ownerState.size === 'small' && {
      fontSize: '2.2rem',
    }),
  }),
  ...(ownerState.kind === 'signal' && {
    color: '#3a76f0',
    background: 'radial-gradient(#fff 0, #fff 69%, transparent 71%)',
    '&:hover, &:focus': {
      color: '#3a76f0',
      fontWeight: 'normal',
    },
  }),
  ...(ownerState.kind === 'telegram' && {
    color: 'transparent',
    background: 'radial-gradient(#fff 0, #fff 65%, transparent 70%)',
    '&:hover, &:focus': {
      color: 'transparent',
      fontWeight: 'normal',
    },
  }),
  ...(ownerState.kind === 'tqq' && {
    color: theme.palette.common.white,
    backgroundColor: '#677ee3',
    '&:hover, &:focus': {
      color: theme.palette.common.white,
      backgroundColor: '#677ee3',
      fontWeight: 'normal',
    },
  }),
  ...(ownerState.kind === 'twitter' && {
    color: theme.palette.common.white,
    backgroundColor: '#1B9DF0',
    fontSize: '2.8rem',
    ...(ownerState.size === 'small' && {
      fontSize: '2.2rem',
    }),
  }),
  ...(ownerState.kind === 'viber' && {
    color: '#7360f2',
    background: 'radial-gradient(#fff 0, #fff 65%, transparent 70%)',
    '&:hover, &:focus': {
      color: '#7360f2',
      fontWeight: 'normal',
    },
  }),
  ...(ownerState.kind === 'vkontakte' && {
    borderRadius: '25%',
    color: '#2787F5',
    background: 'radial-gradient(#fff 0, #fff 65%, transparent 70%)',
    '&:hover, &:focus': {
      color: '#2787F5',
      fontWeight: 'normal',
    },
  }),
  ...(ownerState.kind === 'wechat' && {
    borderRadius: '20%',
    fontSize: '4.4rem',
    color: theme.palette.common.white,
    backgroundColor: '#00CC0A',
    '&:hover, &:focus': {
      color: theme.palette.common.white,
      backgroundColor: '#00CC0A',
      fontWeight: 'normal',
    },
    ...(ownerState.size === 'small' && {
      fontSize: '3.7rem',
    }),
  }),
  ...(ownerState.kind === 'weibo' && {
    color: '#E83339',
    background: 'radial-gradient(#fff 0, #fff 60%, transparent 61%)',
    '&:hover, &:focus': {
      color: '#E83339',
      fontWeight: 'normal',
    },
  }),
  ...(ownerState.kind === 'whatsapp' && {
    color: theme.palette.common.white,
    backgroundColor: '#25D366',
    '&:hover, &:focus': {
      color: theme.palette.common.white,
      backgroundColor: '#25D366',
      fontWeight: 'normal',
    },
  }),
  ...(ownerState.kind === 'youku' && {
    color: '#8bd7f8',
    background: 'radial-gradient(#fff 0, #fff 65%, transparent 70%)',
    '&:hover, &:focus': {
      color: '#8bd7f8',
      fontWeight: 'normal',
    },
  }),
  ...(ownerState.kind === 'youtube' && {
    color: theme.palette.common.white,
    backgroundColor: '#FF0000',
    fontSize: '2.4rem',
    lineHeight: '4rem',
    '&:hover, &:focus': {
      color: theme.palette.common.white,
      backgroundColor: '#FF0000',
      fontWeight: 'normal',
    },
    ...(ownerState.size === 'small' && {
      fontSize: '2rem',
      lineHeight: '3.5rem',
    }),
  }),
}));
