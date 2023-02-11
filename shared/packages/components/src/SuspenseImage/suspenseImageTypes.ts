import React from 'react';
import { UseSuspenseImageProps } from '../useSuspenseImage';

export type OwnerState = {
  classes?: Record<string, string>;
  component: React.ElementType<any> | undefined;
  className: string;
  errorFallback: React.ReactElement;
  isLoaded: boolean;
  error: ErrorEvent | undefined;
} & UseSuspenseImageProps;
export type SuspenseImageProps = OwnerState;
export type SuspenseImageTypeMap = {
  props: SuspenseImageProps;
  defaultComponent: React.ElementType;
};
