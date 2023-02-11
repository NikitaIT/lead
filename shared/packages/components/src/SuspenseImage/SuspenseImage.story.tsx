import { Suspense } from 'react';

import SuspenseImage from '.';
// import mdx from './SuspenseImage.mdx';

export default {
  title: 'Components/Suspense Image',
  parameters: {
    docs: {
      // page: mdx,
    },
    options: {
      showPanel: true,
    },
  },
  component: SuspenseImage,
};

export const BasicUsage = function BasicUsage() {
  return (
    <Suspense fallback="loading">
      <SuspenseImage src={imgSrc} width={100} height={100} />
    </Suspense>
  );
};

export const ErrorFallback = function ErrorFallback() {
  return (
    <Suspense fallback="loading">
      <SuspenseImage
        errorFallback="Error"
        src={imgSrc}
        width={100}
        height={100}
      />
    </Suspense>
  );
};
