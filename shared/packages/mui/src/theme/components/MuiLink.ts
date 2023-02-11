import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiLink'>;

const styleOverrides: Component['styleOverrides'] = {
  root: ({ ownerState: { variant }, theme }) => ({
    '&:hover,&:focus': {
      color: theme.palette.text.hover,
    },
    ...(variant === 'button' && {
      textUnderlineOffset: '.25em',
      textDecorationThickness: '2px',
    }),
  }),
  underlineAlways: {
    textDecorationColor: 'currentcolor',
  },
};

const defaultProps: Component['defaultProps'] = {
  underline: 'always',
  variant: 'body1',
  color: 'textPrimary',
};

export default { styleOverrides, defaultProps };
