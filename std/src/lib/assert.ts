export class AssertionError extends Error {
  constructor(msg?: string, expected?: any) {
    super(msg + (expected ? JSON.stringify(expected, null, 2) : ''));
    this.name = 'AssertionError';
  }
}
export function assert(
  condition: any,
  msg?: string,
  expected?: any
): asserts condition {
  // asserts condition
  if (!condition) {
    throw new AssertionError(msg, expected);
  }
}
