import { Module } from '@ag-grid-community/core';
import { CsvExportModule } from '@ag-grid-community/csv-export';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { InfiniteRowModelModule } from '@ag-grid-community/infinite-row-model';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import { SideBarModule } from '@ag-grid-enterprise/side-bar';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { StatusBarModule } from '@ag-grid-enterprise/status-bar';
import {
  addPaginationCompTemplateChild,
  createElementFromHTML,
} from '../gridOptions/PaginationComp';

addPaginationCompTemplateChild(
  createElementFromHTML(`<div class="AgPaginationTemplateContent"></div>`)
);
export function getModules(): Module[] {
  return [
    ClientSideRowModelModule,
    InfiniteRowModelModule,
    CsvExportModule,
    SideBarModule,
    MenuModule,
    ColumnsToolPanelModule,
    StatusBarModule,
  ];
}
