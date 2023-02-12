export type AnyComponentToolPanelContract = ToolPanelContract<unknown>;

export type ToolPanelContract<TComponentParams> =
  ToolPanelRequiredContract<TComponentParams> &
    Partial<ToolPanelAdditionalContract>;

export type Component<TParams> =
  | ((x: TParams) => Promise<any>)
  | ((x: TParams) => any)
  | any;

export type ToolPanelRequiredContract<TComponentParams> = {
  /** The unique ID for this panel. Used in the API and elsewhere to refer to the panel. */
  id: string;
  /**
   * The tool panel component to use as the panel.
   * The provided panels use components `agColumnsToolPanel` and `agFiltersToolPanel`.
   * To provide your own custom panel component, you reference it here.
   */
  component: Component<TComponentParams>;
  /** Customise the parameters provided to the `toolPanel` component. */
  params: TComponentParams;
};

export type ToolPanelAdditionalContract = {
  /** The min width of the tool panel. Default: `100` */
  minWidth: number;
  /** The max width of the tool panel. Default: `undefined` */
  maxWidth: number;
  /** The initial width of the tool panel. Default: `$side-bar-panel-width (theme variable)` */
  width: number;
};
