import initialScriptsFileContent from "./launchScriptsContent.ts"
import defaultConfig from "./defaultConfig.ts"
import version from "../version.ts"
import { Config, ScriptsModule } from "../interfaces.ts"
import { cmdBuild, exists, scriptsFile } from "../helpers.ts"
import { launch } from "../core.ts"
import { bold, brightGreen, yellow } from "std/fmt/colors.ts"
import { gt, valid } from "std/semver/mod.ts"
import storage from "../helpers/storage.ts"

async function main (defaultConfig: Config) {
  const moduleFile = scriptsFile(defaultConfig)
  await createScriptsFileIfNotExists(moduleFile)

  const { default: getScripts, config: launchConfig }: ScriptsModule = await import(`file://${moduleFile}`)

  const config = {...defaultConfig, ...launchConfig}

  try {
    const checkVersion = storage.getSecondsSinceLastVersionCheck() > config.checkVersionIntervalInSeconds
    if (checkVersion) {
      console.log("Checking for updates...\n")
      await cliStatus(config.checkVersionTimeoutInMs)
      storage.setLastStatusCheckTimestamp(Date.now())
    }
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

  const normalize = (v: string | undefined) => v?.startsWith("v") ? v.slice(1) : v
  const latestVersion = normalize(tag_name)
  const currentVersion = normalize(version)

  const latestIsValid = latestVersion && valid(latestVersion)
  const currentIsValid = currentVersion && valid(currentVersion)

  if (latestIsValid && currentIsValid && gt(latestVersion!, currentVersion!)) {
    console.log(bold(yellow("<<")), bold("There is a new version of launch available:"), bold(brightGreen(tag_name)), bold(yellow(">>")), "\n")
    console.log("You can update by running the following command:\n")
    console.log(`\tdeno run -A https://deno.land/x/launch@${tag_name}/install.ts\n`)
  }
}


if (import.meta.main) {
  main(defaultConfig)
}
