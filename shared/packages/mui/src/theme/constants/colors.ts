import type { Color } from '@mui/material';
import type {
  CommonColors,
  PaletteColor,
  Palette,
  TypeAction,
  TypeBackground,
  TypeText,
} from '@mui/material/styles/createPalette';

export const defaultColors: PaletteColor & any = {
  light: '#999999',
  main: '#333333',
  dark: '#2a2a2a',
  contrastText: '#fff',
};

export const error: PaletteColor & any = {
  light: '#ff8e8e',
  main: '#da3448',
  dark: '#c60d22',
  contrastText: '#fff',
};

export const frontPage: PaletteColor & any = {
  light: 'rgba(0,0,0,.088)',
  main: 'rgba(0,0,0,.088)',
  dark: 'rgba(255,255,255,.088)',
  contrastText: '#fff',
};

export const info: PaletteColor & any = {
  light: '#749fc7',
  main: '#2774ae',
  dark: '#003da5',
  contrastText: '#fff',
};

export const offer: PaletteColor & any = {
  light: '#f0effc',
  main: '#685bc7',
  dark: '#4a25aa',
  contrastText: '#fff',
};

export const primary: PaletteColor & any = {
  light: '#d2ebe2',
  main: '#68bb93',
  dark: '#489671',
  contrastText: '#fff',
};

export const secondary: PaletteColor & any = {
  light: '#80cdd0',
  main: '#007681',
  dark: '#00575f',
  contrastText: '#fff',
};

export const success: PaletteColor & any = {
  light: '#95e0c9',
  main: '#29b78c',
  dark: '#0e7c5d',
  contrastText: '#fff',
};

export const superApp: PaletteColor & any = {
  light: '#ff0000',
  main: '#c00d1e',
  dark: '#c00d1e',
  contrastText: '#fff',
};

export const warning: PaletteColor & any = {
  light: '#f8e59a',
  main: '#ffda5e',
  dark: '#ffcd00',
  contrastText: '#555',
};

export const text: TypeText & any = {
  primary: '#333',
  secondary: '#555',
  active: '#0e7c5d',
  disabled: '#666',
  hover: '#0e7c5d',
};

export const textExtra = {
  heading: '#555',
  contrast: '#777',
} as const;

export const action: Partial<TypeAction> = {
  disabledBackground: 'rgba(0, 0, 0, 0.06)',
  disabled: 'rgba(0, 0, 0, .3)',
};

export const commonColors: CommonColors = {
  white: '#fff',
  black: '#000',
};

// TODO [@lead/shared/packages/mui@3]: Remove extra background when migrated
export const background: TypeBackground & any = {
  paper: '#fff',
  default: '#fff',
  chromeWhite: '#e1efce',
  chatelle: '#b3b0c4',
  wafer: '#e4d5d3',
  newOrleans: '#f0bf9b',
  softAmber: '#d7c4b7',
  snowFlurry: '#dcffbd',
  viking: '#6ed0de',
  danube: '#6b93d7',
  bouquet: '#b36faf',
  kobi: '#eea7c2',
  porsche: '#efae6e',
  kournikova: '#ffda78',
  sandal: '#b48f73',
  wedgewood: '#4c919c',
  kashmirBlue: '#4c6c9c',
  trendyPink: '#856c98',
  strikeMaster: '#98607c',
  santaFe: '#b57363',
  tussock: '#c7984f',
  sandDune: '#837165',
  greenSpring: '#b9c5b8',
  athensGray: '#eaeaf0',
  pinkFlare: '#dfc2c3',
};

export const blueBackground: Partial<Palette['blue']> = {
  50: '#ceebef',
  100: '#7ed1ea',
  200: '#749fc7',
  300: '#2774ae',
  400: '#003da5',
};

export const blueGreyBackground: Partial<Palette['blueGrey']> = {
  50: '#d0d0ce',
  100: '#a7a8aa',
  200: '#888888',
  300: '#63666a',
  400: '#000000',
};

export const brownBackground: Partial<Palette['brown']> = {
  50: '#d7d2cb',
  100: '#b6ada5',
  200: '#a59c94',
  300: '#857874',
  400: '#5e514d',
};

export const greenBackground: Partial<Palette['green']> = {
  50: '#d2ebe2',
  100: '#91e7e3',
  200: '#80cdd0',
  300: '#00b7bd',
  400: '#007681',
};

export const pinkBackground: Partial<Palette['pink']> = {
  50: '#f5dadf',
  100: '#e793b7',
  200: '#d47d99',
  300: '#cf578a',
  400: '#c800a1',
};

export const purpleBackground: Partial<Palette['purple']> = {
  50: '#e0d2e7',
  100: '#b2afef',
  200: '#898cc3',
  300: '#685bc7',
  400: '#4a25aa',
};

export const redBackground: Partial<Palette['red']> = {
  50: '#f3cfb3',
  100: '#c36d6a',
  200: '#ff8072',
  300: '#e40046',
  400: '#9b2743',
};

export const yellowBackground: Partial<Palette['yellow']> = {
  50: '#f8e59a',
  100: '#f0c264',
  200: '#ffda5e',
  300: '#ffcd00',
  400: '#eb3300',
};

export const oriGrey: Color = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#e5e5e5',
  300: '#cccccc',
  400: '#bbbbbb',
  500: '#888888',
  600: '#777777',
  700: '#555555',
  800: '#444444',
  900: '#333333',
  A100: '#f0f0f0',
  A200: '#dddddd',
  A400: '#999999',
  A700: '#666666',
  A900: '#2a2a2a',
} as const;
