import { unstable_composeClasses as composeClasses } from '@mui/base';
import type { CSSInterpolation } from '@mui/material';
import { useThemeProps, styled } from '@mui/material';
import { FavouriteFilled } from '@lead/shared/packages/icons';
import clsx from 'clsx';
import type { FC } from 'react';
import { forwardRef, Fragment, memo, useCallback, useMemo } from 'react';

import type { StarRatingClasses } from './starRatingClasses';
import {
  starRatingClasses,
  getStarRatingUtilityClass,
} from './starRatingClasses';
import {
  StarRatingProps,
  OwnerState,
  StarOwnerState,
  StarProps,
  StarType,
} from './StarRatingTypes';

/**
 * Helper function to round value to one decimal place if necessary.
 * Normal round function rounds to decimal value even if its not necessary.
 * @param num value to be rounded
 * @returns Special rounded value only if needed. 10.4444 => 10.4; 10 => 10
 */
const roundUtil = (num: number, decimalPlaces = 1) => {
  const baseNumber = Number(`${num}e+${decimalPlaces}`);

  return +`${Math.round(baseNumber)}e-${decimalPlaces}`;
};

export const getStarRatingSlots = (_?: OwnerState) => ({
  root: ['root'],
  star: ['star'],
  textRating: ['textRating'],
  emptyStar: ['emptyStar'],
  fullStar: ['fullStar'],
  halfStar: ['halfStar'],
});

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;

  const slots = getStarRatingSlots(ownerState);

  return composeClasses(slots, getStarRatingUtilityClass, classes);
};

const StarRatingRoot = styled('span', {
  name: 'MuiLeadStarRating',
  slot: 'Root',
  overridesResolver: (
    _: { ownerState: OwnerState },
    styles: Record<keyof StarRatingClasses, CSSInterpolation>
  ) => [
    styles.root,
    {
      [`.${starRatingClasses.textRating}`]: styles.textRating,
    },
  ],
})<{ ownerState: OwnerState }>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  [`.${starRatingClasses.textRating}`]: {
    fontSize: '75%',
    marginLeft: '5px',
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.grey['700'],
  },
}));

const StarHalfWrap = styled('div', {
  name: 'MuiLeadStarRating',
  slot: 'HalfStarWrap',
})<{ ownerState: OwnerState }>({
  position: 'relative',
  display: 'flex',
});

const StyledStarIcon = styled(FavouriteFilled, {
  name: 'MuiLeadStarRating',
  slot: 'Star',
  shouldForwardProp: (prop: PropertyKey) => prop !== 'starPercentageWidth',
  overridesResolver: (
    { ownerState: { starType } }: { ownerState: StarOwnerState },
    styles: Record<keyof StarRatingClasses, CSSInterpolation>
  ) => [styles.star, styles[`${starType}Star` as const]],
})<{ ownerState: StarOwnerState }>(
  ({ theme, ownerState: { starType, starPercentageWidth } }) => ({
    fontSize: '1.3em',
    // To get rid of mui icon spaces in icons
    margin: '0 -4px',

    ...(starType === 'empty' && {
      color: theme.palette.grey['200'],
    }),
    ...(starType === 'half' && {
      position: 'absolute',
      left: 0,
      top: 0,
      // Star is rendered as a whole, we only show part of it. For this we use clip-path css property and rotate after clipping.
      // Clipping value is not exactly percentage value - its "100% - somePercentageValue%"
      clipPath: `inset(0 0 0 ${100 - (starPercentageWidth || 50)}%)`,
      transform: 'rotateY(180deg)',
      zIndex: 1,
    }),
    ...((starType === 'half' || starType === 'full') && {
      color: theme.palette.secondary.light,
    }),
  })
);

const StarRatingItem: FC<StarProps> = memo((props) => (
  <StyledStarIcon
    ownerState={props}
    data-star-type={props.starType}
    className={props.className}
  />
));

export const StarRating = forwardRef<HTMLSpanElement, StarRatingProps>(
  function StarRating(inProps: StarRatingProps, ref) {
    const props = useThemeProps({ props: inProps, name: 'MuiLeadStarRating' });
    const {
      max,
      value,
      showTextRating = true,
      precise = false,
      component = 'div',
      className,
      ...rest
    } = props;

    const stars = useMemo<
      Array<{ starId: number; starType: StarType; halfStarSize?: number }>
    >(
      () =>
        Array.from({ length: max })
          .map((_, index) => index)
          .map((index) => {
            let result = value - index;
            let halfStarSize = 0;
            const halfStarCeiling = precise ? 0.9 : 0.5;
            let starType: StarType = StarType.empty;

            if (!precise) {
              // we round to closest 0.5, because we only want 0.5 or full numbers
              result = Math.round(result / 0.5) * 0.5;
            }

            if (result > 0) {
              if (result <= halfStarCeiling) {
                starType = StarType.half;
              } else {
                starType = StarType.full;
              }
            }

            if (starType === 'half') {
              halfStarSize = (100 * result) / 1;
            }

            return {
              starId: index,
              starType,
              halfStarSize,
            };
          }),
      [max, value, precise]
    );

    const classes = useUtilityClasses(props);
    const formattedValue = useMemo(() => roundUtil(value), [value]);
    const constructStarClassName = useCallback(
      (starType: StarType) =>
        clsx(classes[`${starType}Star` as const], classes.star),
      [classes]
    );

    return (
      <StarRatingRoot
        ref={ref}
        as={component}
        title={`${formattedValue}/${max} ★`}
        className={clsx(classes.root, className)}
        ownerState={props}
        {...rest}
      >
        {stars.map(({ starType, halfStarSize, starId }) => {
          const starClassName = constructStarClassName(starType);

          return (
            <Fragment key={starId}>
              {(starType === StarType.full || starType === StarType.empty) && (
                <StarRatingItem className={starClassName} starType={starType} />
              )}
              {starType === StarType.half && (
                <StarHalfWrap ownerState={props}>
                  <StarRatingItem
                    className={starClassName}
                    starPercentageWidth={halfStarSize}
                    starType={starType}
                  />
                  <StarRatingItem
                    className={constructStarClassName(StarType.empty)}
                    starType={StarType.empty}
                  />
                </StarHalfWrap>
              )}
            </Fragment>
          );
        })}
        {showTextRating ? (
          <span className={starRatingClasses.textRating}>
            ({formattedValue})
          </span>
        ) : null}
      </StarRatingRoot>
    );
  }
);
