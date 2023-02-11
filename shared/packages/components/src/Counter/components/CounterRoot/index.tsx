import { CSSInterpolation, styled } from '@mui/material';
import { capitalize } from '../../../utils';
import counterClasses, { CounterClasses } from '../../counterClasses';
import { OwnerState } from '../../CounterTypes';

export type CounterRootProps = OwnerState;

export const CounterRoot = styled('div', {
  name: 'MuiLeadCounter',
  slot: 'Root',
  overridesResolver: (
    { ownerState }: { ownerState: CounterRootProps },
    styles: Record<keyof CounterClasses, CSSInterpolation>
  ) => [
    styles.root,
    ownerState.disabled && styles.disabled,
    ownerState.readOnly && styles.readOnly,
    styles[`size${capitalize(ownerState.size)}` as const],
    styles[`color${capitalize(ownerState.color)}` as const],
    styles[`variant${capitalize(ownerState.variant)}` as const],
    styles[
      `${ownerState.variant}${capitalize(ownerState.color)}${capitalize(
        ownerState.size
      )}` as const
    ],
    styles[`${ownerState.variant}${capitalize(ownerState.color)}` as const],
  ],
})<{ ownerState: CounterRootProps }>(({ theme, ownerState }) => ({
  display: 'inline-flex',
  flexDirection: 'row',
  height: 30,
  gap: theme.spacing(2),
  ...(ownerState.expandOnFocus && {
    width: 25,
    overflow: 'hidden',
    transition: theme.transitions.create(['width', 'translate'], {
      duration: theme.transitions.duration.short,
    }),
    ...(ownerState.focused && {
      width: 105,
    }),
  }),
  ...(ownerState.size === 'large' && {
    ...(ownerState.expandOnFocus && {
      width: 40,
      ...(ownerState.focused && {
        width: 120,
      }),
    }),
  }),
  [`&.${counterClasses.disabled}`]: {},
}));
