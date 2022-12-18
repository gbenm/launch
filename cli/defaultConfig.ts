import { homedir } from "std/node/os.ts"
import { SEP } from "std/path/separator.ts"

const separatorsForRegex = {
  "/": "\\/",
  "\\": "\\\\"
}

const homeDir = homedir()

if (!homeDir) {
  throw new Error("Home directory not found")
}

export default {
  scriptsPath: homeDir,
  scriptsFile: ".launch.scripts.ts",
  commandSeparator: "&&",
  othersCommandsToShow: 3,
  envRegexp: new RegExp(`\\$(\\w+)${separatorsForRegex[SEP]}`, "g")
}
