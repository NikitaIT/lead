import { unstable_composeClasses as composeClasses } from '@mui/base';
import { styled, useThemeProps, Typography } from '@mui/material';
import type { OverridableComponent } from '@mui/material/OverridableComponent';
import type { CSSInterpolation } from '@mui/system';
import clsx from 'clsx';
import type { ChangeEvent } from 'react';
import { forwardRef, useCallback, useEffect, useRef, useState } from 'react';

import type { ToggleClasses } from './toggleClasses';
import switchClasses, { getToggleUtilityClass } from './toggleClasses';
import type { OwnerState, ToggleProps, ToggleTypeMap } from './ToggleTypes';

export const getToggleSlots = (ownerState: OwnerState) => {
  const { fullWidth, active, twoLines, disabled } = ownerState;

  return {
    root: ['root', fullWidth && 'fullWidth', disabled && 'disabled'],
    indicator: ['indicator', active && 'indicatorActive'],
    text: ['text', active && 'textActive', twoLines && 'textTwoLine'],
    checkbox: ['checkbox'],
  };
};

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;

  const slots = getToggleSlots(ownerState);

  const composedClasses = composeClasses(slots, getToggleUtilityClass, classes);

  return composedClasses;
};

const ToggleRoot = styled('label', {
  name: 'MuiLeadToggle',
  slot: 'Root',
  overridesResolver: (
    { ownerState }: { ownerState: OwnerState },
    styles: Record<keyof ToggleClasses, CSSInterpolation>
  ) => [styles.root, ownerState.fullWidth && styles.fullWidth],
})<{ ownerState: OwnerState }>(({ theme, ownerState }) => ({
  display: 'inline-grid',
  gridTemplateColumns: '1fr 1fr',
  justifyItems: 'center',
  alignItems: 'center',
  position: 'relative',
  boxSizing: 'border-box',
  minWidth: 'min(320px, 100%)',
  borderRadius: 30,
  backgroundColor: theme.palette.grey[100],
  padding: theme.spacing(2, 3),
  columnGap: theme.spacing(6),
  border: `3px solid ${theme.palette.grey[100]}`,
  [theme.breakpoints.down('xs')]: {
    minWidth: '100%',
    width: '100%',
  },
  ...(ownerState.fullWidth && {
    width: '100%',
  }),
}));

const Indicator = styled('div', {
  name: 'MuiLeadToggle',
  slot: 'Indicator',
  skipSx: true,
  overridesResolver: (
    { ownerState }: { ownerState: OwnerState },
    styles: Record<keyof ToggleClasses, CSSInterpolation>
  ) => [styles.indicator, ownerState.active && styles.indicatorActive],
})<{ ownerState: OwnerState }>(({ theme, ownerState }) => ({
  position: 'absolute',
  width: 'calc(50% - 2px)',
  height: 'calc(100% - 4px)',
  top: 2,
  left: 2,
  borderRadius: 30,
  zIndex: 1,
  backgroundColor: theme.palette.common.white,
  transition: theme.transitions.create('transform'),
  ...(ownerState.active && {
    transform: 'translate(100%)',
  }),
  [`&.${switchClasses.disabled}`]: {
    backgroundColor: theme.palette.action.disabledBackground,
  },
}));

const Text = styled(Typography, {
  name: 'MuiLeadToggle',
  slot: 'Text',
  skipSx: true,
  overridesResolver: (
    { ownerState }: { ownerState: OwnerState },
    styles: Record<keyof ToggleClasses, CSSInterpolation>
  ) => [
    styles.text,
    ownerState.active && styles.textActive,
    ownerState.twoLines && styles.textTwoLine,
  ],
})<{ ownerState: OwnerState }>(({ theme, ownerState }) => ({
  zIndex: 2,
  margin: 0,
  textTransform: 'uppercase',
  transition: theme.transitions.create('color'),
  userSelect: 'none',
  color: theme.palette.grey[600],
  textAlign: 'center',
  boxSizing: 'border-box',
  width: '100%',
  overflow: 'hidden',
  '&::after': {
    // This part prevents layout shift in page
    content: 'attr(data-text)',
    display: 'block',
    height: 0,
    visibility: 'hidden',
    overflow: 'hidden',
    userSelect: 'none',
    pointerEvents: 'none',
    fontWeight: 'bold',
  },
  ...(ownerState.active && {
    color: theme.palette.text.primary,
    fontWeight: 'bold',
  }),
  ...(!ownerState.twoLines && {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  }),
  ...(ownerState.twoLines && {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
  }),
  [`&.${switchClasses.disabled}`]: {
    color: theme.palette.action.disabled,
  },
}));

const Checkbox = styled('input', {
  name: 'MuiLeadToggle',
  slot: 'Checkbox',
  skipSx: true,
  overridesResolver: (
    _,
    styles: Record<keyof ToggleClasses, CSSInterpolation>
  ) => [styles.checkbox],
})<{ ownerState: OwnerState }>({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: 1,
});

/* The pseudo element after on text class and data-text on spans that holds the text are added for
removing the layout shift when changing from normal to bold. You can read more about it on
https://css-tricks.com/bold-on-hover-without-the-layout-shift/
The approach with just grid does not work because the width of our component is based on width of
the text when not in full width mode.
*/

export const Toggle = forwardRef<HTMLLabelElement, ToggleProps>(function Toggle(
  inProps: ToggleProps,
  ref
) {
  const props = useThemeProps({ props: inProps, name: 'MuiLeadToggle' });

  const {
    id,
    firstText,
    secondText,
    checked,
    onChange,
    defaultChecked,
    fullWidth,
    twoLines,
    className,
    disabled,
    component,
    ...rest
  } = props;

  const { current: controlled } = useRef(checked != null);
  const [value, setValue] = useState(Boolean(defaultChecked ?? checked));

  const ownerState: OwnerState = {
    ...props,
    disabled,
    active: value,
    fullWidth,
    twoLines,
  };

  const classes = useUtilityClasses(ownerState);
  useEffect(() => {
    if (typeof checked === 'boolean') {
      setValue(checked);
    }
  }, [checked]);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event);
      if (!controlled) {
        setValue(event.currentTarget.checked);
      }
    },
    [onChange, controlled]
  );

  return (
    <ToggleRoot
      ref={ref}
      className={clsx(classes.root, className)}
      ownerState={ownerState}
      htmlFor={id}
      {...rest}
      as={component}
    >
      <Indicator ownerState={ownerState} className={classes.indicator} />
      <Text
        ownerState={{
          ...ownerState,
          active: !value,
        }}
        className={classes.text}
        variant="caption"
        data-text={firstText}
      >
        {firstText}
      </Text>
      <Text
        ownerState={ownerState}
        className={classes.text}
        variant="caption"
        data-text={secondText}
      >
        {secondText}
      </Text>
      <Checkbox
        id={id}
        ownerState={ownerState}
        className={classes.checkbox}
        type="checkbox"
        checked={value}
        disabled={disabled}
        onChange={handleChange}
      />
    </ToggleRoot>
  );
}) as OverridableComponent<ToggleTypeMap>;

export default Toggle;
