import { Option } from "fp-ts/lib/Option";
export declare function fiatFunction<T extends any[], V>(fn: (...args: T) => V, fiats: ((...args: T) => Option<V>)[]): (...args: T) => V;
