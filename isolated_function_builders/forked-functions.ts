export function forkedFunction<T extends any[], V, W>(
  predicate: (...args: T) => Boolean,
  rootFn: (...args: T) => V,
  altFn: (...args: T) => W,
) {
  return (...args: T) => {
    if (predicate(...args)) {
      return altFn(...args);
    } else {
      return rootFn(...args);
    }
  }
}
