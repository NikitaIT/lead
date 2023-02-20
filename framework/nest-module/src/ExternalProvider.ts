import {
  ClassProvider,
  DynamicModule,
  ExistingProvider,
  FactoryProvider,
  ForwardReference,
  Type,
  ValueProvider,
} from '@nestjs/common';

export type WithoutInterface<T extends { provide: unknown }> = Omit<
  T,
  'provide'
>;

export type ExternalProvider<T> =
  | WithoutInterface<ClassProvider<T>>
  | WithoutInterface<ValueProvider<T>>
  | WithoutInterface<FactoryProvider<T>>
  | WithoutInterface<ExistingProvider<T>>;
export type ImportsForExternalProvider = Array<
  Type<unknown> | DynamicModule | Promise<DynamicModule> | ForwardReference
>;
