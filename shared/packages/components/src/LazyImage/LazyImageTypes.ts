import { StyledComponent } from 'styled-components';

export type LazyImageProps = OwnerState;
export type LazyImageTypeMap = {
  props: LazyImageProps;
  defaultComponent: React.ElementType;
};
export type OwnerState = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  classes?: Record<string, string>;
  shouldThrowError: boolean;
  enableSuspense: boolean;
  errorFallback: null | JSX.Element;
  fallback: any;
  imgRef: any;
  sx: any;
  component: React.ElementType<any> | undefined;
  didIntersect: boolean;
  SuspenseImageProps: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
  imgProps: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
} & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;
