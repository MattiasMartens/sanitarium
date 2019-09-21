import { Type } from "io-ts";
import { PathReporter } from "io-ts/lib/PathReporter";

export function stronglyTypedFunction<T extends any[], V>(
  fn: (...args: T) => V,
  types: {
    ArgType: Type<T>,
    ReturnType: Type<V>
  }
) {
  const {
    ArgType,
    ReturnType
  } = types;

  const outFn = (...args: T) => {
    if (!!ArgType && !ArgType.is(args)) {
      throw new Error(`Incorrect type supplied to function: ${PathReporter.report(ArgType.decode(args))}`);
    }

    const result = fn(...args);

    if (!!ReturnType && !ReturnType.is(result)) {
      throw new Error(`Function returned with incorrect type: ${PathReporter.report(ReturnType.decode(result))}`);
    }

    return result;
  };

  outFn.types = types;
  return outFn;
}

export function stronglyTypedFunctionAsync<T extends any[], V>(
  fn: (...args: T) => Promise<V>,
  types: {
    ArgType: Type<T>,
    ReturnType: Type<V>
  }
) {
  const {
    ArgType,
    ReturnType
  } = types;

  const outFn = async (...args: T) => {
    if (!!ArgType && !ArgType.is(args)) {
      throw new Error(`Incorrect type supplied to function: ${PathReporter.report(ArgType.decode(args))}`);
    }

    const result = await fn(...args);

    if (!!ReturnType && !ReturnType.is(result)) {
      throw new Error(`Function returned with incorrect type: ${PathReporter.report(ReturnType.decode(result))}`);
    }

    return result;
  };

  outFn.types = types;
}
