import { unstable_composeClasses as composeClasses } from '@mui/base';
import { alpha, styled, useThemeProps, ButtonBase } from '@mui/material';
import type { OverridableComponent } from '@mui/material/OverridableComponent';
import type { CSSInterpolation } from '@mui/system';
import clsx from 'clsx';
import { forwardRef } from 'react';
import { Color, Size, Variant } from '../baseTypes';

import { capitalize, rootShouldForwardProp } from '../utils';
import type { IconButtonClassKey } from './iconButtonClasses';
import iconButtonClasses, {
  getIconButtonUtilityClass,
} from './iconButtonClasses';
import type {
  IconButtonProps,
  IconButtonTypeMap,
  OwnerState,
} from './IconButtonTypes';

export const getIconButtonSlots = (ownerState: OwnerState) => {
  const { color, size, variant, edge } = ownerState;

  return {
    root: [
      'root',
      variant,
      `${variant}${capitalize(color)}`,
      `size${capitalize(size)}`,
      `${variant}Size${capitalize(size)}`,
      color === 'inherit' && 'colorInherit',
      edge && `edge${capitalize(edge)}`,
    ],
  };
};

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;

  const slots = getIconButtonSlots(ownerState);

  const composedClasses = composeClasses(
    slots,
    getIconButtonUtilityClass,
    classes
  );

  return {
    ...classes, // forward the focused, disabled, etc. classes to the ButtonBase
    ...composedClasses,
  };
};

const IconButtonRoot = styled(ButtonBase, {
  name: 'MuiLeadIconButton',
  slot: 'Root',
  overridesResolver: (
    { ownerState }: { ownerState: OwnerState },
    styles: Record<IconButtonClassKey, CSSInterpolation>
  ) => [
    styles.root,
    styles[ownerState.variant],
    styles[`${ownerState.variant}${capitalize(ownerState.color)}` as const],
    styles[`size${capitalize(ownerState.size)}` as const],
    styles[`${ownerState.variant}Size${capitalize(ownerState.size)}` as const],
    ownerState.edge && styles[`edge${capitalize(ownerState.edge)}` as const],
    ownerState.color === 'inherit' && styles.colorInherit,
  ],
  shouldForwardProp: (prop: PropertyKey) =>
    rootShouldForwardProp(prop) || prop === 'classes',
})<{ ownerState: OwnerState }>(
  ({ theme, ownerState }) => ({
    textAlign: 'center',
    flex: '0 0 auto',
    fontSize: theme.typography.pxToRem(24),
    padding: 6,
    borderRadius: '50%',
    overflow: 'visible', // Explicitly set the default value to solve a bug on IE11.
    color: theme.palette.action.active,
    transition: theme.transitions.create(
      ['background-color', 'box-shadow', 'border-color', 'color'],
      {
        duration: theme.transitions.duration.short,
      }
    ),
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: alpha(
        theme.palette.text.primary,
        theme.palette.action.hoverOpacity
      ),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
      ...(ownerState.variant === 'text' &&
        ownerState.color !== 'inherit' && {
          backgroundColor: alpha(
            theme.palette[ownerState.color].main,
            theme.palette.action.hoverOpacity
          ),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
        }),
      ...(ownerState.variant === 'outlined' &&
        ownerState.color !== 'inherit' && {
          border: `1px solid ${theme.palette[ownerState.color].main}`,
          backgroundColor: alpha(
            theme.palette[ownerState.color].main,
            theme.palette.action.hoverOpacity
          ),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
        }),
      ...(ownerState.variant === 'outlined' &&
        ownerState.color === 'default' && {
          border: `1px solid ${theme.palette[ownerState.color].main}`,
        }),
      ...(ownerState.variant === 'contained' && {
        backgroundColor: theme.palette.grey.A100,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.grey[300],
        },
      }),
      ...(ownerState.variant === 'contained' &&
        ownerState.color !== 'inherit' && {
          backgroundColor: theme.palette[ownerState.color].dark,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: theme.palette[ownerState.color].main,
          },
        }),
      ...(ownerState.variant === 'contained' &&
        ownerState.color === 'frontPage' && {
          backgroundColor: theme.palette[ownerState.color].dark,
          boxShadow: theme.shadows[3],
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: theme.palette[ownerState.color].main,
            boxShadow: theme.shadows[2],
          },
        }),
      ...(ownerState.variant === 'contained' &&
        ownerState.color === 'default' && {
          color: theme.palette[ownerState.color].main,
          backgroundColor: theme.palette[ownerState.color].contrastText,
          boxShadow: theme.shadows[3],
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            boxShadow: theme.shadows[2],
            backgroundColor: theme.palette[ownerState.color].contrastText,
          },
        }),
    },
    '&:active': {
      ...(ownerState.variant === 'contained' &&
        (ownerState.color === 'frontPage' ||
          ownerState.color === 'default') && {
          boxShadow: theme.shadows[8],
        }),
    },
    [`&.${iconButtonClasses.focusVisible}`]: {
      ...(ownerState.variant === 'contained' &&
        (ownerState.color === 'frontPage' ||
          ownerState.color === 'default') && {
          boxShadow: theme.shadows[6],
        }),
    },
    [`&.${iconButtonClasses.disabled}`]: {
      color: theme.palette.action.disabled,
      ...(ownerState.variant === 'outlined' && {
        border: `1px solid ${theme.palette.action.disabledBackground}`,
      }),
      ...(ownerState.variant === 'contained' && {
        color: theme.palette.action.disabled,
        boxShadow: theme.shadows[0],
        backgroundColor: theme.palette.action.disabledBackground,
      }),
      ...(ownerState.variant === 'outlined' &&
        ownerState.color === 'default' && {
          borderWidth: '1px',
        }),
    },
    ...(ownerState.variant === 'text' &&
      ownerState.color !== 'inherit' && {
        color: theme.palette[ownerState.color].main,
      }),
    ...(ownerState.variant === 'outlined' && {
      padding: '4px',
      border: `1px solid rgba(0, 0, 0, 0.23)`,
    }),
    ...(ownerState.variant === 'outlined' &&
      ownerState.color !== 'inherit' && {
        color: theme.palette[ownerState.color].main,
        border: `1px solid ${theme.palette[ownerState.color].main}`,
      }),
    ...(ownerState.variant === 'outlined' &&
      ownerState.color === 'default' && {
        color: theme.palette[ownerState.color].main,
        border: `1px solid ${theme.palette.grey[200]}`,
      }),
    ...(ownerState.variant === 'contained' && {
      color: theme.palette.getContrastText(theme.palette.grey[200]),
      backgroundColor: theme.palette.grey[200],
    }),
    ...(ownerState.color === 'frontPage' && {
      backdropFilter: 'blur(30px)',
    }),
    ...(ownerState.variant === 'contained' &&
      ownerState.color !== 'inherit' && {
        color: theme.palette[ownerState.color].contrastText,
        backgroundColor: theme.palette[ownerState.color].main,
      }),
    ...(ownerState.variant === 'contained' &&
      ownerState.color === 'default' && {
        color: theme.palette[ownerState.color].main,
        backgroundColor: theme.palette[ownerState.color].contrastText,
        boxShadow: theme.shadows[2],
      }),
    ...(ownerState.variant === 'contained' &&
      ownerState.color === 'frontPage' && {
        color: theme.palette[ownerState.color].contrastText,
        backgroundColor: theme.palette[ownerState.color].main,
        boxShadow: theme.shadows[2],
      }),
    ...(ownerState.color === 'inherit' && {
      color: 'inherit',
      borderColor: 'currentColor',
    }),
    ...(ownerState.edge === 'start' && {
      marginLeft: ownerState.size === 'small' ? -3 : -12,
    }),
    ...(ownerState.edge === 'end' && {
      marginRight: ownerState.size === 'small' ? -3 : -12,
    }),
    ...(ownerState.size === 'small' &&
      ownerState.variant === 'text' && {
        padding: '3px',
        fontSize: theme.typography.pxToRem(14),
      }),
    ...(ownerState.size === 'small' &&
      ownerState.variant === 'outlined' && {
        padding: '2px',
        fontSize: theme.typography.pxToRem(14),
      }),
    ...(ownerState.size === 'small' &&
      ownerState.variant === 'contained' && {
        padding: '3px',
        fontSize: theme.typography.pxToRem(14),
      }),
    ...(ownerState.size === 'large' &&
      ownerState.variant === 'text' && {
        padding: '9px',
        fontSize: theme.typography.pxToRem(27),
      }),
    ...(ownerState.size === 'large' &&
      ownerState.variant === 'outlined' && {
        padding: '8px',
        fontSize: theme.typography.pxToRem(27),
      }),
    ...(ownerState.size === 'large' &&
      ownerState.variant === 'contained' && {
        padding: '9px',
        fontSize: theme.typography.pxToRem(27),
      }),
  }),
  ({ ownerState }) => ({
    /* Styles applied to the root element if `color="inherit"`. */
    ...(ownerState.disableElevation && {
      boxShadow: 'none',
      '&:hover': {
        boxShadow: 'none',
      },
      [`&.${iconButtonClasses.focusVisible}`]: {
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
      },
      [`&.${iconButtonClasses.disabled}`]: {
        boxShadow: 'none',
      },
    }),
  })
);

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton(inProps: IconButtonProps, ref) {
    const props = useThemeProps({ props: inProps, name: 'MuiLeadIconButton' });
    const {
      children,
      className,
      color = Color.primary,
      disabled = false,
      disableFocusRipple = false,
      size = Size.medium,
      edge = false,
      type,
      variant = Variant.outlined,
      disableElevation,
      ...other
    } = props;

    const ownerState: OwnerState = {
      ...props,
      color,
      edge,
      disabled,
      disableFocusRipple,
      size,
      type,
      variant,
      disableElevation,
    };

    const classes = useUtilityClasses(ownerState);

    return (
      <IconButtonRoot
        ref={ref}
        centerRipple
        className={clsx(classes.root, className)}
        focusRipple={!disableFocusRipple}
        disabled={disabled}
        ownerState={ownerState}
        {...other}
      >
        {children}
      </IconButtonRoot>
    );
  }
) as OverridableComponent<IconButtonTypeMap>;

export default IconButton;
