import { CSSInterpolation, InputBase, styled } from '@mui/material';
import counterClasses, { CounterClasses } from '../../counterClasses';
import { OwnerState } from '../../CounterTypes';

export const Input = styled(InputBase, {
  name: 'MuiLeadCounter',
  slot: 'Input',
  overridesResolver: (
    _: { ownerState: OwnerState },
    styles: Record<keyof CounterClasses, CSSInterpolation>
  ) => [styles.input],
})<{ ownerState: OwnerState }>(({ theme, ownerState }) => ({
  margin: 0,
  padding: 0,
  minWidth: 25,
  width: 25,
  height: 25,
  transition: theme.transitions.create(['border'], {
    duration: theme.transitions.duration.short,
  }),
  border: `1px solid ${theme.palette.grey[200]}`,
  borderRadius: theme.shape.borderRadius,
  alignSelf: 'center',
  ...(ownerState.variant === 'text' && {
    borderColor: 'transparent',
    ...(ownerState.focused && {
      borderColor: theme.palette.grey[200],
    }),
  }),
  ...(ownerState.size === 'large' && {
    minWidth: 40,
    width: 40,
    height: 30,
  }),
  ...(ownerState.readOnly && {
    border: 'none',
  }),
  ...(ownerState.focused && {
    borderColor: theme.palette.grey[400],
  }),
  '&:hover': {
    borderColor: theme.palette.grey[400],
    ...(ownerState.variant === 'text' && {
      borderColor: theme.palette.grey[200],
    }),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      borderColor: theme.palette.grey[200],
    },
  },
  [`& input`]: {
    fontSize: theme.typography.pxToRem(12),
    textAlign: 'center',
    padding: 0,
    ...(ownerState.readOnly && {
      cursor: 'default',
    }),
  },
  [`.${counterClasses.disabled} &`]: {
    borderColor: theme.palette.action.disabled,
  },
}));
