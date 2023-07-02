import { homedir } from "node:os"
import { SEP } from "std/path/separator.ts"
import { Config } from "../interfaces.ts"

const separatorsForRegex = {
  "/": "\\/",
  "\\": "\\\\"
}

const homeDir = homedir()

if (!homeDir) {
  throw new Error("Home directory not found")
}

const defaultConfig: Config = {
  scriptsPath: homeDir,
  scriptsFile: ".launch.scripts.mjs",
  commandSeparator: "&&",
  othersCommandsToShow: 3,
  envRegexp: new RegExp(`\\$(\\w+)${separatorsForRegex[SEP]}`, "g"),
  checkVersionTimeoutInMs: 1000,
  checkVersionIntervalInSeconds: 12 * 60 * 60,
}

export default defaultConfig
