import { unstable_composeClasses as composeClasses } from '@mui/base';
import { styled, useThemeProps } from '@mui/material';
import type { OverridableComponent } from '@mui/material/OverridableComponent';
import type { CSSInterpolation } from '@mui/system';
import clsx from 'clsx';
import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import useSuspenseImage from '../useSuspenseImage';
import type { SuspenseImageClasses } from './suspenseImageClasses';
import { getSuspenseImageUtilityClass } from './suspenseImageClasses';
import type {
  OwnerState,
  SuspenseImageProps,
  SuspenseImageTypeMap,
} from './suspenseImageTypes';

export const getSuspenseImageSlots = (_: OwnerState) => ({
  root: ['root'],
});

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;

  const slots = getSuspenseImageSlots(ownerState);

  return composeClasses(slots, getSuspenseImageUtilityClass, classes);
};

const SuspenseImageRoot = styled('img', {
  name: 'MuiLeadSuspenseImage',
  slot: 'Root',
  overridesResolver: (
    _: { ownerState: OwnerState },
    styles: Record<keyof SuspenseImageClasses, CSSInterpolation>
  ) => [styles.root],
})<{ ownerState: OwnerState }>({});

export const SuspenseImage = forwardRef<HTMLImageElement, SuspenseImageProps>(
  function SuspenseImage(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'MuiLeadSuspenseImage',
    });
    const {
      component,
      src,
      srcSet,
      className,
      shouldThrowError,
      errorFallback = null,
      onerror,
      onload,
      ...otherProps
    } = props;

    const { isLoaded, error } = useSuspenseImage({
      shouldThrowError,
      src,
      srcSet,
      onerror,
      onload,
    });

    const ownerState: OwnerState = {
      ...props,
      isLoaded,
      error,
      shouldThrowError,
    };

    const classes = useUtilityClasses(ownerState);

    if (error !== undefined) {
      return errorFallback as ReactElement;
    }

    return (
      <SuspenseImageRoot
        ref={ref}
        as={component}
        ownerState={ownerState}
        className={clsx(classes.root, className)}
        src={src}
        srcSet={srcSet}
        {...otherProps}
      />
    );
  }
);

export default SuspenseImage as OverridableComponent<SuspenseImageTypeMap>;
