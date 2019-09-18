export function guardedFunction<T extends any[], V>(
  fn: (...args: T) => V,
  constraints: ((
    ...args: T
  ) => boolean | string)[]
) {
  return (...args: T) => {
    for (let constraint of constraints) {
      const pred = constraint(...args);

      if (pred !== true) {
        throw new Error(typeof pred === "string" ? pred : "Constraint failed");
      }
    }
    
    return fn(...args);
  }
}
