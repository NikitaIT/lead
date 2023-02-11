import styled from 'styled-components';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useState } from 'react';
/* eslint-disable-next-line */
export interface AgGridProps {}

const StyledAgGrid = styled.div`
  color: pink;
`;

export function AgGrid(props: AgGridProps) {
  const [rowData] = useState([
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
  ]);

  const [columnDefs] = useState([
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ]);
  const gridOptions = {};
  return (
    <StyledAgGrid
      className="ag-theme-alpine"
      style={{ width: '100%', height: 500 }}
    >
      <AgGridReact rowData={rowData} columnDefs={columnDefs}
      gridOptions={gridOptions}
      ></AgGridReact>
    </StyledAgGrid>
  );
}

export default AgGrid;
