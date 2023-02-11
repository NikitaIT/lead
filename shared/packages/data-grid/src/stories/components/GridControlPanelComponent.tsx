import {
  Add,
  CheckCircleFilled,
  CheckCircle,
  Remove,
} from '@lead/shared/packages/icons';
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@lead/shared/packages/mui';
import type { FC } from 'react';
import { useCallback } from 'react';

import type { UserColDef } from '../data/columns';

export interface GridControlColDef {
  field: string;
  title: string;
  width: number;
  visible: boolean;
}

export interface GridControlPanelComponentProps {
  readonly columns: ReadonlyArray<Readonly<UserColDef>>;
  hideColumn: (field: string) => void;
  showColumn: (field: string) => void;
  pinColumn: (field: string) => void;
  colUpdate: number;
}

export const GridControlPanelComponent: FC<GridControlPanelComponentProps> = ({
  columns,
  hideColumn,
  showColumn,
  pinColumn,
  colUpdate,
}) => {
  const handleHideColumn = useCallback(
    (field: string, visible: boolean) => () => {
      if (visible) {
        hideColumn(field);
      } else {
        showColumn(field);
      }
    },
    [hideColumn, showColumn]
  );

  const handlePinColumn = useCallback(
    (field: string) => () => pinColumn(field),
    [pinColumn]
  );

  return (
    <div>
      <h2>Columns ({columns.length})</h2>
      <List data-change={colUpdate}>
        {columns.map((col) => (
          <ListItem
            key={col.field}
            secondaryAction={
              typeof col.hideable === 'undefined' || col.hideable ? (
                <IconButton
                  edge="end"
                  size="small"
                  color={col.hidden ? 'primary' : 'error'}
                  onClick={handleHideColumn(col.field, !col.hidden)}
                >
                  {col.hidden ? (
                    <Add fontSize="inherit" />
                  ) : (
                    <Remove fontSize="inherit" />
                  )}
                </IconButton>
              ) : null
            }
            sx={{ paddingLeft: 0 }}
          >
            {col.pinnable ? (
              <ListItemButton
                dense
                role={undefined}
                onClick={handlePinColumn(col.field)}
              >
                <ListItemIcon>
                  {col.pinned ? <CheckCircleFilled /> : <CheckCircle />}
                </ListItemIcon>
                <ListItemText primary={`${col.headerName} (${col.width})`} />
              </ListItemButton>
            ) : (
              <ListItemText primary={`${col.headerName} (${col.width})`} />
            )}
          </ListItem>
        ))}
      </List>
    </div>
  );
};
