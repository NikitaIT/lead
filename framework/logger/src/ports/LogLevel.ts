const LogLevelEnum = {
  /** Critical error, system stability is affected. */
  error: 'error',

  /** Non-critical error, system stability is not affected, but issue should be investigated. */
  warn: 'warn',

  /** Informative message. */
  info: 'info',

  /** HTTP access logging. */
  http: 'http',

  /** More verbose informative message. */
  verbose: 'verbose',

  /** Message to assist with debugging. */
  debug: 'debug',

  /** Unnecessarily noisy or frequent message. */
  silly: 'silly',
} as const;
/**
 * Indicates the severity of a log message.
 */
export const LogLevel = Object.assign(LogLevelEnum, {
  /**
   * Determines if the value is a valid log level or not.
   * @param value the value to test
   * @returns true if a log level, false if not
   */
  is(value: unknown): value is LogLevel {
    if (typeof value !== 'string') {
      return false;
    }

    return Object.hasOwn(this, value);
  },
});
export type LogLevel = (typeof LogLevelEnum)[keyof typeof LogLevelEnum];
