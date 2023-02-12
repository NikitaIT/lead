import {
  FastEachIterable,
  Filtrable,
  Findable,
  Foldable,
  Mapable,
} from './CollectionBehaviors';

type ArrayLikeMap<K, V> = Mapable<V> &
  Filtrable<V> &
  Findable<V> &
  Foldable<K, V>;
type ExtendMap<K, V> = ArrayLikeMap<K, V> &
  FastEachIterableMap<K, V> &
  FastEachIterableReadonlyMap<K, V> &
  FastEachIterableExtendedMapImpl<K, V>;
export type FastEachIterableMap<K, V> = FastEachIterable<K, V, Map<K, V>>;
export type FastEachIterableReadonlyMap<K, V> = FastEachIterable<
  K,
  V,
  ReadonlyMap<K, V>
>;
export type FastEachIterableExtendedMapImpl<K, V> = FastEachIterable<
  K,
  V,
  ExtendedMap<K, V>
>;
type FalsyWithout0 = false | null | undefined | '';

// Not hold items as array. Lazy iterable.
export class ExtendedMap<K, V> extends Map<K, V> implements ExtendMap<K, V> {
  filterMap<U>(
    callbackfn: (value: V, key: K, map: this) => U
  ): Exclude<U, FalsyWithout0>[] {
    const result: Exclude<U, FalsyWithout0>[] = [];
    for (const [key, value] of this.entries()) {
      const falsyValue = callbackfn(value, key, this);
      if (falsyValue || typeof falsyValue === 'number') {
        result.push(falsyValue as Exclude<U, FalsyWithout0>);
      }
    }
    return result;
  }

  flatMap<U>(callbackfn: (value: V, key: K, map: this) => U[]): U[] {
    const result: U[] = [];
    for (const [key, value] of this.entries()) {
      const arr = callbackfn(value, key, this);
      for (const innerVal of arr) {
        result.push(innerVal);
      }
    }
    return result;
  }

  reduce<U = V>(
    callbackfn: (previousValue: U, currentValue: V, key: K, map: this) => U,
    initialValue?: U
  ): U {
    let prevValue = initialValue;
    if (typeof prevValue === 'undefined') {
      if (this.size === 0) {
        throw new TypeError('Reduce of empty array with no initial value');
      }
      prevValue = this.values().next().value as unknown as U;
    }
    for (const [key, value] of this.entries()) {
      prevValue = callbackfn(prevValue, value, key, this);
    }
    return prevValue;
  }

  // WARN, INDEX NOT A KEY
  map<U>(callbackfn: (value: V, index: number) => U): U[] {
    const result: U[] = []; // faster when prealocate by size
    let index = 0;
    for (const value of this.values()) {
      result.push(callbackfn(value, index++));
    }
    return result;
  }

  find<S extends V>(
    predicate: (this: void, value: V, index: number) => value is S,
    thisArg?: any
  ): S | undefined;
  find(predicate: (value: V, index: number) => boolean): V | undefined {
    let index = 0;
    for (const value of this.values()) {
      if (predicate(value, index++)) {
        return value;
      }
    }
    return;
  }
  filter<S extends V>(callbackfn: (value: V, index: number) => value is S): S[];
  filter(callbackfn: (value: V, index: number) => unknown): V[] {
    const result: V[] = [];
    let index = 0;
    for (const value of this.values()) {
      if (callbackfn(value, index++)) {
        result.push(value);
      }
    }
    return result;
  }

  // only for perf, Map.forEach is slow
  override forEach(
    callbackfn: (value: V, key: K, map: this) => void,
    thisArg?: any
  ): void {
    for (const [key, value] of this.entries()) {
      callbackfn(value, key, this);
    }
  }
  some<S extends V>(
    predicate: (this: void, value: V, index: number) => value is S,
    thisArg?: any
  ): boolean;
  some(predicate: (value: V, index: number) => boolean): boolean;
  some(predicate: (value: V, index: number) => boolean): boolean {
    return (
      this.find(predicate as (value: V, index: number) => value is V) ===
      undefined
    );
  }

  every<S extends V>(
    predicate: (this: void, value: V, index: number) => value is S,
    thisArg?: any
  ): boolean;
  every<S extends V>(
    predicate: (this: void, value: V, index: number) => boolean,
    thisArg?: any
  ): boolean;
  every(predicate: (value: V, index: number) => boolean): boolean {
    return !this.some(predicate as (value: V, index: number) => value is V);
  }
}

// declare const r1: ExtendedMap<1,2>
// declare const r: ReadonlyMap<1,2>;
// r as ExtendedMap<1,2>
// r1 as ReadonlyMap<1,2>
