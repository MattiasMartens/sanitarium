import { type, string, number, TypeOf } from "io-ts";

export const Todo = type({
  name: string,
  date: number
});

export type Todo = TypeOf<typeof Todo>;

export * from "./next-task";
export * from "./task-done";
export * from "./save-task";