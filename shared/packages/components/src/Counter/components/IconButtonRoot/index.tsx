import { CSSInterpolation, styled } from '@mui/material';
import IconButton from '../../../IconButton';
import counterClasses, { CounterClasses } from '../../counterClasses';
import { OwnerState } from '../../CounterTypes';

export const IconButtonRoot = styled(IconButton, {
  name: 'MuiLeadCounter',
  slot: 'iconButton',
  overridesResolver: (
    _: { ownerState: OwnerState },
    styles: Record<keyof CounterClasses, CSSInterpolation>
  ) => [styles.iconButton],
})<{ ownerState: OwnerState }>(({ theme, ownerState }) => ({
  width: 30,
  height: 30,
  [`&.${counterClasses.decreaseButton}`]: {
    transition: theme.transitions.create(['margin'], {
      duration: theme.transitions.duration.short,
    }),
    ...(ownerState.expandOnFocus && {
      marginLeft: -40,
    }),
    ...(ownerState.expandOnFocus &&
      ownerState.focused && {
        marginLeft: 0,
      }),
  },
}));
