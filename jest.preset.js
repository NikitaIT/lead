const nxPreset = require('@nrwl/jest/preset').default;

// https://stackoverflow.com/questions/38332094/how-can-i-mock-webpacks-require-context-in-jest
const registerContext = require('path').resolve(
  __dirname,
  './.jest/register-context.js'
);
module.exports = {
  ...nxPreset,

  setupFiles: [...(nxPreset.setupFiles || []), registerContext],
};
