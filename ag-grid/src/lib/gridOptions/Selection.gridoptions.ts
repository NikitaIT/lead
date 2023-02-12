import { GridOptions } from 'ag-grid-community';

function _(): GridOptions {
  return {
    enableRangeSelection: false,
    rowSelection: 'multiple',
    // rowDeselection: true,
  };
}

export default _;
