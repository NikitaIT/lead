import { unstable_composeClasses as composeClasses } from '@mui/base';
import { useThemeProps } from '@mui/material';
import type { OverridableComponent } from '@mui/material/OverridableComponent';
import clsx from 'clsx';
import { forwardRef } from 'react';
import { Edge, Color, Size } from '../baseTypes';

import { capitalize } from '../utils';
import { Button } from './Button';
import { Content } from './Content';
import { LoadingIndicator } from './LoadingIndicator';
import { getSplitButtonUtilityClass } from './splitButtonClasses';
import { SplitButtonRoot } from './SplitButtonRoot';
import type {
  SplitButtonProps,
  OwnerState,
  SplitButtonTypeMap,
} from './SplitButtonTypes';

export const getSplitButtonSlots = (ownerState: OwnerState) => {
  const { fullWidth, color, size, disabled, loading, edge } = ownerState;

  return {
    root: [
      'root',
      `color${capitalize(color)}`,
      `size${capitalize(size)}`,
      `edge${capitalize(edge)}`,
      fullWidth && 'fullWidth',
      disabled && 'disabled',
      loading && 'loading',
    ],
    button: ['button'],
    content: ['content'],
  };
};

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;

  const slots = getSplitButtonSlots(ownerState);

  return composeClasses(slots, getSplitButtonUtilityClass, classes);
};

export const SplitButton = forwardRef<HTMLSpanElement, SplitButtonProps>(
  function SplitButton(inProps: SplitButtonProps, ref) {
    const props = useThemeProps({ props: inProps, name: 'MuiLeadSplitButton' });

    const {
      className,
      buttonContent,
      ButtonProps,
      onClick,
      fullWidth,
      children,

      ButtonComponent = Button,
      loadingIndicator = LoadingIndicator,
      disabled = false,
      loading = false,
      edge = Edge.end,
      color = Color.primary,
      size = Size.medium,
      contentWidth = 'auto',
      component = 'span',
      ...rest
    } = props;

    const ownerState: OwnerState = {
      ...props,
      edge,
      color,
      disabled,
      loading,
      size,
      contentWidth,
      fullWidth,
    };

    const classes = useUtilityClasses(ownerState);

    return (
      <SplitButtonRoot
        ref={ref}
        as={component}
        ownerState={ownerState}
        className={clsx(classes.root, className)}
        {...rest}
      >
        <Content ownerState={ownerState} className={classes.content}>
          {children}
        </Content>
        <ButtonComponent
          disabled={disabled || loading}
          ownerState={ownerState}
          className={classes.button}
          onClick={onClick}
          {...ButtonProps}
        >
          {loading ? loadingIndicator : buttonContent}
        </ButtonComponent>
      </SplitButtonRoot>
    );
  }
) as OverridableComponent<SplitButtonTypeMap>;
