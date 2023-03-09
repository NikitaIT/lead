import { EditXHtml } from '@lead/html-lang';
EditXHtml.useNative();

export const globalTypes = {
  theme: {
    name: 'Theme',
    title: 'Theme',
    description: 'Theme for your components',
    defaultValue: 'light',
    toolbar: {
      icon: 'paintbrush',
      dynamicTitle: true,
      items: [
        { value: 'light', left: '☀️', title: 'Light mode' },
        { value: 'dark', left: '🌙', title: 'Dark mode' },
      ],
    },
  },
  // add axe overrides
  // a11y: {
  //   config: {
  //     rules: [
  //       {
  //         id: 'listItem',
  //         enable: false,
  //       },
  //     ],
  //   },
  // },
};
