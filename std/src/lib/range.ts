export function range<U>(end: number, mapfn: (i: number) => U): U[] {
  return Array.from(new Array(end), function (_, i) {
    return mapfn(i);
  });
}
