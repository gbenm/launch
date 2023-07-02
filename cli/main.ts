import initialScriptsFileContent from "./launchScriptsContent.ts"
import defaultConfig from "./defaultConfig.ts"
import version from "../version.ts"
import { Config, ScriptsModule } from "../interfaces.ts"
import { cmdBuild, exists, scriptsFile } from "../helpers.ts"
import { launch } from "../core.ts"
import { bold, brightGreen, yellow } from "std/fmt/colors.ts"

async function main (defaultConfig: Config) {
  const moduleFile = scriptsFile(defaultConfig)
  await createScriptsFileIfNotExists(moduleFile)

  const { default: getScripts, config: launchConfig }: ScriptsModule = await import(`file://${moduleFile}`)

  const config = {...defaultConfig, ...launchConfig}
  try {
    await cliStatus(config.checkVersionTimeoutInMs)
  } catch {
    console.log(yellow("[warning]:"), "Failed to check for updates\n")
  }

  const scripts = getScripts({ cmd: cmdBuild })

  launch({ config, scripts })
}


async function createScriptsFileIfNotExists (file: string) {
  if (await exists(file)) return

  Deno.writeTextFileSync(file, initialScriptsFileContent)
}

async function cliStatus (requestTimeout: number) {
  const abortController = new AbortController()

  const checkVersionTimeout = setTimeout(() => abortController.abort(), requestTimeout)

  const jsonResponse = await fetch("https://api.github.com/repos/gbenm/launch/releases/latest", {
    signal: abortController.signal,
  })

  clearTimeout(checkVersionTimeout)

  const { tag_name } = await jsonResponse.json()

  if (tag_name !== version) {
    console.log(bold(yellow("<<")), bold("There is a new version of launch available:"), bold(brightGreen(tag_name)), bold(yellow(">>")), "\n")
    console.log("You can update by running the following command:\n")
    console.log(`\tdeno run -A https://deno.land/x/launch@${tag_name}/install.ts\n`)
  }
}


if (import.meta.main) {
  main(defaultConfig)
}
