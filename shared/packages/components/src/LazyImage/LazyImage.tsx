import { unstable_composeClasses as composeClasses } from '@mui/base';
import { styled, useThemeProps, useForkRef, Skeleton } from '@mui/material';
import type { OverridableComponent } from '@mui/material/OverridableComponent';
import type { CSSInterpolation } from '@mui/system';
import clsx from 'clsx';
import type { ReactElement } from 'react';
import { forwardRef, useEffect, useRef, useState } from 'react';

import SuspenseImage from '../SuspenseImage';
import useIntersectionObserver from '../useIntersectionObserver';
import type { LazyImageClassKey } from './lazyImageClasses';
import { getLazyImageUtilityClass } from './lazyImageClasses';
import type {
  LazyImageProps,
  LazyImageTypeMap,
  OwnerState,
} from './LazyImageTypes';

export const getLazyImageSlots = (_: OwnerState) => ({
  root: ['root'],
  skeleton: ['skeleton'],
  image: ['image'],
});

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;

  const slots = getLazyImageSlots(ownerState);

  const composedClasses = composeClasses(
    slots,
    getLazyImageUtilityClass,
    classes
  );

  return composedClasses;
};

const LazyImageRoot = styled('span', {
  name: 'MuiLeadLazyImage',
  slot: 'Root',
  overridesResolver: (
    _: { ownerState: OwnerState },
    styles: Record<LazyImageClassKey, CSSInterpolation>
  ) => [styles.root],
})<{ ownerState: OwnerState }>(({ ownerState: { width, height } }) => ({
  display: 'inline-block',
  height,
  width,
}));

const LazyImageSkeleton = styled(Skeleton, {
  name: 'MuiLeadLazyImage',
  slot: 'Skeleton',
  overridesResolver: (
    _: { ownerState: OwnerState },
    styles: Record<LazyImageClassKey, CSSInterpolation>
  ) => [styles.skeleton],
})<{ ownerState: OwnerState }>({
  display: 'inline-block',
  height: '100%',
  width: '100%',
});

export const LazyImageImg = styled('img', {
  name: 'MuiLeadLazyImage',
  slot: 'Image',
  overridesResolver: (
    _: { ownerState: OwnerState },
    styles: Record<LazyImageClassKey, CSSInterpolation>
  ) => styles.image,
})<{ ownerState: OwnerState }>`
  display: inline-block;
  height: 100%;
  width: 100%;
`;

const InnerSuspendedImage = forwardRef<HTMLImageElement, OwnerState>(
  function InnerSuspendedImage(props, ref) {
    const {
      loading,
      didIntersect,
      className,
      src,
      srcSet,
      imgProps,
      SuspenseImageProps,
      errorFallback,
      alt,
    } = props;

    const imageProps = {
      errorFallback,
      alt,
    };

    if (loading === 'eager' || didIntersect) {
      return (
        <LazyImageImg
          as={SuspenseImage}
          {...imageProps}
          ref={ref}
          ownerState={props}
          className={className}
          src={src}
          srcSet={srcSet}
          {...imgProps}
          {...SuspenseImageProps}
        />
      );
    }

    // Do not mount suspended image
    return null;
  }
);

const InnerLazyImage = forwardRef<HTMLImageElement, OwnerState>(
  function InnerLazyImage(props: OwnerState, ref) {
    const {
      loading,
      didIntersect,
      errorFallback,
      classes,
      fallback = (
        <LazyImageSkeleton
          animation="wave"
          className={classes!.skeleton}
          ownerState={props}
          variant="rectangular"
        />
      ),
      src,
      srcSet,
      className,
      imgProps,
      alt,
    } = props;

    const imageProps = {
      alt,
    };

    const [isLoaded, setIsLoaded] = useState(loading === 'eager');
    const [error, setError] = useState<ErrorEvent>();

    useEffect(() => {
      if (loading === 'eager' || (loading === 'lazy' && !didIntersect)) {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        return () => {};
      }

      const onLoad = () => setIsLoaded(true);
      const onError = (event: ErrorEvent) => setError(event);
      const image = new Image();
      image.addEventListener('load', onLoad);
      image.addEventListener('error', onError);
      if (srcSet) {
        image.srcset = srcSet;
      }
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      image.src = src!;

      return () => {
        image.removeEventListener('load', onLoad);
        image.removeEventListener('error', onError);
      };
    }, [loading, didIntersect, src, srcSet]);

    if (isLoaded) {
      return (
        <LazyImageImg
          {...imageProps}
          ref={ref}
          ownerState={props}
          src={src}
          srcSet={srcSet}
          className={className}
          {...imgProps}
        />
      );
    }

    if (error !== undefined) {
      return errorFallback as ReactElement;
    }

    return fallback as ReactElement;
  }
);

export const LazyImage = forwardRef<HTMLSpanElement, LazyImageProps>(
  function LazyImage(inProps, inRef) {
    const props = useThemeProps({ props: inProps, name: 'MuiLeadLazyImage' });
    const wrapperRef = useRef<HTMLSpanElement>();
    const ref = useForkRef(inRef, wrapperRef);

    const {
      className,
      sx,
      component,
      loading = 'lazy',
      shouldThrowError = false,
      enableSuspense = false,
      errorFallback = null,
      fallback,
      imgRef,
      width,
      height,
      src,
      srcSet,
      SuspenseImageProps,
      imgProps,
      ...otherProps
    } = props;

    const { didIntersect } = useIntersectionObserver<HTMLSpanElement>({
      ref: wrapperRef,
      disabled: loading === 'eager',
      unmountAfterIntersection: true,
    });

    const ownerState: OwnerState = {
      ...props,
      SuspenseImageProps,
      imgProps,
      src,
      srcSet,
      width,
      height,
      loading,
      shouldThrowError,
      errorFallback,
      didIntersect,
    };

    const classes = useUtilityClasses(ownerState);

    const InnerComponent = enableSuspense
      ? InnerSuspendedImage
      : InnerLazyImage;

    return (
      <LazyImageRoot
        ref={ref}
        ownerState={ownerState}
        sx={sx}
        as={component}
        className={clsx(classes.root, className)}
        {...otherProps}
      >
        <InnerComponent
          {...ownerState}
          ref={imgRef}
          classes={classes}
          className={classes.image}
        />
      </LazyImageRoot>
    );
  }
) as OverridableComponent<LazyImageTypeMap>;

export default LazyImage;
