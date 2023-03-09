import { ICellRendererParams } from '@ag-grid-community/core';
import { CellRendererParams } from './CellRendererParams';

export type CellValue = string | number | null | undefined;
export type CellData = unknown;

export type LinkRendererProps<TCellData, TCellValue, TProps> = Pick<
  ICellRendererParams<TCellData, TCellValue>,
  'valueFormatted' | 'value'
> &
  CellRendererParams<
    TProps &
      Pick<
        ICellRendererParams<TCellData, TCellValue>,
        'valueFormatted' | 'value'
      >
  >;
