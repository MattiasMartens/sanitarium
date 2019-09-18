import * as manifest from "./manifest";
import { promises, existsSync } from "fs";
import { join } from "path";

export async function release(fileName: string) {
  // TODO these bindings can be automated
  // TODO typing breaks here

  const path = join("trial_case", "fake_filestore", fileName);
  if (!existsSync(path)) {    
    await promises.writeFile(path, "", {
      flag: "w"
    });
    console.log(existsSync(path));
  }

  return {
    popPersistentRecord: manifest.popPersistentRecord.bind(null, fileName),
    pushPersistentRecord: manifest.pushPersistentRecord.bind(null, fileName),
    topPersistentRecord: manifest.topPersistentRecord.bind(null, fileName)
  };
}
