export declare function forkedFunction<T extends any[], V, W>(predicate: (...args: T) => Boolean, rootFn: (...args: T) => V, altFn: (...args: T) => W): (...args: T) => V | W;
