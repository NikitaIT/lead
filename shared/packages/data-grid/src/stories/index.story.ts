import type { Meta } from '@lead/storybook-story';

import { DataGridPro } from '..';

const configuration: Meta = {
  title: 'DataGrid/DataGrid',
  component: DataGridPro,
  parameters: {
    options: {
      showPanel: true,
    },
    actions: {
      argTypesRegex: '^on.*',
    },
  },
};

export default configuration;

export { Basic } from './Basic.story';
export { AggregatedData } from './AggregatedData.story';
export { Controlled } from './Controlled.story';
