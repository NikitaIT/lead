import type { StoryFn } from '@lead/storybook-story';
import type { DataGridProProps } from '..';
import { DataGridPro } from '..';

export const Template: StoryFn<DataGridProProps> = (args) => (
  <div style={{ height: 400, width: '100%' }}>
    <DataGridPro
      {...args}
      getRowClassName={(params) =>
        params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
      }
    />
  </div>
);
