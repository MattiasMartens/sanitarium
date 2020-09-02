export declare type Case<T extends any[], V> = {
    inPredicate: (...args: T) => boolean;
    outPredicate: (result: V) => boolean;
    caseName?: string;
};
export declare function casedFunction<T extends any[], V>(fn: (...args: T) => V, cases: Case<T, V>[]): (...args: T) => V;
export declare function casedFunctionAsync<T extends any[], V>(fn: (...args: T) => Promise<V>, cases: Case<T, V>[]): Promise<(...args: T) => Promise<V>>;
