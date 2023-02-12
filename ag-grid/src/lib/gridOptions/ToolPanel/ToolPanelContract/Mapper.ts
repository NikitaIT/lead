import { ToolPanelDef } from '@ag-grid-community/core';
import { AnyComponentToolPanelContract } from './Contract';

export type ToolPanelContract = AnyComponentToolPanelContract;

export namespace ToolPanelContract {
  export interface Mapper {
    labelKey(_: AnyComponentToolPanelContract): string;
    iconKey(_: AnyComponentToolPanelContract): string;
  }
  export function toDef(
    to: Mapper,
    _: AnyComponentToolPanelContract
  ): ToolPanelDef {
    return {
      /** The unique ID for this panel. Used in the API and elsewhere to refer to the panel. */
      id: _.id,
      /** The key used for localisation for displaying the label. The label is displayed in the tab button. */
      labelKey: to.labelKey(_),
      /** The default label if `labelKey` is missing or does not map to valid text through localisation. */
      labelDefault: _.id,
      /** The key of the icon to be used as a graphical aid beside the label in the side bar. */
      iconKey: to.iconKey(_),

      /**
       * The tool panel component to use as the panel.
       * The provided panels use components `agColumnsToolPanel` and `agFiltersToolPanel`.
       * To provide your own custom panel component, you reference it here.
       */
      toolPanel: _.component, // same as toolPanelFramework v27+
      /** Customise the parameters provided to the `toolPanel` component. */
      toolPanelParams: _.params,

      /** The min width of the tool panel. Default: `100` */
      minWidth: _.minWidth,
      /** The max width of the tool panel. Default: `undefined` */
      maxWidth: _.maxWidth,
      /** The initial width of the tool panel. Default: `$side-bar-panel-width (theme variable)` */
      width: _.width,
    };
  }
}
