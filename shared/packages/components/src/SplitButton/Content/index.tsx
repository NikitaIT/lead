import { CSSInterpolation, styled } from '@mui/material';
import { Edge, Size } from '../../baseTypes';
import { SplitButtonClassKey } from '../splitButtonClasses';

export type ContentProps = {
  edge: Edge;
  size: Size;
};

export const Content = styled('div', {
  name: 'MuiLeadSplitButton',
  slot: 'Content',
  skipSx: true,
  overridesResolver: (
    _: { ownerState: ContentProps },
    styles: Record<SplitButtonClassKey, CSSInterpolation>
  ) => [styles.content],
})<{ ownerState: ContentProps }>(({ ownerState }) => ({
  gridArea: 'content',
  alignSelf: 'center',
  display: 'flex',
  alignItems: 'center',
  ...(ownerState.edge === Edge.end && {
    borderRadius: '23px 0 0 23px',
  }),
  ...(ownerState.edge === Edge.start && {
    borderRadius: '0 23px 23px 0',
  }),
  ...(ownerState.size === Size.small && {
    ...(ownerState.edge === Edge.end && {
      borderRadius: '13px 0 0 13px',
    }),
    ...(ownerState.edge === Edge.start && {
      borderRadius: '0 13px 13px 0',
    }),
  }),
}));
