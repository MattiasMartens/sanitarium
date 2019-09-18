import { release as IORelease } from "./io";
import { release as ConfigRelease } from "../config";

export function provide() {
  const {
    TODO_FILE
  } = ConfigRelease();
  const IO = IORelease(TODO_FILE);
  
  return IO;
}
