export type Injectable<T extends any[], V, DependencyShape> = (dependency: DependencyShape, ...args: T) => V;
export type Providable<DependencyShape> = () => DependencyShape;

export type InjectableAsync<T extends any[], V, DependencyShape> = (dependency: DependencyShape, ...args: T) => Promise<V>;
export type ProvidableAsync<DependencyShape> = () => Promise<DependencyShape>;

export function injectedFunction<T extends any[], V, DependencyShape>(
  provider: Providable<DependencyShape>,
  fn: Injectable<T, V, DependencyShape>
) {
    let localOverride: DependencyShape;
    const injected = (...args: T) => fn(localOverride || provider(), ...args);
    injected.override = (provided: DependencyShape) => localOverride = provided;
    return injected;
}

export function injectedFunctionAsync<T extends any[], V, DependencyShape>(
  provider: ProvidableAsync<DependencyShape>,
  fn: Injectable<T, V, DependencyShape>
) {
    const providedPromise = provider();
    const injected = async (...args: T) => {
      const provided = await providedPromise;
      return fn(provided, ...args);
    }

    injected.providedAsync = providedPromise;
    
    return injected;
}
