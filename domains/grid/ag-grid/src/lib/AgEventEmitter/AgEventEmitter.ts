import {
  AgEvent,
  FilterChangedEvent,
  FirstDataRenderedEvent,
  ModelUpdatedEvent,
} from '@ag-grid-community/core';

export type ListenerMap<TData = unknown> = {
  modelUpdated: ModelUpdatedEvent<TData>;
  filterChanged: FilterChangedEvent<TData>;
  firstDataRendered: FirstDataRenderedEvent<TData>;
  // write types map here
};

export type AgListener<Listener, TEvent extends AgEvent> = (
  this: Listener,
  e: TEvent,
  unsubscribe: Unsubscribe
) => void;

export interface AgEventEmitter<TGridApiData = unknown> {
  on<TData extends TGridApiData>(listener: AgEventListener<TData>): Unsubscribe;
}

export type AgEventListener<TData> = valuesAsUnion<
  valueAsEvent<ListenerMap<TData>>
>;

export type Unsubscribe = () => void;

type valuesAsUnion<T> = T[keyof T];

type valueAsEvent<TRecord extends Record<string, AgEvent>> = {
  [P in keyof TRecord]: _<P, TRecord[P]>;
};

interface _<_type, _event extends AgEvent> {
  type: _type;
  handleEvent: AgListener<unknown, _event>; // we can use context only in interface, so we allow to pass the class
}
