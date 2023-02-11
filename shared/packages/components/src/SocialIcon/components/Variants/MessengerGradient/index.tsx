import type { FC } from 'react';

export const MessengerGradient: FC = () => (
  <svg
    style={{ width: 0, height: 0, position: 'absolute' }}
    aria-hidden="true"
    focusable="false"
  >
    <radialGradient
      xmlns="http://www.w3.org/2000/svg"
      cx="19.2474387%"
      cy="99.4651948%"
      fx="19.2474387%"
      fy="99.4651948%"
      r="108.959588%"
      id="messengerGradient"
    >
      <stop stopColor="#0099FF" offset="0%" />
      <stop stopColor="#A033FF" offset="60.9753877%" />
      <stop stopColor="#FF5280" offset="93.482299%" />
      <stop stopColor="#FF7061" offset="100%" />
    </radialGradient>
  </svg>
);
