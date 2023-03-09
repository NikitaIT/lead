const nxPreset = require('@nrwl/jest/preset').default;

// https://stackoverflow.com/questions/38332094/how-can-i-mock-webpacks-require-context-in-jest
const registerContext = require('path').resolve(
  __dirname,
  './.jest/register-context.js'
);

const setEnvVars = require('path').resolve(__dirname, './.jest/setEnvVars.js');
const axe = require('path').resolve(__dirname, './.jest/axe.js');
const lang = require('path').resolve(
  __dirname,
  'dist/frontend-framework/html-lang/src/index.js'
);

module.exports = {
  ...nxPreset,
  setupFilesAfterEnv: [...(nxPreset.setupFilesAfterEnv || []), axe, lang],
  setupFiles: [...(nxPreset.setupFiles || []), registerContext, setEnvVars],
};
