import { CellRenderer } from './CellRenderer';
import { faker } from '@faker-js/faker';
import { CellData, CellValue, LinkRendererProps } from './ports';
import type { Meta } from '@lead/storybook-story';
import { testcases } from './testcases';
import { AgGridReact } from '@ag-grid-community/react';
import { useState } from 'react';
import { ColDef, GridOptions } from '@ag-grid-community/core';
import { getModules } from '../../../../../../lib/install/install';
const _: Meta<typeof CellRenderer> = {
  title: 'Components/Link/CellRenderer',
  component: CellRenderer,
  parameters: {
    docs: {
      // page: mdx,
    },

    options: {
      showPanel: true,
    },
  },
  argTypes: {
    value: {
      control: 'select',
      options: [
        'value',
        1,
        0,
        ...[1, 100].map((x) => faker.lorem.words(x)),
        null,
      ],
    },
    valueFormatted: {
      control: 'select',
      options: ['valueFormatted', 1, 0, null],
    },
  },
  args: testcases['valueFormatted should be visible'],
};

export const BasicUsage = function BasicUsage(
  props: LinkRendererProps<CellData, CellValue, unknown>
) {
  const [rowData] = useState([
    {
      make: 'Toyota Toyota Toyota Toyota Toyota',
      model: 'Celica',
      price: 35000,
      formatted: true,
    },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
  ]);

  const [columnDefs] = useState([
    {
      field: 'make',
      cellRenderer: 'cellRenderer',
      cellRendererParams: {
        href(x: any) {
          return x.value;
        },
      },
      valueFormatter: (x) => {
        if (x.data.formatted) {
          return 'formatted ' + x.value;
        }
        return x.value;
      },
      floatingFilter: true,
      filter: 'agSetColumnFilter',
      // floatingFilterComponent:
    },
    { field: 'model' },
    { field: 'price' },
  ] as ColDef[]);
  const gridOptions: GridOptions = {
    components: {
      cellRenderer: CellRenderer,
    },
  };
  return (
    <div style={{ width: '100%', height: 500 }} className="ag-theme-alpine">
      <AgGridReact
        modules={getModules()}
        columnDefs={columnDefs}
        rowData={rowData}
        gridOptions={gridOptions}
      />
    </div>
  );
};

export default _;
