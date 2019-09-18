import {provide} from "./provide";
import {
  injectedFunction, injectedFunctionAsync
} from "../../isolated_function_builders";

export const nextTask = injectedFunctionAsync(
  provide,
  async ({
    topPersistentRecord
  }) => {
    return await topPersistentRecord();
  }
)