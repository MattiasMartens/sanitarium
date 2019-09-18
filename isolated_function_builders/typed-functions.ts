import { Type } from "io-ts";
import { PathReporter } from "io-ts/lib/PathReporter";

export function stronglyTypedFunction<T extends any[], V>(
  fn: (...args: T) => V,
  types: {
    inT: Type<T>,
    outT: Type<V>
  }
) {
  const {
    inT,
    outT
  } = types;

  return (...args: T) => {
    if (!!inT && !inT.is(args)) {
      throw new Error(`Incorrect type supplied to function: ${PathReporter.report(inT.decode(args))}`);
    }

    const result = fn(...args);

    if (!!outT && !outT.is(args)) {
      throw new Error(`Function returned with incorrect type: ${PathReporter.report(inT.decode(args))}`);
    }

    return result;
  };
}
