/* eslint-disable @typescript-eslint/no-throw-literal */
/* istanbul ignore file */
/**
 * Internal Cache for images
 * @internal
 */
export const __imgCache = new Map<string, ErrorEvent | Promise<void> | true>();

/**
 * readImage function that allows to use react suspense
 * @internal
 * @param {string} src src attribute
 * @param {string} [srcSet] srtSet Attribute
 * @throws { Promise<void> } Throws promise when image is still loading
 * @returns { true | ErrorEvent } Returns true when image was loaded and error when image filed to load
 */
export function readImage(src: string, srcSet?: string) {
  if (!__imgCache.has(src)) {
    __imgCache.set(
      src,
      new Promise<Event>((resolve, reject) => {
        const img = new Image();
        img.addEventListener('load', (event) => {
          __imgCache.set(src, true);
          resolve(event);
        });
        img.addEventListener('error', (error: ErrorEvent) => {
          reject(error);
        });
        img.src = src;
        if (srcSet) {
          img.srcset = srcSet;
        }
      })
        .then(() => {
          __imgCache.set(src, true);
        })
        .catch((error: ErrorEvent) => {
          __imgCache.set(src, error);
        })
    );
  }

  if (__imgCache.get(src) instanceof Promise) {
    throw __imgCache.get(src);
  }

  return __imgCache.get(src) as ErrorEvent | true;
}
