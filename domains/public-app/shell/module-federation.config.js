module.exports = {
  name: 'public-app-shell',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};
