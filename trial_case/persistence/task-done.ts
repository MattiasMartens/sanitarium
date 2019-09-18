import {provide} from "./provide";
import {
  injectedFunctionAsync
} from "../../isolated_function_builders";

export const taskDone = injectedFunctionAsync(
  provide,
  async ({
    popPersistentRecord
  }) => {
    return await popPersistentRecord();
  }
)