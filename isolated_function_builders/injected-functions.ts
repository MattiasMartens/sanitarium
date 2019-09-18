export type Injectable<T extends any[], V, DependencyShape> = (dependency: DependencyShape, ...args: T) => V;
export type Providable<DependencyShape> = () => DependencyShape;

export function injectedFunction<T extends any[], V, DependencyShape>(
  provider: Providable<DependencyShape>,
  fn: Injectable<T, V, DependencyShape>
) {
    const provided = provider();
    const injected = (...args: T) => fn(provided, ...args);
    injected.provided = provided;
    return injected;
}
