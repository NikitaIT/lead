import { LinkRenderer } from './LinkRenderer';
import { faker } from '@faker-js/faker';
import { CellData, CellValue, LinkRendererProps } from './ports';
import type { Meta } from '@lead/storybook-story';
import { testcases } from './testcases';
const _: Meta<typeof LinkRenderer> = {
  title: 'Components/Link/LinkRenderer',
  component: LinkRenderer,
  parameters: {
    docs: {
      // page: mdx,
    },

    options: {
      showPanel: true,
    },
  },
  argTypes: {
    value: {
      control: 'select',
      options: [
        'value',
        1,
        0,
        ...[1, 100].map((x) => faker.lorem.words(x)),
        null,
      ],
    },
    valueFormatted: {
      control: 'select',
      options: ['valueFormatted', 1, 0, null],
    },
  },
  args: testcases['valueFormatted should be visible'],
};

export const BasicUsage = function BasicUsage(
  props: LinkRendererProps<CellData, CellValue, unknown>
) {
  return <LinkRenderer {...props} />;
};

export default _;
