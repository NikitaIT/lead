export function isNotNullOrUndefined<T>(x: T | null | undefined): x is T {
  return x !== null && isNotUndefined(x);
}
export function isNullOrUndefined<T>(
  x: T | null | undefined
): x is null | undefined {
  return !isNotNullOrUndefined(x);
}
export function isNotUndefined<T>(x: T | undefined): x is T {
  return x !== undefined;
}
export function isNotEmpty<T>(x: T | ''): x is T {
  return x !== '';
}
export function isNotEmptyList<T>(getter: (x: T) => ArrayLike<any>) {
  return (x: T) => getter(x).length !== 0;
}
export function decodeHTML(html: string): string {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}

export function splitTextBySplitter(text: string): string[] {
  return text.split(/[\r\n]+| |,|;/).filter((x) => x.trim().length);
}
export function parseIds(text: string): number[] {
  return splitTextBySplitter(text)
    .map((x) => parseInt(x, 10))
    .filter((x) => x);
}
export function toSplitedBy(
  splitter: { [Symbol.split](string: string, limit?: number): string[] },
  limit?: number
): (x: string) => string[] {
  return (x: string) => x.split(splitter, limit);
}
export function trim(x: string) {
  return x.trim();
}
export function withParent<TItem1, TItem2>(
  filterFn: (x: TItem1) => boolean,
  hasParent: (x: TItem2) => boolean | number
) {
  let a = 0;
  return (x: TItem1 & TItem2) => {
    const ok = filterFn(x);
    if (hasParent(x)) {
      if (ok) {
        a++;
      }
    } else if (a !== 0) {
      a = 0;
      return true;
    }
    return ok;
  };
}
export type ArrayDiff<T> = {
  added: T[];
  deleted: T[];
};
export function getSetDiff<T>(newIds: Set<T>, oldIds: Set<T>): ArrayDiff<T> {
  return {
    added: [...newIds].filter((x) => !oldIds.has(x)),
    deleted: [...oldIds].filter((x) => !newIds.has(x)),
  };
}
/**
 * Удобен для создания comparator
 * @param f1 (x: MyType) => x.id
 * @param f2 (a, b) => a - b
 */
export function mapArgs2<TArg, TK, S>(
  f1: (x: TArg) => TK,
  f2: (a: TK, b: TK) => S
): (a: TArg, b: TArg) => S {
  return (a: TArg, b: TArg) => f2(f1(a), f1(b));
}
export function mapArgs1<TArg, TK, S>(
  f1: (x: TArg) => TK,
  f2: (a: TK) => S
): (a: TArg) => S {
  return (a: TArg) => f2(f1(a));
}
export function sub(a: number, b: number) {
  return a - b;
}
export function unique<T>(values?: ReadonlyArray<T> | null) {
  return Array.from(new Set(values));
}
export function byId<K, T extends K = K>(id: T, castId?: (x: any) => any) {
  if (!castId) {
    return (x: { id: K }) => x.id === id;
  }
  const tmpId = castId(id);
  return (x: { id: K }) => castId(x.id) === tmpId;
}

export function include2<T>(arr: T[], f1: T, f2: T): boolean {
  return arr.includes(f1) && arr.includes(f2);
}
