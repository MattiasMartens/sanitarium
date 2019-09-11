import { Type } from "io-ts";;

export type ParameterContract<O> = {
  type: Type<unknown, O, unknown>,
  constraints?: Constraint<O>[],
  cases?: (Case<any>)[]
}

export type ArgumentContract<O> = {
  type: Type<unknown, O, unknown>,
  constraints?: Constraint<O>[]
}

export type Contract<O> = ParameterContract<O>;

type Constraint<O> = (o: O) => ({
  passing: boolean
} & ({} | {
  actual: any,
  expected: any
}));

type Case<T> = { accessor: Accessor } & ({
  tag: "_unaryFunctionOn",
  function: (a: T) => any,
  result: ParameterContract<any>
} | {
  tag: "_multipleArityFunctionOn",
  function: Function,
  otherArgs: any[],
  placementIndex: number,
  result: ParameterContract<any>
} | {
  tag: "_predicateTrueOf",
  predicate: Function
})

type Accessor = (string | number | Symbol)[];

export type ContractFailure<T> = {
  failedInput: any;
  expectedType: T;
  failedConstraints?: Constraint<T>[]
};