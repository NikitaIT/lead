import { GridOptions } from '@ag-grid-community/core';

function _(): GridOptions {
  const treeGroup: GridOptions = {
    treeData: true, // enable Tree Data mode
    /** Callback to be used when working with Tree Data when `treeData = true`. */
    getDataPath(data) {
      return [
        data.account.name,
        ...(data.client ? [data.client.name] : []),
        data.campaign.name,
      ];
    },
  };

  return {
    groupSelectsChildren: true, // NOT WORKS WITH THREE DATA
    // animateRows: true, // we should use reduce motions system settings
    // rowGroupPanelShow: "always",
    groupDefaultExpanded: -1, // expand all groups by default

    // autoGroupColumnDef: {
    //   headerName: 'name',
    //   minWidth: 400,
    //   width: 400,
    //   cellRendererParams: {
    //     suppressCount: true,
    //     checkbox: true,
    //   },
    // },
    // autoGroupColumnDef: {
    //   colId: "group",
    //   width: 240,
    //   pinned: "left",
    //   cellRendererParams: {
    //     checkbox: true
    //   },
    //   filterValueGetter: params => {
    //     // ?? wtf
    //     const colGettingGrouped = params.colDef.showRowGroup as string;
    //     const valueForOtherCol = params.api!.getValue(
    //       colGettingGrouped,
    //       params.node
    //     );
    //     return valueForOtherCol;
    //   }
    // },
    // groupUseEntireRow: true,
    // suppressDragLeaveHidesColumns: true,
    suppressMakeColumnVisibleAfterUnGroup: true,
    // rowGroupPanelShow: 'always'
  };
}

export default _;
