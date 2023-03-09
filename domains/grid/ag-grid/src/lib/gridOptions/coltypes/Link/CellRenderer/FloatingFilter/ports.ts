import {
  IFilter,
  IFloatingFilterParams,
  IFloatingFilterParent,
} from '@ag-grid-community/core';

export type CellValue = string | number | null | undefined;
export type CellData = unknown;

export type InbuiltParentType = IFloatingFilterParent & IFilter;
export type FloatingFilterProps<TCellData, TProps> = Pick<
  IFloatingFilterParams<InbuiltParentType, TCellData>,
  keyof IFloatingFilterParams<InbuiltParentType, TCellData>
> &
  IFloatingFilterParams<
    TProps &
      Pick<
        IFloatingFilterParams<InbuiltParentType, TCellData>,
        keyof IFloatingFilterParams<InbuiltParentType, TCellData>
      >
  >;
