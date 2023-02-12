export function powerset<T>(array: T[]): T[][] {
  // O(2^n)
  const results: T[][] = [[]];
  for (const value of array) {
    const copy = [...results]; // See note below.
    for (const prefix of copy) {
      results.push(prefix.concat(value));
    }
  }
  return results;
}

export const permutator = <T>(inputArr: T[]) => {
  const result: T[][] = [];

  const permute = (arr: T[], m: T[] = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        const curr = arr.slice();
        const next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };

  permute(inputArr);

  return result;
};
export const booleanPowerset = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
  [1, 0, 0],
  [0, 1, 1],
  [0, 1, 0],
  [0, 0, 1],
  [0, 0, 0],
].map((x) => x.map((x) => !!x));
