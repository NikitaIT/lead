import {
  ButtonBase,
  CSSInterpolation,
  PaletteColor,
  styled,
} from '@mui/material';
import { ColorOnly, Edge, Size } from '../../baseTypes';
import { SplitButtonClassKey } from '../splitButtonClasses';

export type ButtonProps = {
  color: ColorOnly;
  edge: Edge;
  size: Size;
  disabled: boolean;
  loading: boolean;
};

export const Button = styled(ButtonBase, {
  name: 'MuiLeadSplitButton',
  slot: 'Button',
  overridesResolver: (
    _: { ownerState: ButtonProps },
    styles: Record<SplitButtonClassKey, CSSInterpolation>
  ) => [styles.button],
})<{ ownerState: ButtonProps }>(({ theme, ownerState }) => ({
  backgroundColor: theme.palette[ownerState.color].main,
  color: theme.palette[ownerState.color].contrastText,
  gridArea: 'button',
  alignSelf: 'stretch',
  justifySelf: 'stretch',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  marginTop: '-2px',
  marginBottom: '-2px',
  '&:hover,&:focus': {
    backgroundColor: theme.palette[ownerState.color].dark,
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: theme.palette[ownerState.color].main,
    },
  },
  ...(ownerState.size === 'small' && {
    ...(ownerState.edge === 'end' && {
      marginRight: -1,
    }),
    ...(ownerState.edge === 'start' && {
      marginLeft: -1,
    }),
  }),
  ...(ownerState.edge === 'end' && {
    marginRight: -1,
  }),
  ...(ownerState.edge === 'start' && {
    marginLeft: -1,
  }),
  ...((ownerState.loading || ownerState.disabled) && {
    backgroundColor: theme.palette.action.disabledBackground,
    color: theme.palette.action.disabled,
  }),
}));
