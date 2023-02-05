import { Banner, BannerProps } from './banner';
import { ComponentMeta } from '@storybook/react';

const _: ComponentMeta<typeof Banner> = {
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
export const Default = (args: BannerProps) => {
  return <Banner {...args} />;
};
export default _;
