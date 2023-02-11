/* eslint-disable @typescript-eslint/ban-types */
import { TreeItem, TreeView } from '@mui/lab';
import type { Theme } from '@mui/material';
import { Box, lighten } from '@mui/material';
import {
  ArrowRightThin as CollapseIcon,
  ArrowDownThin as ExpandIcon,
} from '@lead/shared/packages/icons';
import clsx from 'clsx';

import oriTheme from '../theme';

export default {
  title: 'Mui/Theme overview',
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

function getType(value: unknown) {
  if (Array.isArray(value)) {
    return 'array';
  }

  if (/^(#|rgb|rgba|hsl|hsla)/.test(String(value))) {
    return 'color';
  }

  if (value === null) {
    return 'null';
  }

  return typeof value;
}

function getLabel(value: unknown, type: ReturnType<typeof getType>) {
  switch (type) {
    case 'array':
      return `Array(${(value as unknown[]).length})`;
    case 'null':
      return 'null';
    case 'undefined':
      return 'undefined';
    case 'function':
      return `f ${(value as Function).name}()`;
    case 'object':
      return 'Object';
    case 'string':
      return `"${value}"`;
    case 'symbol':
      return `Symbol(${String(value)})`;
    default:
      return String(value);
  }
}

function getTokenType(type: ReturnType<typeof getType>) {
  switch (type) {
    case 'color':
      return 'string';
    case 'object':
    case 'array':
      return 'comment';
    default:
      return type;
  }
}

interface ObjectEntryLabelProps {
  objectKey: string;
  objectValue: Record<string, string | undefined> | string | undefined;
}

function ObjectEntryLabel({ objectKey, objectValue }: ObjectEntryLabelProps) {
  const type = getType(objectValue);
  const label = getLabel(objectValue, type);
  const tokenType = getTokenType(type);

  return (
    <>
      {`${objectKey}: `}
      {type === 'color' ? (
        <Box
          component="span"
          sx={{
            backgroundColor: '#fff',
            display: 'inline-block',
            marginBottom: -1,
            marginRight: 0.5,
            border: '1px solid',
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%202%202%22%3E%3Cpath%20d%3D%22M1%202V0h1v1H0v1z%22%20fill-opacity%3D%22.2%22%2F%3E%3C%2Fsvg%3E")',
          }}
          style={{ borderColor: lighten(label, 0.7) }}
        >
          <Box
            sx={{
              display: 'block',
              width: 11,
              height: 11,
            }}
            style={{ backgroundColor: label }}
          />
        </Box>
      ) : null}
      <span className={clsx('token', tokenType)}>{label}</span>
    </>
  );
}

interface ObjectEntryProps extends ObjectEntryLabelProps {
  nodeId: string;
}

function ObjectEntry({ nodeId, objectKey, objectValue }: ObjectEntryProps) {
  const keyPrefix = nodeId;
  let children = null;

  if (
    (objectValue != null && typeof objectValue === 'object') ||
    typeof objectValue === 'function'
  ) {
    children =
      Object.keys(objectValue).length === 0
        ? undefined
        : Object.keys(objectValue).map((key) => (
            <ObjectEntry
              key={key}
              nodeId={`${keyPrefix}.${key}`}
              objectKey={key}
              objectValue={objectValue[key]}
            />
          ));
  }

  return (
    <TreeItem
      sx={{
        '&:focus > $treeItemContent': {
          outline: `2px dashed ${lighten('#333', 0.3)}`,
        },
      }}
      nodeId={nodeId}
      label={
        <ObjectEntryLabel objectKey={objectKey} objectValue={objectValue} />
      }
    >
      {children}
    </TreeItem>
  );
}

interface InspectorProps {
  data: Theme;
}

function Inspector({ data, ...other }: InspectorProps) {
  const keyPrefix = '$ROOT';

  return (
    <TreeView
      defaultCollapseIcon={<ExpandIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
      defaultExpandIcon={<CollapseIcon />}
      {...other}
    >
      {Object.keys(data).map((objectKey) => (
        <ObjectEntry
          key={objectKey}
          nodeId={`${keyPrefix}.${objectKey}`}
          objectKey={objectKey}
          objectValue={data[objectKey as keyof Theme] as string}
        />
      ))}
    </TreeView>
  );
}

export const DefaultTheme = function DefaultTheme() {
  return <Inspector data={oriTheme} />;
};
