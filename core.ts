import { Config, Scripts } from "./interfaces.ts"
import { SEP, resolve } from "std/path/mod.ts"
import { spawn } from "node:child_process"
import { buildCommand, showAllCommands, showTheMostSimilarCommand } from "./helpers.ts"

export function launch ({
  config, scripts
}: {
  config: Config, scripts: Scripts
}) {
  const [command] = Deno.args

  if (!command) {
    showAllCommands(config, scripts)
    return
  }

  const scheme = scripts[command]

  if (!scheme) {
    console.log("Unknown command")
    showTheMostSimilarCommand(config, scripts, command)
    return
  }

  const replacer = (_: string, group: string) => Deno.env.get(group) + SEP;

  scheme.dir = scheme.dir || Deno.cwd()
  scheme.dir = scheme.dir + SEP
  scheme.dir = scheme.dir.replace(config.envRegexp, replacer)
  scheme.dir = resolve(scheme.dir)

  let cmdToBuild = scheme.cmd
  let finalArgs = Deno.args.slice(1)

  if (typeof cmdToBuild === "function") {
    const result = cmdToBuild({ args: [...finalArgs] })
    if (Array.isArray(result)) {
      cmdToBuild = result
    } else {
      finalArgs = result.args
      cmdToBuild = result.cmd
    }
  }

  const cmd = buildCommand(config, { path: scheme.dir }, cmdToBuild)
    .concat(" ")
    .concat(finalArgs.join(" "))

  spawn(
    cmd,
    { stdio: 'inherit', shell: true, cwd: scheme.dir }
  )
}
