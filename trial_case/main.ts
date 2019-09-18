import { keyof, tuple, TypeOf, intersection, nullType, union } from 'io-ts';

import { BaseFunctionAsync, stronglyTypedFunctionAsync } from '../isolated_function_builders';
import { saveTask, taskDone, Todo, nextTask } from './persistence';

const ArgType = tuple([
  keyof({
    push: null,
    pop: null,
    top: null
  })
]);
type ArgType = TypeOf<typeof ArgType>;

const ReturnType = union([
  Todo,
  nullType
]);
type ReturnType = TypeOf<typeof ReturnType>;

const _execute: BaseFunctionAsync<ArgType, ReturnType> = async (command) => {
  if (command === "push") {
    return saveTask({
      name: "do " + Math.floor(Math.random() * 99),
      date: new Date().valueOf()
    });
  } else if (command === "pop") {
    return taskDone();
  } else if (command === "top") {
    return nextTask();
  } else {
    throw new Error(`Command not supported: ${command}`);
  }
};

export const execute = stronglyTypedFunctionAsync(_execute, {
  ArgType,
  ReturnType
});