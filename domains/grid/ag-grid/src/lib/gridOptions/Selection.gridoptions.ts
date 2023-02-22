import { GridOptions } from '@ag-grid-community/core';

function _(): GridOptions {
  return {
    enableRangeSelection: false,
    rowSelection: 'multiple',
    // rowDeselection: true,
  };
}

export default _;
