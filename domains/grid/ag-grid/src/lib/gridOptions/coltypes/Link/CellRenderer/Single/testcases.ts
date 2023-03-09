import { LinkRendererProps, CellData, CellValue } from './ports';

const _ = <T extends LinkRendererProps<CellData, CellValue, unknown>>(
  x: T
): T => x;

export const testcases = {
  'valueFormatted should be visible': _({
    value: 'value',
    valueFormatted: 'valueFormatted',
    href(params) {
      return `#${params.value}`;
    },
  } as const),
  'value should be visible': _({
    value: 'value',
    valueFormatted: null,
    href(params) {
      return `#${params.value}`;
    },
  } as const),
  'link should be hidden': _({
    value: undefined,
    valueFormatted: 'value',
    href(params) {
      return `#${params.value}`;
    },
  } as const),
} as const;
