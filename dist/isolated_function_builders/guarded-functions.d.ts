export declare function guardedFunction<T extends any[], V>(fn: (...args: T) => V, constraints: ((...args: T) => boolean | string)[]): (...args: T) => V;
