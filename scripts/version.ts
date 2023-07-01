import { executeSync } from "../helpers/execute.ts";
import { bundleSource } from "./helpers/bundleSource.ts";

await bundleSource({
  source: "scripts/buckets/versionBucket.ts",
  destination: "version.generated.ts"
})

executeSync("deno", {
  args: ["run", "--allow-all", "scripts/gitTag.ts", "commitVersionFile"],
  stdout: "inherit",
})
