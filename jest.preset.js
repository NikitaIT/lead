const nxPreset = require('@nrwl/jest/preset').default;

// https://stackoverflow.com/questions/38332094/how-can-i-mock-webpacks-require-context-in-jest
const registerContext = require('path').resolve(
  __dirname,
  './.jest/register-context.js'
);

const setEnvVars = require('path').resolve(__dirname, './.jest/setEnvVars.js');

module.exports = {
  ...nxPreset,

  setupFiles: [...(nxPreset.setupFiles || []), registerContext, setEnvVars],
};
