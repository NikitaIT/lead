import { Banner, BannerProps } from './banner';
import type { Meta } from '@lead/storybook-story';

const _: Meta<typeof Banner> = {
  title: 'Banner',
  component: Banner,
  argTypes: {
    text: { control: 'select', options: ['Kek', 'Lol'] },
  },
  args: {
    text: 'Lol',
  },
};

// This is the only named export in the file, and it matches the component name
export const Default2 = (args: BannerProps) => {
  return <Banner {...args} />;
};

export default _;
