import type { UseSwitchParameters } from '@mui/base';
import {
  unstable_composeClasses as composeClasses,
  useSwitch,
} from '@mui/base';
import {
  useThemeProps,
  styled,
  Icon as MuiIcon,
  useRadioGroup,
  createChainedFunction,
  Paper,
} from '@mui/material';
import type { OverridableComponent } from '@mui/material/OverridableComponent';
import type { CSSInterpolation } from '@mui/system';
import { CheckHeavy } from '@lead/shared/packages/icons';
import clsx from 'clsx';
import type { ElementType } from 'react';
import { forwardRef } from 'react';

import type { ToggleCardClasses } from './toggleCardClasses';
import toggleCardClasses, {
  getToggleCardUtilityClass,
} from './toggleCardClasses';
import type {
  OwnerState,
  ToggleCardProps,
  ToggleCardTypeMap,
} from './ToggleCardTypes';

export const getToggleCardSlots = (ownerState: OwnerState) => {
  const { disabled } = ownerState;

  return {
    root: ['root', disabled && 'disabled'],
    icon: ['icon'],
    indicator: ['indicator'],
    input: ['input'],
  };
};

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;

  const slots = getToggleCardSlots(ownerState);

  const composedClasses = composeClasses(
    slots,
    getToggleCardUtilityClass,
    classes
  );

  return { ...classes, ...composedClasses };
};

const ToggleCardRoot = styled('label', {
  name: 'MuiLeadToggleCard',
  slot: 'Root',
  overridesResolver: (
    { ownerState }: { ownerState: OwnerState },
    styles: Record<keyof ToggleCardClasses, CSSInterpolation>
  ) => [styles.root],
})<{ ownerState: OwnerState }>(({ ownerState, theme }) => ({
  position: 'relative',
  display: 'block',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(4, 3),
  cursor: 'pointer',
  userSelect: 'none',
  border: `1px solid ${theme.palette.grey[200]}`,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  transition: theme.transitions.create('box-shadow'),
  ...(ownerState.checked && {
    boxShadow: theme.shadows[3],
    border: `1px solid ${theme.palette.background.paper}`,
  }),
  ...(!ownerState.checked && {
    boxShadow: theme.shadows[0],
  }),
  [`&.${toggleCardClasses.disabled}`]: {
    borderColor: theme.palette.action.disabledBackground,
    color: theme.palette.text.disabled,
    cursor: 'unset',
  },
}));

const Input = styled('input', {
  name: 'MuiLeadToggleCard',
  slot: 'Input',
  overridesResolver: (
    _: { ownerState: OwnerState },
    styles: Record<keyof ToggleCardClasses, CSSInterpolation>
  ) => [styles.input],
})<{ ownerState: OwnerState }>({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: 1,
});

const Indicator = styled('div', {
  name: 'MuiLeadToggleCard',
  slot: 'Indicator',
  overridesResolver: (
    _: { ownerState: OwnerState },
    styles: Record<keyof ToggleCardClasses, CSSInterpolation>
  ) => [styles.indicator],
})<{ ownerState: OwnerState }>(({ theme, ownerState }) => ({
  position: 'absolute',
  opacity: 0,
  top: -1,
  left: -1,
  width: 50,
  height: 50,
  overflow: 'hidden',
  borderTopLeftRadius: theme.shape.borderRadius,
  transition: theme.transitions.create('opacity'),
  '&:before': {
    position: 'absolute',
    top: 0,
    left: 0,
    content: '""',
    transform: 'translate(-50%, -50%) rotate(45deg)',
    width: 50,
    height: 50,
    zIndex: 0,
    background: theme.palette.primary.main,
  },
  ...(ownerState.checked && {
    opacity: 1,
  }),
}));

const StyledIcon = styled(MuiIcon, {
  name: 'MuiLeadToggleCard',
  slot: 'Icon',
  overridesResolver: (
    _: { ownerState: OwnerState },
    styles: Record<keyof ToggleCardClasses, CSSInterpolation>
  ) => [styles.icon],
})<{ ownerState: OwnerState }>(({ theme }) => ({
  color: theme.palette.common.white,
  position: 'relative',
  margin: 1,
}));

function areEqualValues(a: unknown, b: unknown) {
  if (typeof b === 'object' && b !== null) {
    return a === b;
  }

  // The value could be a number, the DOM will stringify it anyway.
  return String(a) === String(b);
}

export const ToggleCard = forwardRef<HTMLLabelElement, ToggleCardProps>(
  function ToggleCard(inProps, ref) {
    const props = useThemeProps({ props: inProps, name: 'MuiLeadToggleCard' });
    const {
      checked: checkedProp,
      defaultChecked,
      disabled: disabledProp,
      onBlur,
      onChange: onChangeProp,
      onFocus,
      readOnly: readOnlyProp,
      required,
      inputProps,
      className,
      component: componentProp,
      children,
      Icon = CheckHeavy,
      IconProps,
      id,
      name: nameProp,
      onFocusVisible,
      value,
      type: typeProp = 'checkbox',
      sx,
      ...otherProps
    } = props;

    const radioGroup = useRadioGroup();

    // @ts-expect-error -- Incorrect types
    const onChange = createChainedFunction(onChangeProp, radioGroup?.onChange);

    let type = typeProp;
    let component: ElementType | undefined = componentProp || 'label';
    let componentProps: Record<string, unknown> = {
      htmlFor: id,
    };
    let internalChecked = checkedProp;
    let name = nameProp;

    if (radioGroup) {
      type = 'radio';
      componentProps = {};
      component = componentProp || Paper;
      if (typeof internalChecked === 'undefined') {
        internalChecked = areEqualValues(radioGroup.value, value);
      }
      if (typeof name === 'undefined') {
        name = radioGroup.name;
      }
    }

    const useSwitchProps: UseSwitchParameters = {
      checked: internalChecked,
      defaultChecked,
      disabled: disabledProp,
      onBlur,
      // @ts-expect-error -- Incorrect types
      onChange,
      onFocus,
      readOnly: readOnlyProp,
      onFocusVisible,
      required,
    };

    const { getInputProps, checked, disabled, focusVisible, readOnly } =
      useSwitch(useSwitchProps);

    const ownerState: OwnerState = {
      ...props,
      checked,
      disabled,
      focusVisible,
      readOnly,
    };

    const classes = useUtilityClasses(ownerState);

    return (
      <ToggleCardRoot
        ref={ref}
        ownerState={ownerState}
        className={clsx(classes.root, className)}
        as={component}
        sx={sx}
        {...componentProps}
        {...otherProps}
      >
        <Indicator ownerState={ownerState} className={classes.indicator}>
          <StyledIcon
            ownerState={ownerState}
            className={classes.icon}
            as={Icon}
            fontSize="small"
            {...IconProps}
          />
        </Indicator>
        {children}
        <Input
          id={id}
          {...getInputProps({ name, type, value, ...inputProps })}
          ownerState={ownerState}
          className={classes.input}
          data-checked={internalChecked}
        />
      </ToggleCardRoot>
    );
  }
) as OverridableComponent<ToggleCardTypeMap>;

export default ToggleCard;
