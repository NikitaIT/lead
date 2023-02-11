/* eslint-disable @typescript-eslint/no-throw-literal */
import type { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

import { readImage } from './readImage';

export interface UseSuspenseImageProps
  extends Pick<
    DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
    'src' | 'srcSet'
  > {
  /**
   * If true error will be thrown to be cached with `ErrorBoundary` instead of returning error.
   * @see [Error boundary](https://reactjs.org/docs/error-boundaries.html)
   * @default false
   */
  shouldThrowError?: boolean;
  /**
   * Error event.
   */
  onerror?: (event: ErrorEvent) => void;
  /**
   * Load event.
   */
  onload?: () => void;
}

/**
 * @typedef {Object} SuspendedImg
 * @property {boolean} isLoaded - true when image is loaded or load failed
 * @property {ErrorEvent} [error] - Error is only present when image failed to load
 */

/**
 * Hook that must be used with react suspense and can be used for preloading images or custom loading indicator.
 *
 * @example <caption>Basic example.</caption>
 * // This component has to be used inside suspense
 * function Img() {
 *     const src = src = 'https://url.to/my-image';
 *     const { error } = useSuspenseImage({ src });
 *
 *     if (error) return 'Error occurred';
 *     return <img src={src} />;
 * }
 * @param {UseSuspenseImageProps} props
 * @throws {ErrorEvent} throws error when image fails to load and `shouldThrowError={true}`
 * @returns {SuspendedImg} suspense image object
 */
export default function useSuspenseImage(props: UseSuspenseImageProps) {
  const { src, srcSet, shouldThrowError = false, onerror, onload } = props;

  if (src === undefined) {
    return {
      isLoaded: true,
    };
  }

  const result = readImage(src, srcSet);

  if (typeof result === 'boolean') {
    onload?.();

    return {
      isLoaded: true,
    };
  }

  onerror?.(result);

  if (shouldThrowError) {
    throw result;
  }

  return {
    isLoaded: true,
    error: result,
  };
}
