import { Type } from "io-ts";
export declare function stronglyTypedFunction<T extends any[], V>(fn: (...args: T) => V, types: {
    ArgType: Type<T>;
    ReturnType: Type<V>;
}): {
    (...args: T): V;
    types: {
        ArgType: Type<T>;
        ReturnType: Type<V>;
    };
};
export declare function stronglyTypedFunctionAsync<T extends any[], V>(fn: (...args: T) => Promise<V>, types: {
    ArgType: Type<T>;
    ReturnType: Type<V>;
}): void;
