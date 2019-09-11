import { Type } from "io-ts";
import { Either } from "fp-ts/lib/Either";

export type ParameterContract<O, T = unknown, S = unknown, U = unknown> = Contract<O, T> & {
  cases?: InputCase<O, T, S, U>[]
}

export type ReturnContract<S, U = unknown> = Contract<S, U>;

export type Contract<O, T = unknown> = Shape<O> & {
  fiats?: Fiat<O, T, any>[]
};

export type Shape<O> = {
  type: Type<O>,
  constraint?: Constraint<O>
}

export type Constraint<O> = (o: O) => Either<FailedAssertion[], true>;

export type FailedAssertion = {
  actual: any,
  expected: any,
  expression?: string,
  description?: string
};

type Case<T, V> = { accessor: Accessor<T, V> } & ({
  tag: "_unaryFunctionOn",
  function: (a: T) => V,
  result: Shape<V>
} | {
  tag: "_multipleArityFunctionOn",
  function: (...args: any[]) => V,
  otherArgs: any[],
  placementIndex: number,
  result: Shape<V>
} | {
  tag: "_predicateTrueOf",
  predicate: Function
});

type InputCase<S, Q, T, V> = Case<S, Q> & {
  expectedOutput: Case<T, V>
};

type Accessor<T, V> = {
  getter: (t: T) => V,
  setter?: (v: V) => void,
  name?: string
};

export type ContractFailure<T> = {
  failedInput: any;
  expectedType: Type<T>;
  failedAssertions?: FailedAssertion[]
};

export type Fiat<T, V, M> = Case<T, V> & ({
  tag: "_fiatVal",
  fiat: M
} | {
  tag: "_fiatFn",
  fiat: (
    witness: V,
    full: T,
  ) => M
} | {
  "_fiatError",
  fiat: string
});