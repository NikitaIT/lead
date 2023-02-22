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
      // 'instruments',
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
      icons: {
        'icon-settings': `<div style="width:15px;height:15px;"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
      </div>
      `,
      },
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
export function collectGridOptions(): (() => GridOptions)[] {
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
