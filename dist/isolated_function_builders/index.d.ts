export * from "./typed-functions";
export * from "./cased-functions";
export * from "./forked-functions";
export * from "./guarded-functions";
export * from "./injected-functions";
export * from "./fiat-functions";
export * from "./provider-functions";
export declare type BaseFunction<ArgType extends any[], ReturnType> = (...args: ArgType) => ReturnType;
export declare type BaseFunctionAsync<ArgType extends any[], ReturnType> = (...args: ArgType) => Promise<ReturnType>;
