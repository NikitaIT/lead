export class AssertionError extends Error {
  constructor(msg?: string, expected?: unknown) {
    super(msg + (expected ? JSON.stringify(expected, null, 2) : ''));
    this.name = 'AssertionError';
  }
}
export function assert(
  condition: unknown,
  msg?: string,
  expected?: unknown
): asserts condition {
  // asserts condition
  if (!condition) {
    throw new AssertionError(msg, expected);
  }
}
