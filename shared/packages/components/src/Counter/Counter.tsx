import { unstable_composeClasses as composeClasses } from '@mui/base';
import { useThemeProps, ClickAwayListener } from '@mui/material';
import type { OverridableComponent } from '@mui/material/OverridableComponent';
import { Add, Remove } from '@lead/shared/packages/icons';
import clsx from 'clsx';
import type { FocusEventHandler } from 'react';
import { forwardRef, useCallback, useEffect, useRef, useState } from 'react';

import useCounter from '../useCounter';
import { capitalize, useForkCallback } from '../utils';
import { getCounterUtilityClass } from './counterClasses';
import type { CounterProps, CounterTypeMap, OwnerState } from './CounterTypes';
import { Color, Size, Variant } from '../baseTypes';
import { CounterRoot, IconButtonRoot, Input } from './components';

export const getCounterSlots = (ownerState: OwnerState) => {
  const { readOnly, disabled, size, color, variant } = ownerState;

  return {
    root: [
      'root',
      disabled && 'disabled',
      readOnly && 'readOnly',
      `size${capitalize(size)}`,
      `color${capitalize(color)}`,
      `variant${capitalize(variant)}`,
      `${variant}${capitalize(color)}${capitalize(size)}`,
      `${variant}${capitalize(color)}`,
    ],
    input: ['input'],
    iconButton: ['iconButton'],
    increaseButton: ['increaseButton'],
    decreaseButton: ['decreaseButton'],
  };
};

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;

  const slots = getCounterSlots(ownerState);

  return composeClasses(slots, getCounterUtilityClass, classes);
};

export const Counter = forwardRef<HTMLDivElement, CounterProps>(
  function Counter(inProps: CounterProps, ref) {
    const props = useThemeProps({ props: inProps, name: 'MuiLeadCounter' });

    const {
      maxValue = Number.POSITIVE_INFINITY,
      minValue = Number.NEGATIVE_INFINITY,
      disabled = false,
      className,
      readOnly = false,
      required,
      iconButton: IconButtonComponent = IconButtonRoot,
      input: InputComponent = Input,
      onChange,
      onFocus,
      onClickAway,
      expanded,
      component = 'div',
      expandOnFocus = false,
      variant = Variant.outlined,
      color = Color.default,
      size = Size.medium,
      IconButtonProps = {},
      IncreaseIconButtonProps = {},
      DecreaseIconButtonProps = {},
      InputProps: InputBaseProps = {},
      ...otherProps
    } = props;
    const [focused, setIsFocused] = useState(expanded ?? false);
    const { value, onDecrease, InputProps, onIncrease, handleChange } =
      useCounter(props);

    const ownerState: OwnerState = {
      ...props,
      disabled,
      readOnly,
      expandOnFocus,
      variant,
      color,
      focused,
      size,
    };

    useEffect(() => {
      if (typeof expanded === 'boolean') {
        setIsFocused(expanded);
      }
    }, [expanded]);

    const handleClickAway = useCallback(() => {
      if (typeof expanded === 'boolean') {
        return;
      }

      setIsFocused(false);
    }, [expanded]);

    const handleFocus = useCallback<FocusEventHandler<HTMLDivElement>>(() => {
      if (typeof expanded === 'boolean') {
        return;
      }

      setIsFocused(true);
    }, [expanded]);

    const handleFocusForked = useForkCallback(handleFocus, onFocus);

    const handleClickAwayForked = useForkCallback(handleClickAway, onClickAway);

    const classes = useUtilityClasses(ownerState);

    const inputRef = useRef<HTMLInputElement>(null);

    return (
      <ClickAwayListener onClickAway={handleClickAwayForked}>
        <CounterRoot
          {...otherProps}
          ref={ref}
          ownerState={ownerState}
          className={clsx(classes.root, className)}
          as={component}
          onFocus={handleFocusForked}
        >
          <IconButtonComponent
            disableElevation
            ownerState={ownerState}
            type="button"
            size="small"
            disabled={disabled || value <= minValue}
            className={clsx(classes.iconButton, classes.decreaseButton)}
            color={color}
            variant={variant}
            {...IconButtonProps}
            {...DecreaseIconButtonProps}
            onClick={onDecrease}
          >
            <Remove fontSize="small" />
          </IconButtonComponent>
          <InputComponent
            inputRef={inputRef}
            ownerState={ownerState}
            readOnly={readOnly}
            required={required}
            value={value}
            disabled={disabled}
            className={classes.input}
            {...InputBaseProps}
            {...InputProps}
            onChange={handleChange}
          />
          <IconButtonComponent
            disableElevation
            ownerState={ownerState}
            type="button"
            size="small"
            disabled={disabled || value >= maxValue}
            className={clsx(classes.iconButton, classes.increaseButton)}
            color={color}
            variant={variant}
            {...IconButtonProps}
            {...IncreaseIconButtonProps}
            onClick={onIncrease}
          >
            <Add fontSize="small" />
          </IconButtonComponent>
        </CounterRoot>
      </ClickAwayListener>
    );
  }
) as OverridableComponent<CounterTypeMap>;

export default Counter;
