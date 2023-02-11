import { colors } from '../constants';
import {
  fontFamily as themeFontFamily,
  fontWeightBold,
  fontWeightRegular,
} from '../constants/font';
import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiCssBaseline'>;

const styleOverrides: Component['styleOverrides'] = {
  // Body and Html
  html: {
    height: '100%',
    webkitTextSizeAdjust: '100%',
    webkitFontSmoothing: 'antialiased',
    mozOsxFontSmoothing: 'grayscale',
  },
  body: {
    fontSize: '0.9rem',
    minHeight: '100%',
    overflow: 'overlay',
  },

  // Mostly action elements (button, a, audio, video, etc...)
  button: {
    padding: 0,
  },
  [`
  html,
  body,
  button,
  input,
  optgroup,
  select,
  textarea`]: {
    fontFamily: themeFontFamily,
  },
  [`
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  nav,
  section,
  summary,
  hr`]: {
    display: 'block',
  },
  [`
  audio,
  canvas,
  video`]: {
    display: 'inline-block',
  },
  [`audio:not([controls])`]: {
    display: 'none',
    height: 0,
  },
  [`
  iframe,
  button`]: {
    border: 'none',
  },

  // Mostly text elements (h*, b, strong, hr, etc...)
  [`h1`]: {
    fontSize: '2em',
    margin: '.67em 0',
  },
  [`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6`]: {
    margin: 0,
    fontWeight: fontWeightRegular,
  },
  [`
  b,
  strong`]: {
    fontWeight: fontWeightBold,
  },
  [`blockquote`]: {
    margin: '1em 0 1em 40px',
  },
  [`hr`]: {
    height: 1,
    border: 0,
    borderTop: `1px solid ${colors.oriGrey[300]}`,
    padding: 0,
  },
  [`hr,
  p,
  pre`]: {
    margin: '1em 0',
  },
  [`
  code,
  pre`]: {
    fontSize: '10px',
    fontFamily: 'monospace, serif',
  },
  [`pre`]: {
    whiteSpace: 'pre-wrap',
  },
  [`small`]: {
    fontSize: '80%',
  },
  [`
  sub,
  sup`]: {
    fontSize: '75%',
    lineHeight: 0,
    position: 'relative',
    verticalAlign: 'baseline',
  },
  sup: {
    top: '-.5em',
  },
  sub: {
    bottom: '-.25em',
  },
  [`
  ol,
  ul`]: {
    margin: 0,
    padding: 0,
  },
  [`
  nav ol,
  nav ul`]: {
    listStyle: 'none',
    listStyleImage: 'none',
  },

  // Mostly images, SVGs..
  img: {
    border: 0,
    verticalAlign: 'middle',
    maxWidth: '100%',
    height: 'auto',
  },
  'svg:not(:root)': {
    overflow: 'hidden',
  },

  // Mostly form controls & elements
  fieldset: {
    margin: '0 2px',
    padding: '.35em .625em .75em',
  },
  'label[for]': {
    cursor: 'pointer',
  },
  legend: {
    border: 0,
    padding: 0,
  },
  [`
  button,
  input,
  select,
  textarea`]: {
    fontSize: '14px',
    margin: 0,
    verticalAlign: 'middle',
  },
  'button,input': {
    lineHeight: 'normal',
  },
  [`
  button,
  html input[type=button],
  input[type=reset],
  input[type=submit]`]: {
    webkitAppearance: 'button',
    cursor: 'pointer',
  },
  [`
  button[disabled],
  html input[disabled],
  input[disabled]`]: {
    cursor: 'default',
  },
  [`
  input[type=checkbox],
  input[type=radio]`]: {
    webkitBoxSizing: 'border-box',
    boxSizing: 'border-box',
    padding: 0,
  },
  [`
  button,
  select,
  textarea,
  a:focus,
  a:active,
  a:hover,
  :focus,
  input,
  input:focus,
  input[type=text],
  table:focus,
  textarea`]: {
    outline: 'none',
  },
  'input[type=text]::-ms-clear': {
    display: 'none',
  },
  textarea: {
    overflow: 'auto',
    verticalAlign: 'top',
  },
  [`
  button::-moz-focus-inner,
  input::-moz-focus-inner`]: {
    border: 0,
    padding: 0,
  },
  'input[type=search]': {
    boxSizing: 'content-box',
    webkitAppearance: 'textfield',
    webkitBoxSizing: 'content-box',
  },

  // Other
  table: {
    borderCollapse: 'collapse',
    borderSpacing: 0,
  },
  th: {
    fontWeight: fontWeightRegular,
  },
  [`
  body,
  button,
  figure`]: {
    margin: 0,
  },

  // Scrollbar
  '@media (hover: hover) and (pointer: fine)': {
    '&, & *': {
      msOverflowStyle: '-ms-autohiding-scrollbar',
      scrollbarWidth: 'thin',
      scrollbarColor: `${colors.oriGrey[300]} transparent`,
    },
    '::-webkit-scrollbar': {
      width: '15px',
      height: '15px',
    },
    '::-webkit-scrollbar-track': {
      background: 'transparent',
    },
    '::-webkit-scrollbar-thumb': {
      background: colors.oriGrey[300],
      borderRadius: '13px',
      border: '5px solid transparent',
      backgroundClip: 'content-box',
    },
  },
};

export default {
  styleOverrides,
};
