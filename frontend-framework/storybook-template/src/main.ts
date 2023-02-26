import type { StorybookConfig } from '@storybook/react-webpack5';
import { remarkCodeHike } from '@code-hike/mdx';
import remarkGfm from 'remark-gfm';
// https://github.com/microsoft/TypeScript/issues/43940
// eslint-disable-next-line @typescript-eslint/no-var-requires
const theme = require('shiki/themes/dark-plus.json');

export const config: StorybookConfig = {
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../src/**/*.story.@(js|jsx|ts|tsx|mdx)',
    '../src/**/*.@(mdx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@nrwl/react/plugins/storybook',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        transcludeMarkdown: true, //👈 Set transcludeMarkdown to true
      },
    },
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config, options) => {
    const rule = (config.module?.rules || []).find((rule) =>
      typeof rule != 'string'
        ? rule.test?.toString().endsWith('\\.mdx$/')
        : false
    );
    (rule as any).use[0].options.mdxCompileOptions.remarkPlugins.push(
      ...[
        //👈 Add code blocks
        [remarkCodeHike, { theme, lineNumbers: false, showCopyButton: true }],
        [remarkGfm], //👈 Add tables
      ]
    );
    return config;
  },
};

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
