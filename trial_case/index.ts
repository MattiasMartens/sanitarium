import {
  execute
} from "./main";

execute(process.argv[2] as any).then(console.log);