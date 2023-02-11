import { unstable_composeClasses as composeClasses } from '@mui/base';
import { useThemeProps } from '@mui/material';
import type { OverridableComponent } from '@mui/material/OverridableComponent';
import clsx from 'clsx';
import { forwardRef } from 'react';
import { Size } from '../baseTypes';

import { capitalize } from '../utils';
import { iconsMapping } from './iconsMapping';
import { getSocialIconUtilityClass } from './socialIconClasses';
import { SocialIconRoot, IconRoot } from './components';
import type {
  SocialIconProps,
  SocialIconTypeMap,
  OwnerState,
} from './socialIconTypes';

export const getSocialIconSlots = (ownerState: OwnerState) => {
  const { size, kind } = ownerState;

  return {
    root: ['root', `size${capitalize(size)}`, `kind${capitalize(kind)}`],
    icon: ['icon'],
  };
};

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;

  const slots = getSocialIconSlots(ownerState);

  const composedClasses = composeClasses(
    slots,
    getSocialIconUtilityClass,
    classes
  );

  return composedClasses;
};

export const SocialIcon = forwardRef<HTMLSpanElement, SocialIconProps>(
  function SocialIcon(inProps: SocialIconProps, ref) {
    const props = useThemeProps({ props: inProps, name: 'MuiLeadSocialIcon' });

    const {
      kind,
      className,
      size = Size.medium,
      component = 'span',
      ...other
    } = props;

    const ownerState: OwnerState = {
      ...props,
      size,
      kind,
    };

    const classes = useUtilityClasses(ownerState);
    const { icon, multicolor } = iconsMapping[ownerState.kind];

    return (
      <SocialIconRoot
        ref={ref}
        ownerState={ownerState}
        className={clsx(classes.root, className)}
        as={component}
        {...other}
      >
        <IconRoot
          as={icon}
          ownerState={ownerState}
          fontSize="inherit"
          className={classes.icon}
        />
        {multicolor}
      </SocialIconRoot>
    );
  }
) as OverridableComponent<SocialIconTypeMap>;
