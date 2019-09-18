import {provide} from "./provide";
import { Todo } from ".";
import {
  injectedFunctionAsync
} from "../../isolated_function_builders";

export const saveTask = injectedFunctionAsync(
  provide,
  async ({
    pushPersistentRecord
  }, todo: Todo) => {
    await pushPersistentRecord(todo);
    return todo;
  }
)