import { promises } from "fs";
import { join } from "path";
import { EOL } from "os";

export async function popPersistentRecord(fileName: string) {
  const path = join("trial_case", "fake_filestore", fileName);
  const contents = await promises.readFile(
    path,
    "UTF-8"
  ) as string;

  const lines = contents.split(EOL);
  const lastLine = lines.splice(lines.length - 1, 1)[0];

  await promises.writeFile(
    path,
    lines.join(EOL)
  );

  return JSON.parse(lastLine || "null");
}
