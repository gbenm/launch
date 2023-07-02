import { ReleaseType, SemVer, format, increment, parse } from "std/semver/mod.ts"
import currentVersion from "../../version.ts"

export function generateVersion (kind: ReleaseType): string {
  let version: SemVer | null

  switch (kind) {
    case "major":
    case "minor":
    case "patch":
      version = increment(parse(currentVersion), kind)
      break
    default:
      throw new Error("Unsupported kind of version")
  }

  if (!version) {
    throw new Error("Version not found")
  }

  return format(version)
}
