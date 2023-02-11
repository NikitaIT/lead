import {
  Components,
  PaletteColor,
  PaletteColorOptions,
  Theme,
} from '@mui/material';

export type ComponentsOverrides<
  T extends
    | keyof Components<Omit<Theme, 'components'>>
    | 'MuiDataGrid'
    | 'MuiCalendarPicker'
> = Required<
  Required<
    Components<Omit<Theme, 'components'>> & {
      MuiDataGrid: any;
      MuiCalendarPicker: any;
    }
  >[T]
>;

declare module '@mui/material' {
  export interface ChipPropsVariantOverrides {
    rounded: true;
  }
  export interface AlertPropsColorOverrides
    extends Record<keyof Palette, true> {
    default: true;
  }
  export interface ButtonPropsColorOverrides
    extends Record<keyof Palette, true> {
    default: true;
  }
  export interface ChipPropsColorOverrides
    extends Record<keyof Palette, true> {}

  export interface ButtonPropsColorOverrides
    extends Record<keyof Palette, true> {}

  export interface Palette {
    blue: PaletteColor;
    blueGrey: PaletteColor;
    brown: PaletteColor;
    default: PaletteColor;
    frontPage: PaletteColor;
    green: PaletteColor;
    offer: PaletteColor;
    pink: PaletteColor;
    purple: PaletteColor;
    red: PaletteColor;
    superApp: PaletteColor;
    yellow: PaletteColor;
  }
  export interface TypeText {
    hover: string;
  }
  export interface PaletteColor {
    default?: string;
    primary?: string;
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    A100: string;
    A200: string;
    A400: string;
    A700: string;
    A900: string;
  }

  export interface PaletteOptions {
    blue?: PaletteColorOptions;
    blueGrey?: PaletteColorOptions;
    brown?: PaletteColorOptions;
    default?: PaletteColorOptions;
    frontPage?: PaletteColorOptions;
    green?: PaletteColorOptions;
    offer?: PaletteColorOptions;
    pink?: PaletteColorOptions;
    purple?: PaletteColorOptions;
    red?: PaletteColorOptions;
    superApp?: PaletteColorOptions;
    yellow?: PaletteColorOptions;
  }
  export interface Color {
    default?: string;
    primary?: string;
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    A100: string;
    A200: string;
    A400: string;
    A700: string;
    A900: string;
  }
}
