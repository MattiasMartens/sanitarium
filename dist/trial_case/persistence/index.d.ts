import { TypeOf } from "io-ts";
export declare const Todo: import("io-ts").TypeC<{
    name: import("io-ts").StringC;
    date: import("io-ts").NumberC;
}>;
export declare type Todo = TypeOf<typeof Todo>;
export * from "./next-task";
export * from "./task-done";
export * from "./save-task";
