export function release() {
  return {
    TODO_FILE: "todo.txt"
  };
}

export type Config = ReturnType<typeof release>;