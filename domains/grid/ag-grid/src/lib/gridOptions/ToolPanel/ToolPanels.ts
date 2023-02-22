import { SideBarDef, ToolPanelDef } from '@ag-grid-community/core';
import { ToolPanelContract } from './ToolPanelContract';
import { isNotUndefined, assert } from '@lead/std';

export type ToolPanels<TId extends string> = {
  /* tool panels rendered in same order as in array */
  visibleOrdered: readonly TId[];
  // todo: assert key of visibleOrdered in types
  defaultPanel: TId;
  toToolPanelProp: ToolPanelPropCreator<TId>;
};

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ToolPanels {
  export function toDef<TId extends string>({
    visibleOrdered,
    defaultPanel,
    toToolPanelProp,
  }: ToolPanels<TId>): SideBarDef {
    assert(
      visibleOrdered.includes(defaultPanel),
      '[ToolPanels] Add defaultPanel to visibleOrdered:',
      { visibleOrdered: [defaultPanel] }
    );
    return {
      /**
       * @type (ToolPanelDef | string) []
       */
      toolPanels: visibleOrdered.map(toToolPanelProp).filter(isNotUndefined),
      defaultToolPanel: defaultPanel,
    };
  }
}
export type ContractReader<TId> = {
  readContract: (id: TId) => ToolPanelContract | undefined;
};
export type ToolPanelPropCreator<TId extends string> = (
  id: TId
) => string | ToolPanelDef;
export function ToolPanelPropCreator<TId extends string>(
  owner: ToolPanelContract.Mapper & ContractReader<TId>
): ToolPanelPropCreator<TId> {
  return (id) => {
    const contract = owner.readContract(id);
    return contract ? ToolPanelContract.toDef(owner, contract) : id;
  };
}
