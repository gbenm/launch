import initialScriptsFileContent from "./launchScriptsContent.ts"
import defaultConfig from "./defaultConfig.ts"
import version from "../version.ts"
import { Config, ScriptsModule } from "../interfaces.ts"
import { cmdBuild, exists, scriptsFile } from "../helpers.ts"
import { launch } from "../core.ts"

async function main (config: Config) {
  await cliStatus()
  const moduleFile = scriptsFile(config)
  await createScriptsFileIfNotExists(moduleFile)

  const { default: getScripts }: ScriptsModule = await import(`file://${moduleFile}`)
  const scripts = getScripts({ cmd: cmdBuild })

  launch({ config, scripts })
}


async function createScriptsFileIfNotExists (file: string) {
  if (await exists(file)) return

  Deno.writeTextFileSync(file, initialScriptsFileContent)
}

async function cliStatus () {
  const jsonResponse = await fetch("https://api.github.com/repos/gbenm/launch/releases/latest")
  const { tag_name } = await jsonResponse.json()

  if (tag_name !== version) {
    console.log(`There is a new version of launch available: ${tag_name}`)
  }
}


if (import.meta.main) {
  main(defaultConfig)
}
