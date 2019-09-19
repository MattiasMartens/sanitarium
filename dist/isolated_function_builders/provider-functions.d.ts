export declare function providerFunction<DependencyShape>(fn: () => DependencyShape): {
    (): DependencyShape;
    override(val: DependencyShape): DependencyShape;
};
export declare function providerFunctionAsync<DependencyShape>(fn: () => Promise<DependencyShape>): {
    (): Promise<DependencyShape>;
    override(val: Promise<DependencyShape>): Promise<DependencyShape>;
};
