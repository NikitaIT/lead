import { assert, isFelsely } from '@lead/std';
import { LinkRendererProps, CellData, CellValue } from './ports';

export function LinkRenderer<
  TProps extends LinkRendererProps<TCellData, TCellValue, TProps>,
  TCellData extends CellData = CellData,
  TCellValue extends CellValue = CellValue
>(props: TProps): React.ReactElement | null {
  /** if href not defined it's incorrect usage */
  assert(
    props.href,
    /** this msg should be placed outside of component, and provided as config validator */
    `Please, set colDef.cellRendererParams.href = (params: LinkCellRendererParams) => params.value`
  );
  /** we can override formater for link value or value getter */
  const valueFormatted = isFelsely(props.valueFormatted)
    ? props.value
    : props.valueFormatted;
  const noValue = isFelsely(props.value);
  /**
   * we expect that link href id is value
   * if id not defined we can skip href formatter
   */
  const mayBeLink = noValue && props.href(props);

  const hideLink = !mayBeLink;

  return (
    // we should provide same interface for all components
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {hideLink ? (
        valueFormatted
      ) : (
        /** we can override formater for link href */
        <XHtml.a href={mayBeLink} target="_blank" rel="noreferrer">
          {valueFormatted}
        </XHtml.a>
      )}
    </>
  );
}
