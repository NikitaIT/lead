import { SettingsTool } from '.';
import { ToolPanelContract } from '../ToolPanel/ToolPanelContract';

const _: ToolPanelContract = {
  id: 'settings',
  component: SettingsTool, //() => import('./index').then((x) => x.SettingsTool),
  params: { a: 3 },
};

export default _;
