import type { MutableRefObject, RefObject } from 'react';
import { useState, useEffect } from 'react';

export interface UseIntersectionObserverProps<
  T extends HTMLElement = HTMLElement
> {
  /**
   * Ref to the mounted element.
   */
  ref: MutableRefObject<T | null | undefined> | RefObject<T | null | undefined>;
  /**
   * Unobserve from intersection observer after intersection.
   * @default {false}
   */
  unmountAfterIntersection?: boolean;
  /**
   * Disable hook.
   * @default {false}
   */
  disabled?: boolean;
  /**
   * Intersection observer options.
   */
  options?: IntersectionObserverInit;
}

export default function useIntersectionObserver<
  T extends HTMLElement = HTMLElement
>({
  ref,
  unmountAfterIntersection = false,
  disabled = false,
  options,
}: UseIntersectionObserverProps<T>) {
  const [didIntersect, setDidIntersect] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  useEffect(() => {
    if (!ref.current || disabled || !mounted) {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      return () => {};
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === ref.current && entry.isIntersecting) {
          setIsIntersecting(true);
          setDidIntersect(true);
          if (unmountAfterIntersection) {
            observer.unobserve(ref.current);
          }
        }
        if (entry.target === ref.current && !entry.isIntersecting) {
          setIsIntersecting(false);
        }
      });
    }, options);
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, unmountAfterIntersection, disabled, mounted, options]);

  return { isIntersecting, didIntersect };
}
