import { getJestProjects } from '@nrwl/jest';

export default {
  projects: getJestProjects(),
  setupFiles: ['./.jest/setEnvVars.js'],
};
