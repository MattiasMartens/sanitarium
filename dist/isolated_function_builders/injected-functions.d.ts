export declare type Injectable<T extends any[], V, DependencyShape> = (dependency: DependencyShape, ...args: T) => V;
export declare type Providable<DependencyShape> = () => DependencyShape;
export declare type InjectableAsync<T extends any[], V, DependencyShape> = (dependency: DependencyShape, ...args: T) => Promise<V>;
export declare type ProvidableAsync<DependencyShape> = () => Promise<DependencyShape>;
export declare function injectedFunction<T extends any[], V, DependencyShape>(provider: Providable<DependencyShape>, fn: Injectable<T, V, DependencyShape>): {
    (...args: T): V;
    override(provided: DependencyShape): DependencyShape;
};
export declare function injectedFunctionAsync<T extends any[], V, DependencyShape>(provider: ProvidableAsync<DependencyShape>, fn: Injectable<T, Promise<V>, DependencyShape>): {
    (...args: T): Promise<V>;
    providedAsync: Promise<DependencyShape>;
};
