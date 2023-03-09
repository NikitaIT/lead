import { ICellRendererParams } from '@ag-grid-community/core';
import { ICellRendererReactComp } from '@ag-grid-community/react';

import { forwardRef, useImperativeHandle } from 'react';
import { IsCellRendererStateless } from '../../../../CellRenderer';
import { CellRendererParams } from './CellRendererParams';
import { LinkRenderer } from './LinkRenderer';
import { CellData, CellValue } from './ports';

export const isCellRendererStateless: IsCellRendererStateless = true;

export const CellRenderer = forwardRef<
  ICellRendererReactComp,
  ICellRendererParams<CellData, CellValue> &
    CellRendererParams<ICellRendererParams<CellData, CellValue>>
>((props, ref) => {
  /**
   * todo: better to use class and extract it to base class or trait
   * why: we can't forward both HTMLAnchorElement ref and ag-grid class ref
   * */
  useImperativeHandle(ref, () => {
    return {
      refresh(params) {
        return isCellRendererStateless;
      },
    };
  });
  return <LinkRenderer {...props}></LinkRenderer>;
});
