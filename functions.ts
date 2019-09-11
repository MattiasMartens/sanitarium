import {} from "io-ts";

import { ParameterContract, ContractFailure } from "./types";
import { checkContract, getError } from "./contracts";
import { isLeft, mapLeft } from "fp-ts/lib/Either";

export function laxFunction<T extends Array<any>, V>(fn: (...args: T) => V) {
  return fn;
}

export function strictFunction<T extends Array<any>, V>(
  fn: (...args: T) => V,
  inContract?: ParameterContract<T>,
  outContract?: ParameterContract<V>
) {
  return function(...args: T) {
    if (inContract) {
      const contractResult = checkContract(inContract, args);

      mapLeft((val: ContractFailure<T>) => {
        throw getError(val)
      })(contractResult);
    }

    const output = fn(...args);

    if (outContract) {
      const contractResult = checkContract(outContract, output);

      mapLeft((val: ContractFailure<V>) => {
        throw getError(val)
      })(contractResult);
    }

    return output;
  }
}

export function firmFunctionFactory(isTestEnvironment: boolean) {
  return function firmFunction<T extends Array<any>, V>(
    fn: (...args: T) => V,
    inContract?: ParameterContract<T>,
    outContract?: ParameterContract<V>
  ) {
    if (isTestEnvironment) {
      return laxFunction(fn);
    } else {
      return strictFunction(fn, inContract, outContract);
    }
  }
}