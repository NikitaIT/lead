const ModeEnum = {
  colaboration: 'colaboration',
  commit: 'commit',
} as const;
/**
 * Indicates the severity of a log message.
 */
export const Mode = Object.assign(ModeEnum, {
  /**
   * Determines if the value is a valid log level or not.
   * @param value the value to test
   * @returns true if a log level, false if not
   */
  is(value: unknown): value is Mode {
    if (typeof value !== 'string') {
      return false;
    }

    return Object.hasOwn(this, value);
  },
});
export type Mode = (typeof ModeEnum)[keyof typeof ModeEnum];
