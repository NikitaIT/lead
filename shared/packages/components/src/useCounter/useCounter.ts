import type { InputProps as InputPropsType } from '@mui/material';
import type { ChangeEvent, FocusEvent } from 'react';
import { useRef, useCallback, useState } from 'react';

export interface UseCounterProps {
  /** Value for controlled component. */
  value?: number | '-' | '';

  /** Initial value for uncontrolled component. */
  initialValue?: number;

  /** onChange callback will return next number. */
  onChange?: (value: number | '-' | '') => void;

  /** Minimal value of counter. */
  minValue?: number;

  /** Maximal value of counter. */
  maxValue?: number;

  /** Input props */
  InputProps?: Partial<InputPropsType>;
}

/**
 *
 * @param {UseCounterProps} Props
 * @private
 */
function useControlledCounter(props: UseCounterProps) {
  const { value, onChange, InputProps } = props;
  const onIncrease = useCallback(() => {
    if (typeof value !== 'number') {
      return;
    }

    onChange?.(value + 1);
  }, [onChange, value]);

  const onDecrease = useCallback(() => {
    if (typeof value !== 'number') {
      return;
    }

    onChange?.(value - 1);
  }, [onChange, value]);

  const handleChange = useCallback(
    ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
      if (currentTarget.value === '' || currentTarget.value === '-') {
        onChange?.(currentTarget.value);

        return;
      }

      const num = Number.parseInt(currentTarget.value, 10);
      if (Number.isNaN(num)) {
        return;
      }
      onChange?.(num);
    },
    [onChange],
  );

  return { ...props, handleChange, onIncrease, onDecrease, InputProps, value: value as number };
}

/**
 *
 * @param {UseCounterProps} Props
 * @private
 */
function useUncontrolledCounter(props: UseCounterProps) {
  const { initialValue, minValue, maxValue, onChange, InputProps } = props;
  const [internalValue, setValue] = useState<number | '-' | ''>(initialValue ?? minValue ?? 1);

  const onIncrease = useCallback(() => {
    if (
      typeof internalValue !== 'number' ||
      internalValue === (maxValue ?? Number.POSITIVE_INFINITY)
    ) {
      return;
    }
    setValue(internalValue + 1);
    onChange?.(internalValue + 1);
  }, [internalValue, onChange, maxValue]);

  const onDecrease = useCallback(() => {
    if (
      typeof internalValue !== 'number' ||
      internalValue === (minValue ?? Number.NEGATIVE_INFINITY)
    ) {
      return;
    }
    setValue(internalValue - 1);
    onChange?.(internalValue - 1);
  }, [internalValue, onChange, minValue]);

  const handleChange = useCallback(
    ({ currentTarget }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (currentTarget.value === '' || currentTarget.value === '-') {
        setValue(currentTarget.value);

        return;
      }

      const num = Number.parseInt(currentTarget.value, 10);
      if (Number.isNaN(num)) {
        return;
      }
      if (
        num >= (minValue ?? Number.NEGATIVE_INFINITY) &&
        num <= (maxValue ?? Number.POSITIVE_INFINITY)
      ) {
        setValue(num);
        onChange?.(num);
      }
    },
    [onChange, minValue, maxValue],
  );

  const handleBlur = useCallback(
    (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const {
        currentTarget: { value },
      } = event;
      const num = Number.parseInt(value, 10);

      if (
        !Number.isNaN(num) &&
        num >= (minValue ?? Number.NEGATIVE_INFINITY) &&
        num <= (maxValue ?? Number.POSITIVE_INFINITY)
      ) {
        setValue(num);
        onChange?.(num);
        InputProps?.onBlur?.(event);

        return;
      }

      setValue(initialValue ?? minValue ?? 1);
      onChange?.(initialValue ?? minValue ?? 1);
      InputProps?.onBlur?.(event);
    },
    [initialValue, minValue, maxValue, setValue, onChange, InputProps],
  );

  return {
    ...props,
    handleChange,
    onIncrease,
    onDecrease,
    InputProps: {
      ...InputProps,
      onBlur: handleBlur,
    },
    value: internalValue as number,
  };
}
/**
 * Use counter - logic for counter with increase and decrease events
 * Can be uses with controlled or uncontrolled manner
 * @param {UseCounterProps} props
 */
export default function useCounter(props: UseCounterProps) {
  const { value } = props;
  const { current: isControlled } = useRef(value != null);

  const controlled = useControlledCounter(props);

  const uncontrolled = useUncontrolledCounter(props);

  if (isControlled) {
    return controlled;
  }

  return uncontrolled;
}
