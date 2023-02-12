import { GridOptions } from '@ag-grid-community/core';
import { byId } from '@lead/std';
import { ToolPanelPropCreator, ToolPanels } from './ToolPanel';
import { ToolPanelContract } from './ToolPanel/ToolPanelContract';

export function createOptions(): GridOptions {
  const gridOptionsDefs = collectGridOptions().map((x) => x());
  console.debug('[ag-grid] GridOptions collected:', gridOptionsDefs);
  const toolPanelContacts = collectToolPanelContacts();
  console.debug('[ag-grid] Sidebars collected:', toolPanelContacts);
  const sideBar = ToolPanels.toDef({
    visibleOrdered: [
      'instruments',
      'columns',
      'settings',
      // add or sort panels
    ],
    defaultPanel: 'columns',
    toToolPanelProp: ToolPanelPropCreator({
      // todo: move labelKey to localization context
      labelKey: (_) => `ag.toolpanel.${_.id}`,
      // todo: move iconKey to icons context
      iconKey: (_) => `icon-${_.id}`,
      // todo: lazy loading
      readContract: (id) => toolPanelContacts.find(byId(id)),
    }),
  });
  return [
    ...gridOptionsDefs,
    {
      sideBar,
    },
  ].reduce((acc, x) => ({ ...acc, ...x }), gridOptions);
}
const gridOptions: GridOptions = {
  ...({ allowUserDataCol: true } as any),
  suppressMaintainUnsortedOrder: true,
  // icons,
  // context: createContext(context),

  /* Debug */
  suppressPropertyNamesCheck: true,
  statusBar: {
    statusPanels: [
      {
        statusPanel: 'agTotalAndFilteredRowCountComponent',
        align: 'right',
      },
    ],
  },
  /* Common */
  // suppressRowTransform: true,

  /* Data model */
  // deltaRowDataMode: true,
  // getRowNodeId(row) {
  //   return row.campaign.id;
  // },
  // onColumnVisible: onColumnVisible
};
export function collectGridOptions() {
  const component = require.context('../', true, /.gridoptions.ts/);
  if (module.hot) {
    module.hot.accept(component.id);
  }
  return component
    .keys()
    .map((key) => component(key).default)
    .filter((x) => x); // if empty file
}

export function collectToolPanelContacts(): ToolPanelContract[] {
  const component = require.context('../', true, /.toolpanel.ts/);
  if (module.hot) {
    module.hot.accept(component.id);
  }
  return component
    .keys()
    .map((key) => component(key).default)
    .filter((x) => x);
}
