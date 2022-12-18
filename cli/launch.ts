import initialScriptsFileContent from "./launchScriptsContent.ts"
import defaultConfig from "./defaultConfig.ts"
import { Config, ScriptsModule } from "../interfaces.ts"
import { cmdBuild, scriptsFile } from "../helpers.ts"
import { launch } from "../core.ts"

async function main (config: Config) {
  const { default: getScripts }: ScriptsModule = await import(scriptsFile(config))
  const scripts = getScripts({ cmd: cmdBuild })

  launch({ config, scripts, initialScriptsFileContent })
}


if (import.meta.main) {
  main(defaultConfig)
}
