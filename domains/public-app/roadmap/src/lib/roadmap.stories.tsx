import { Roadmap as Comp, RoadmapProps as Props } from './roadmap';
import type { Meta } from '@lead/storybook-story';

const _: Meta<typeof Comp> = {
  title: 'Roadmap',
  component: Comp,
  argTypes: {
    text: { control: 'select', options: ['Kek', 'Lol'] },
  },
  args: {
    text: 'Lol',
  },
};

// This is the only named export in the file, and it matches the component name
export const Default2 = (args: Props) => {
  return <Comp {...args} />;
};

export default _;
