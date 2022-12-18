import { increment } from "https://deno.land/std@0.168.0/semver/mod.ts"
import currentVersion from "../../version.ts"

export function generateContentVersionFile () {
  const [ kind ] = Deno.args

  let version: string | null
  switch (kind) {
    case "major":
    case "minor":
    case "patch":
      version = increment(currentVersion, kind)
      break
    default:
      throw new Error("Unsupported kind of version")
  }

  if (!version) {
    throw new Error("Version not found")
  }

  return version
}
