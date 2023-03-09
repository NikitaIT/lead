// import { ICellRendererParams } from '@ag-grid-community/core';

export interface CellRendererParams<T /** extends ICellRendererParams**/> {
  href(params: T & CellRendererParams<T>): string;
}
