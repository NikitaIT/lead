import { ColDef } from '@ag-grid-community/core';

export interface ColType {
  type: string;
  colDef: ColDef;
}

export type ColTypeContract = () => ColType;


export const colTypes = [
  {
    type: "number",
    name: "число"
  },
  {
    type: "stat",
    name: "статистика"
  },
  {
    type: "limit",
    name: "лимит"
  }
];