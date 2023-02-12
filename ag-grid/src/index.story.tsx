import { AgGrid } from './lib/ag-grid';

export default {
  title: 'Components/AgGrid',
  parameters: {
    docs: {
      // page: mdx,
    },

    options: {
      showPanel: true,
    },
  },
  component: AgGrid,
};

export const BasicUsage = function BasicUsage() {
  return <AgGrid />;
};
