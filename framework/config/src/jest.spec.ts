import jestConfig from '../jest.config';

describe('jest', () => {
  it(`jest.config.setupFiles should load an env`, () => {
    expect(jestConfig.setupFiles).toContain('./test/setEnvVars.js');
  });
});
