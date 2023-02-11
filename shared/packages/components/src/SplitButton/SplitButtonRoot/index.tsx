import { CSSInterpolation, styled } from '@mui/material';
import { Color, Edge, Size } from '../../baseTypes';
import { capitalize } from '../../utils/capitalize';
import splitButtonClasses, { SplitButtonClassKey } from '../splitButtonClasses';

export type SplitButtonRootProps = {
  edge: Edge;
  color: typeof Color.primary | typeof Color.secondary;
  size: typeof Size.medium | typeof Size.small;
  contentWidth: 'auto' | string;
} & Partial<{
  disabled: boolean;
  loading: boolean;
  fullWidth: boolean;
}>;
export const SplitButtonRoot = styled('span', {
  name: 'MuiLeadSplitButton',
  slot: 'Root',
  overridesResolver: (
    { ownerState }: { ownerState: SplitButtonRootProps },
    styles: Record<SplitButtonClassKey, CSSInterpolation>
  ) => [
    styles.root,
    styles[`color${capitalize(ownerState.color)}` as const],
    styles[`size${capitalize(ownerState.size)}` as const],
    styles[`edge${capitalize(ownerState.edge)}` as const],
    ownerState.disabled && styles.disabled,
    ownerState.loading && styles.loading,
    ownerState.fullWidth && styles.fullWidth,
  ],
})<{ ownerState: SplitButtonRootProps }>(({ theme, ownerState }) => ({
  display: 'inline-grid',
  gridTemplateAreas: '"content button"',
  border: '1px solid',
  borderRadius: '23px',
  height: '41px',
  gridTemplateColumns: `${ownerState.contentWidth} 1fr`,
  borderColor: theme.palette[ownerState.color].main,
  minWidth: 'min(320px, 100%)',
  overflow: 'hidden',
  ...(ownerState.size === 'small' && {
    height: '31px',
    borderRadius: '17.5px',
    minWidth: 'min(280px, 100%)',
  }),
  ...(ownerState.edge === 'start' && {
    gridTemplateAreas: '"button content"',
    gridTemplateColumns: `1fr ${ownerState.contentWidth}`,
  }),
  ...(ownerState.fullWidth && {
    width: '100%',
  }),
  ...(ownerState.loading && {
    borderColor: theme.palette.action.disabledBackground,
  }),
  [`&.${splitButtonClasses.disabled}`]: {
    borderColor: theme.palette.action.disabledBackground,
    color: theme.palette.action.disabled,
    pointerEvents: 'none',
  },
}));
