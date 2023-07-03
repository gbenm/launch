import { ReleaseType } from "https://deno.land/std@0.192.0/semver/types.ts"
import { executeSync } from "../helpers/execute.ts"
import { generateVersion } from "./helpers/versionGenerator.ts"

const releaseType = <ReleaseType> Deno.args[0]
const newVersion = generateVersion(releaseType)
Deno.writeTextFileSync("version.generated.ts", `export default "${newVersion}"`)

executeSync("deno", {
  args: ["run", "--config", "deno.jsonc", "-A", "scripts/gitTag.ts", "commitVersionFile"],
  stdout: "inherit",
  stderr: "inherit",
})
