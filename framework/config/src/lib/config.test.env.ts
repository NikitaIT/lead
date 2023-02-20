import { ConfigData } from './config.interface';
// tslint:disable:no-hardcoded-credentials

export const testEnvConfigData: ConfigData = {
  auth: {
    expireIn: 268000,
    jwtSecret: 'HELLO',
  },
  db: {
    url: 'postgres://api:development_pass@localhost:5433/config',
  },
  env: 'test',
  log: {
    logLevel: 'http',
    suppressDateAndLevelInMsg: true,
  },
  newRelicKey: '',
  port: 5003,
  sendGrid: {
    apiKey: '',
    verifiedEmail: '',
  },
};
