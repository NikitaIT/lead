import { styled } from '@mui/material';
import { Suspense } from 'react';

import LazyImage from '.';
// import mdx from './LazyImage.mdx';

export default {
  title: 'Components/Lazy Image',
  parameters: {
    docs: {
      // page: mdx,
    },
    options: {
      showPanel: true,
    },
  },
  component: LazyImage,
};

const LongWrap = styled('div')({
  height: '200vh',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
});

export const BasicUsage = function BasicUsage() {
  return (
    <LongWrap>
      <p>Scroll down to see the magic</p>
      <LazyImage src={imgSrc} width={100} height={100} />
    </LongWrap>
  );
};

export const SuspenseUsage = function SuspenseUsage() {
  return (
    <LongWrap>
      <p>Scroll down to see the magic</p>
      <Suspense fallback="loading">
        <LazyImage enableSuspense src={imgSrc} width={100} height={100} />
      </Suspense>
    </LongWrap>
  );
};

export const EagerLoading = function EagerLoading() {
  return (
    <LongWrap>
      <p>Scroll down to see the magic</p>
      <LazyImage loading="eager" src={imgSrc} width={100} height={100} />
    </LongWrap>
  );
};

export const EagerSuspenseLoading = function EagerSuspenseLoading() {
  return (
    <LongWrap>
      <p>Scroll down to see the magic</p>
      <Suspense fallback="loading...">
        <LazyImage
          enableSuspense
          loading="eager"
          src={imgSrc}
          width={100}
          height={100}
        />
      </Suspense>
    </LongWrap>
  );
};
