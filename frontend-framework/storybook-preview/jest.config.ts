/* eslint-disable */
export default {
  displayName: 'storybook-preview',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  // transform: {
  //   '^.+\\.[tj]s$': 'ts-jest',
  // },
  // moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/storybook-preview',
};
