import { promises } from "fs";
import { join } from "path";
import { EOL } from "os";

export async function pushPersistentRecord(fileName: string, record: Object) {
  await promises.appendFile(
    join("trial_case", "fake_filestore", fileName),
    EOL + JSON.stringify(record)
  );
}