export type Case<T extends any[], V> = {
  inPredicate: (...args: T) => boolean,
  outPredicate: (result: V) => boolean,
  caseName?: string
};

export function casedFunction<T extends any[], V>(fn: (...args: T) => V, cases: Case<T, V>[]) {
  return (...args: T) => {
    const inPredicatesMatched = cases.filter(
      ({inPredicate}) => inPredicate(...args)
    );

    const result = fn(...args);

    for (let {outPredicate} of inPredicatesMatched) {
      if (!outPredicate(result)) {
        throw new Error("Case failed to match");
      }
    }

    return result;
  }
}

export async function casedFunctionAsync<T extends any[], V>(fn: (...args: T) => Promise<V>, cases: Case<T, V>[]) {
  return async (...args: T) => {
    const inPredicatesMatched = cases.filter(
      ({inPredicate}) => inPredicate(...args)
    );

    const result = await fn(...args);

    for (let {outPredicate, caseName} of inPredicatesMatched) {
      if (!outPredicate(result)) {
        throw new Error(`Case ${caseName}${caseName ? " " : ""}was triggered but its input conditions failed to meet its output conditions`);
      }
    }

    return result;
  }
}