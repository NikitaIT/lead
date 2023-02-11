import type { FC } from 'react';

export const TelegramGradient: FC = () => (
  <svg
    style={{ width: 0, height: 0, position: 'absolute' }}
    aria-hidden="true"
    focusable="false"
  >
    <linearGradient
      xmlns="http://www.w3.org/2000/svg"
      id="telegramGradient"
      x1="0.012"
      y1="24"
      x2="0.012"
      y2="23.976"
      gradientTransform="matrix(1000, 0, 0, -1000, 0, 24000)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="#2aabee" />
      <stop offset="1" stopColor="#229ed9" />
    </linearGradient>
  </svg>
);
