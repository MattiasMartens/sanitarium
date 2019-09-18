import { Option } from "fp-ts/lib/Option";

export function fiatFunction<T extends any[], V>(
  fn: (...args: T) => V,
  fiats: ((...args: T) => Option<V>)[]
) {
  return (...args: T) => {
    for (let fiat of fiats) {
      const result = fiat(...args);

      if (result._tag === "Some") {
        return result.value;
      }
    }

    return fn(...args);
  }
}
