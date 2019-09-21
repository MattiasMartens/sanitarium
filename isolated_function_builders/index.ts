export * from "./test-hookable/typed-functions";
export * from "./test-hookable/cased-functions";
export * from "./forked-functions";
export * from "./guarded-functions";
export * from "./test-hookable/injected-functions";
export * from "./fiat-functions";
export * from "./provider-functions";

export type BaseFunction<ArgType extends any[], ReturnType> = (...args: ArgType) => ReturnType;
export type BaseFunctionAsync<ArgType extends any[], ReturnType> = (...args: ArgType) => Promise<ReturnType>;


