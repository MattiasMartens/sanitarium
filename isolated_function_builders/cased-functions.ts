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