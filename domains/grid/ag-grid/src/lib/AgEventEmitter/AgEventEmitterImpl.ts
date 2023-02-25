import { GridApi } from '@ag-grid-community/core';
import {
  AgEventEmitter,
  AgEventListener,
  ListenerMap,
  Unsubscribe,
} from './AgEventEmitter';

export class AgEventEmitterImpl<TGridApiData = unknown>
  implements AgEventEmitter<TGridApiData>
{
  constructor(private api: GridApi<TGridApiData>) {}
  on<TData extends TGridApiData>(
    listener: AgEventListener<TData>
  ): Unsubscribe {
    const unsubscribe = () => this.api.removeEventListener(listener.type, fn);
    function fn(e: unknown) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return listener.handleEvent(e as any, unsubscribe);
    }

    this.api.addEventListener(listener.type, fn);

    return unsubscribe;
  }
}
