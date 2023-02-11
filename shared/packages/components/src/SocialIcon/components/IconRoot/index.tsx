import { SvgIcon, CSSInterpolation, styled } from '@mui/material';
import { SocialIconClassKey } from '../../socialIconClasses';
import { OwnerState } from '../../socialIconTypes';

export const IconRoot = styled(SvgIcon, {
  name: 'MuiLeadSocialIcon',
  slot: 'Icon',
  overridesResolver: (
    { ownerState }: { ownerState: OwnerState },
    styles: Record<SocialIconClassKey, CSSInterpolation>
  ) => [styles.icon],
})<{ ownerState: OwnerState }>(({ ownerState }) => ({
  ...(ownerState.kind === 'douban' &&
    ownerState.size === 'medium' && {
      fontSize: '5.1rem',
      transform: 'translate(-0.8rem, -0.8rem)',
    }),
  ...(ownerState.kind === 'douban' &&
    ownerState.size === 'small' && {
      fontSize: '4.4rem',
      transform: 'translate(-0.7rem, -0.7rem)',
    }),
  ...(ownerState.kind === 'facebook' &&
    ownerState.size === 'medium' && {
      fontSize: '5.1rem',
      transform: 'translate(-0.805rem, -0.81rem)',
    }),
  ...(ownerState.kind === 'facebook' &&
    ownerState.size === 'small' && {
      fontSize: '4.4rem',
      transform: 'translate(-0.7rem, -0.7rem)',
    }),
  ...(ownerState.kind === 'line' &&
    ownerState.size === 'medium' && {
      fontSize: '5.1rem',
      transform: 'translate(-0.8rem, -0.8rem)',
    }),
  ...(ownerState.kind === 'line' &&
    ownerState.size === 'small' && {
      fontSize: '4.4rem',
      transform: 'translate(-0.7rem, -0.7rem)',
    }),
  ...(ownerState.kind === 'messenger' &&
    ownerState.size === 'medium' && {
      fill: 'url(#messengerGradient) #000',
      fontSize: '5.1rem',
      transform: 'translate(-0.8rem, -0.8rem)',
    }),
  ...(ownerState.kind === 'messenger' &&
    ownerState.size === 'small' && {
      fill: 'url(#messengerGradient) #000',
      fontSize: '4.36rem',
      transform: 'translate(-0.66rem, -0.68rem)',
    }),
  ...(ownerState.kind === 'pinterest' &&
    ownerState.size === 'medium' && {
      fontSize: '5.1rem',
      transform: 'translate(-0.8rem, -0.8rem)',
    }),
  ...(ownerState.kind === 'pinterest' &&
    ownerState.size === 'small' && {
      fontSize: '4.4rem',
      transform: 'translate(-0.7rem, -0.7rem)',
    }),
  ...(ownerState.kind === 'renren' &&
    ownerState.size === 'medium' && {
      fontSize: '5.1rem',
      transform: 'translate(-0.75rem, -0.9rem)',
    }),
  ...(ownerState.kind === 'renren' &&
    ownerState.size === 'small' && {
      fontSize: '4.4rem',
      transform: 'translate(-0.65rem, -0.77rem)',
    }),
  ...(ownerState.kind === 'signal' &&
    ownerState.size === 'medium' && {
      fontSize: '5.1rem',
      transform: 'translate(-0.8rem, -0.8rem)',
    }),
  ...(ownerState.kind === 'signal' &&
    ownerState.size === 'small' && {
      fontSize: '4.4rem',
      transform: 'translate(-0.69rem, -0.69rem)',
    }),
  ...(ownerState.kind === 'telegram' &&
    ownerState.size === 'medium' && {
      fill: 'url(#telegramGradient) #28a9ec',
      fontSize: '5.1rem',
      transform: 'translate(-0.8rem, -0.8rem)',
    }),
  ...(ownerState.kind === 'telegram' &&
    ownerState.size === 'small' && {
      fill: 'url(#telegramGradient) #28a9ec',
      fontSize: '4.4rem',
      transform: 'translate(-0.69rem, -0.69rem)',
    }),
  ...(ownerState.kind === 'viber' &&
    ownerState.size === 'medium' && {
      fontSize: '5.1rem',
      transform: 'translate(-0.805rem, -0.81rem)',
    }),
  ...(ownerState.kind === 'viber' &&
    ownerState.size === 'small' && {
      fontSize: '4.4rem',
      transform: 'translate(-0.7rem, -0.7rem)',
    }),
  ...(ownerState.kind === 'vkontakte' &&
    ownerState.size === 'medium' && {
      fontSize: '5.1rem',
      transform: 'translate(-0.8rem, -0.8rem)',
    }),
  ...(ownerState.kind === 'vkontakte' &&
    ownerState.size === 'small' && {
      fontSize: '4.4rem',
      transform: 'translate(-0.7rem, -0.7rem)',
    }),
  ...(ownerState.kind === 'wechat' &&
    ownerState.size === 'medium' && {
      transform: 'translate(-0.4rem, -0.4rem)',
    }),
  ...(ownerState.kind === 'wechat' &&
    ownerState.size === 'small' && {
      transform: 'translate(-0.3rem, -0.3rem)',
    }),
  ...(ownerState.kind === 'weibo' &&
    ownerState.size === 'medium' && {
      fontSize: '5.1rem',
      transform: 'translate(-0.75rem, -0.9rem)',
    }),
  ...(ownerState.kind === 'weibo' &&
    ownerState.size === 'small' && {
      fontSize: '4.4rem',
      transform: 'translate(-0.65rem, -0.75rem)',
    }),
  ...(ownerState.kind === 'youku' &&
    ownerState.size === 'medium' && {
      fontSize: '5.1rem',
      transform: 'translate(-0.75rem, -0.9rem)',
    }),
  ...(ownerState.kind === 'youku' &&
    ownerState.size === 'small' && {
      fontSize: '4.4rem',
      transform: 'translate(-0.66rem, -0.78rem)',
    }),
}));
