export declare function providerFunction<DependencyShape>(fn: () => DependencyShape): {
    (): any;
    override(val: DependencyShape): DependencyShape;
};
export declare function providerFunctionAsync<DependencyShape>(fn: () => Promise<DependencyShape>): {
    (): Promise<any>;
    override(val: Promise<DependencyShape>): Promise<DependencyShape>;
};
