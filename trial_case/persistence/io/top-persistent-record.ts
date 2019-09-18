import { promises } from "fs";
import { join } from "path";
import { EOL } from "os";

export async function topPersistentRecord(fileName: string) {
  const contents = await promises.readFile(
    join("trial_case", "fake_filestore", fileName),
    "UTF-8"
  ) as string;

  const lines = contents.split(EOL);

  return JSON.parse(lines[lines.length - 1] || "null");
}
