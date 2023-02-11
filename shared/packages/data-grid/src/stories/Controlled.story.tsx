import { useCallback, useState } from '@storybook/addons';
import type { StoryFn } from '@lead/storybook-story';

import type {
  DataGridProProps,
  GridColumnOrderChangeParams,
  GridColumnResizeParams,
} from '..';
import { useGridApiRef, DataGridPro } from '..';
import { GridControlPanelComponent } from './components';
import { ROWS, COLUMNS } from './data';
import type { UserColDef } from './data/columns';

function getNumericId(
  start?: number,
  end?: number,
  currentId?: number
): number {
  const min = start ?? 0;
  const max = end ?? 99;
  let newId = Math.floor(Math.random() * (max - min + 1)) + min;
  if (typeof currentId !== 'undefined' && currentId === newId) {
    newId += 1;
  }

  return newId;
}

function updatePinnedColumn(list: UserColDef[], field: string): UserColDef[] {
  const newList = list;
  const i = newList.findIndex((col) => col.field === field);
  const len = newList.length;

  if (i > 0 && len > i) {
    // remove old pinned and update position
    newList[0].pinned = false;
    newList[i].pinned = true;
    // handling position
    newList.splice(0, 0, newList.splice(i, 1)[0]);
  }

  return newList;
}

const Template: StoryFn<DataGridProProps> = (args) => {
  const {
    rows,
    columns,
    columnVisibilityModel,
    onColumnOrderChange,
    onColumnWidthChange,
    ...props
  } = args;

  const apiRef = useGridApiRef();
  const [pageSize, setPageSize] = useState<number>(5);
  const [columnVisibilityModelInternal, setColumnVisibilityModelInternal] =
    useState(columnVisibilityModel);
  const [columnsState, setColumnsState] = useState(columns);
  const [colUpdate, setColUpdate] = useState(0);

  const pinColumn = useCallback(
    (field: string) => {
      const pinnedColumns = { left: [field] };
      apiRef.current.setPinnedColumns(pinnedColumns);
      setColumnsState((prevState) => updatePinnedColumn(prevState, field));
      setColUpdate((prevState) => getNumericId(0, 99, prevState));
    },
    [apiRef]
  );

  const hideColumn = useCallback(
    (field: string) => {
      setColumnVisibilityModelInternal((prevState) => ({
        ...prevState,
        [field]: false,
      }));
      setColumnsState((prevState) => {
        const newState = prevState;
        const i = newState.findIndex((col) => col.field === field);
        const len = newState.length;
        if (i > -1 && len > 0) {
          // hide column
          (newState[i] as UserColDef).hidden = true;
          // handling position
          newState.splice(len, 0, newState.splice(i, 1)[0] as UserColDef);
        }
        apiRef.current.setColumnIndex(field, len - 1);

        return newState;
      });
      setColUpdate((prevState) => getNumericId(0, 99, prevState));
    },
    [apiRef]
  );

  const showColumn = useCallback(
    (field: string) => {
      setColumnVisibilityModelInternal((prevState) => ({
        ...prevState,
        [field]: true,
      }));
      setColumnsState((prevState) => {
        const newState = prevState;
        const i = newState.findIndex((col) => col.field === field);
        const len = newState.length;
        if (i > -1 && len > 0) {
          // un-hide column
          (newState[i] as UserColDef).hidden = false;
          // set position to first after pinned
          newState.splice(1, 0, newState.splice(i, 1)[0] as UserColDef);
        }
        apiRef.current.setColumnIndex(field, 1);

        return newState;
      });
      setColUpdate((prevState) => getNumericId(0, 99, prevState));
    },
    [apiRef]
  );

  const onColumnOrderChangeInternal = useCallback(
    (params: GridColumnOrderChangeParams) => {
      setColumnsState((prevState) => {
        const newState = prevState;
        const i = newState.findIndex((col) => col.field === params.field);
        newState.splice(
          params.targetIndex,
          0,
          newState.splice(i, 1)[0] as UserColDef
        );

        return newState;
      });
      setColUpdate((prevState) => getNumericId(0, 99, prevState));
    },
    []
  );

  const onColumnWidthChangeInternal = useCallback(
    (params: GridColumnResizeParams) => {
      setColumnsState((prevState) => {
        const newState = prevState;
        const i = newState.findIndex(
          (col) => col.field === params.colDef.field
        );
        (newState[i] as UserColDef).width = params.width;

        return newState;
      });
      setColUpdate((prevState) => getNumericId(0, 99, prevState));
    },
    []
  );

  return (
    <div style={{ height: 400, width: '100%', display: 'flex', gap: '30px' }}>
      <DataGridPro
        apiRef={apiRef}
        columns={columnsState}
        columnVisibilityModel={columnVisibilityModelInternal}
        rows={rows}
        pageSize={pageSize}
        onColumnOrderChange={onColumnOrderChangeInternal}
        onColumnWidthChange={onColumnWidthChangeInternal}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        {...props}
      />
      <GridControlPanelComponent
        columns={columnsState}
        hideColumn={hideColumn}
        showColumn={showColumn}
        pinColumn={pinColumn}
        colUpdate={colUpdate}
      />
    </div>
  );
};

// user's profile (configuration) of datagrid
const savedProfile = [
  { field: 'name', width: 140, pinned: true },
  { field: 'brandPartnerNumber', width: 60 },
  { field: 'email', width: 140 },
  { field: 'birthDate', width: 100 },
  { field: 'consultantTypeName', width: 100 },
  { field: 'recruited1', width: 60 },
  { field: 'starters1', width: 60 },
  { field: 'discount', width: 60 },
  { field: 'bp', width: 60 },
  { field: 'groupbp', width: 80 },
  { field: 'newDiscountRateAchieved', width: 40 },
  { field: 'sponsorName', width: 100 },
  { field: 'sponsorNumber', width: 60 },
  { field: 'id', width: 20, hidden: true },
];
// transform array with basic column definition to associative collection for better lookup
const columnsMap = COLUMNS.reduce(
  (map, column) => map.set(column.field, column),
  new Map<string, UserColDef>()
);
// merge basic column definition with data saved in user's profile
const columnsWithProfileConfiguration = savedProfile.map((profile) => ({
  ...columnsMap.get(profile.field),
  ...profile,
}));
// create the visibility model
const initialColumnVisibilityModel = Object.fromEntries(
  columnsWithProfileConfiguration.map((col) => [col.field, !col.hidden])
);
// find pinned column(s)
const initiallyPinnedColumn = savedProfile.find((a) => a.pinned)?.field ?? '';

export const Controlled = Template.bind({});
Controlled.args = {
  columns: columnsWithProfileConfiguration,
  columnVisibilityModel: initialColumnVisibilityModel,
  rows: ROWS,
  density: 'compact',
  disableColumnMenu: true,
  disableMultipleColumnsSorting: true,
  disableSelectionOnClick: true,
  pagination: true,
  paginationMode: 'client',
  rowsPerPageOptions: [5, 10, 15, 50],
  sortingMode: 'client',
  initialState: { pinnedColumns: { left: [initiallyPinnedColumn] } },
};
