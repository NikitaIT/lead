import { Roadmap } from './lib/roadmap';

export default {
  title: 'Components/Roadmap',
  parameters: {
    docs: {
      // page: mdx,
    },

    options: {
      showPanel: true,
    },
  },
  component: Roadmap,
};

export const BasicUsage = function BasicUsage() {
  return <Roadmap />;
};
