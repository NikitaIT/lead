import styled from 'styled-components';
import { AgGridReact } from '@ag-grid-community/react';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { getModules } from './install/install';
import { createOptions } from './gridOptions/gridOptions';
import ReactDOM from 'react-dom';
import { assert } from '@lead/std';
/* eslint-disable-next-line */
export interface AgGridProps {}

const StyledAgGrid = styled.div``;

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
  const gridOptions = createOptions();
  const gridRef = useRef<HTMLDivElement | null>(null);
  const onGridReady = useCallback(() => {
    assert(gridRef.current);
    const template = gridRef.current.getElementsByClassName(
      'AgPaginationTemplateContent'
    )[0];
    assert(template);
    assert(template.childNodes.length === 0);
    ReactDOM.render(<div>ololo</div>, template);
  }, []);
  return (
    <StyledAgGrid
      ref={gridRef}
      className="ag-theme-alpine"
      style={{ width: '100%', height: 500 }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        onGridReady={onGridReady}
        gridOptions={gridOptions}
        modules={getModules()}
      ></AgGridReact>
    </StyledAgGrid>
  );
}

export default AgGrid;
