import {
  FastEachIterable,
  Filtrable,
  Findable,
  Foldable,
  Mapable,
  Someable,
} from './CollectionBehaviors';

type ArrayLikeSet<V> = Mapable<V> &
  Filtrable<V> &
  Findable<V> &
  Someable<V> &
  Foldable<number, V> &
  FastEachIterable<V, V, ReadonlySet<V>>;

export interface ReadonlyExtendedSet<V>
  extends ReadonlySet<V>,
    ArrayLikeSet<V> {}

export class ExtendedSet<V> extends Set<V> implements ReadonlyExtendedSet<V> {
  reduce<U = V>(
    callbackfn: (
      previousValue: U,
      currentValue: V,
      index: number,
      set: this
    ) => U,
    initialValue?: U
  ): U {
    let prevValue = initialValue;
    if (typeof prevValue === 'undefined') {
      if (this.size === 0) {
        throw new TypeError('Reduce of empty array with no initial value');
      }
      prevValue = this.values().next().value as unknown as U;
    }
    let index = 0;
    for (const value of this.values()) {
      prevValue = callbackfn(prevValue, value, index++, this);
    }
    return prevValue;
  }

  map<U>(callbackfn: (value: V, index: number) => U): U[] {
    const result: U[] = [];
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

  filter(callbackfn: (value: V, index: number) => any): V[] {
    const result: V[] = [];
    let index = 0;
    for (const value of this.values()) {
      if (callbackfn(value, index++)) {
        result.push(value);
      }
    }
    return result;
  }

  // only for perf, Set.forEach is slow
  override forEach(callbackfn: (value: V, value2: V, set: this) => void): void {
    for (const value of this.values()) {
      callbackfn(value, value, this);
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
