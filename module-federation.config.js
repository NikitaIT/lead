const auth = require('./domains/auth/auth-shell/project.json');
const grid = require('./domains/grid/ag-grid-shell/project.json');
const home = require('./domains/home/home-shell/project.json');
const shell = require('./project.json');
const apollo = [
  '@apollo/client/utilities',
  '@apollo/client/link/subscriptions',
  '@apollo/client/link/context',
  '@apollo/client/link/error',
];
module.exports = {
  name: shell.name,
  remotes: [auth, grid, home].map((x) => x.name),
  // (libraryName: string, sharedConfig: SharedLibraryConfig) => undefined | false | SharedLibraryConfig
  shared: (libraryName, sharedConfig) => {
    // We want lodash to be tree shaken, and bundled into each host/remote separately.
    // if (libraryName === 'lodash') {
    //   return false;
    // }
    if (apollo.includes(libraryName)) {
      return {
        singleton: true,
        strictVersion: false,
        requiredVersion: '3.7.6',

        // "@apollo/client/utilities": "^3.7.6",
        // "@apollo/client/link/context": "^3.7.6",
        // "@apollo/client/link/subscriptions": "^3.7.6",
      };
    }
  },
  additionalShared: apollo.map((libraryName) => ({
    libraryName,
    sharedConfig: {
      singleton: true,
      strictVersion: false,
      requiredVersion: '3.7.6',
    },
  })),
};
