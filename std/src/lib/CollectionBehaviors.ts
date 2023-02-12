export interface Foldable<K, V> {
  reduce(
    callbackfn: (
      previousValue: V,
      currentValue: V,
      key: K,
      collection: this
    ) => V
  ): V;
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: V,
      key: K,
      collection: this
    ) => U,
    initialValue: U
  ): U;
}

export type Reduceable<K, V> = Foldable<K, V>;

export interface Someable<V> {
  some<S extends V>(
    predicate: (this: void, value: V, index: number) => value is S,
    thisArg?: any
  ): boolean;
  some(predicate: (value: V, index: number) => boolean): boolean;
}

export interface Mapable<V> {
  map<U>(callbackfn: (value: V, index: number) => U): U[];
}

export interface Filtrable<V> {
  filter<S extends V>(callbackfn: (value: V, index: number) => value is S): S[];
  filter(callbackfn: (value: V, index: number) => unknown): V[];
}

export interface Findable<V> {
  find<S extends V>(
    predicate: (this: void, value: V, index: number) => value is S,
    thisArg?: any
  ): S | undefined;
  find(predicate: (value: V, index: number) => boolean): V | undefined;
}

export interface FastEachIterable<K, V, TAdditionalThis> {
  // TAdditionalThis owerload for ReadonlyType
  forEach: (
    callbackfn: (value: V, key: K, collection: TAdditionalThis) => void,
    thisArg?: any
  ) => void;
}
