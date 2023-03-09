import type { Meta } from '@lead/storybook-story';
import { Playground } from './index';

const _: Meta<typeof Playground> = {
  title: 'Components/Playground',
  component: Playground,
  parameters: {
    docs: {
      // page: mdx,
    },

    options: {
      showPanel: true,
    },
  },
  argTypes: {},
  // args: testcases['valueFormatted should be visible'],
};

export const BasicUsage = function BasicUsage() {
  return <Playground />;
};

export default _;
