import initialScriptsFileContent from "./launchScriptsContent.ts"
import defaultConfig from "./defaultConfig.ts"
import { Config, ScriptsModule } from "../interfaces.ts"
import { cmdBuild, exists, scriptsFile } from "../helpers.ts"
import { launch } from "../core.ts"

async function main (config: Config) {
  const moduleFile = scriptsFile(config)
  await createScriptsFileIfNotExists(moduleFile)

  const { default: getScripts }: ScriptsModule = await import(moduleFile)
  const scripts = getScripts({ cmd: cmdBuild })

  launch({ config, scripts, initialScriptsFileContent })
}


async function createScriptsFileIfNotExists (file: string) {
  if (await exists(file)) return

  Deno.writeTextFileSync(file, initialScriptsFileContent)
}


if (import.meta.main) {
  main(defaultConfig)
}
