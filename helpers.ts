import { join } from "std/path/mod.ts"
import { Context, Script, Config, CmdArg } from "./interfaces.ts"

export function cmdBuild (parts: TemplateStringsArray, ...args: CmdArg[]) {
  return (context: Context) => parts.reduce((cmd, part, i) => {
    cmd = cmd.concat(part)
    const arg = args[i]
    if (arg) {
      if (typeof arg === "function") {
        cmd = cmd.concat(arg(context))
      } else {
        cmd = cmd.concat(`${arg}`)
      }
    }
    return cmd
  }, "")
}

export function showAllCommands(config: Config, commands: Record<string, Pick<Script, "desc">>) {
  const commandNames = Object.keys(commands)
  const maxLen = Math.max(...commandNames.map(cmd => cmd.length))
  console.log(`Available scripts in ${scriptsFile(config)}\n`)

  if (commandNames.length === 0) {
    console.log("  <empty list>")
  }

  commandNames.forEach((cmd) => {
    const script = commands[cmd]
    if (script.desc) {
      console.log(`  ${cmd.padEnd(maxLen)}    ${script.desc}`)
    } else {
      console.log(`  ${cmd}`)
    }
  })
}

export const scriptsFile = (config: Config) => join(config.scriptsPath, config.scriptsFile)

export function showTheMostSimilarCommand(config: Config, commands: Record<string, unknown>, cmd: string) {
  const cmdKeys = Object.keys(commands)
  const like = cmd.toLowerCase().split("")
  const PENALTY = -1000

  const matches = cmdKeys.map((name) => {
    const nameLike = name.toLowerCase()
    return {
      name, match: like.map((letter) => nameLike.indexOf(letter))
    }
  }).map(({name, match}) => ({
    name,
    match: match.map((value, i) => {
      if (value === -1) return PENALTY
      return Math.abs(value - i) * -1
    }).reduce((a, b) => a + b)
  }))

  const mostSimilar =  matches.reduce((match1, match2) => {
    return match1.match >= match2.match ? match1 : match2
  })

  const minMatch = like.length * PENALTY

  if (!mostSimilar || mostSimilar.match <= minMatch) {
    return
  }

  console.log("\nThe most similar command is")
  console.log(`    ${mostSimilar.name}`)

  const acc: Array<{ name: string, match: number }> = []

  const others = matches.reduce((acc, match) => {
    if (match.name == mostSimilar.name) return acc
    if (match.match > minMatch) {
      acc.push(match)
    }

    return acc
  }, acc)

  if (others.length === 0) {
    return
  }

  others.sort((a, b) => b.match - a.match)

  console.log("\nOther similar commands")
  others.slice(0, config.othersCommandsToShow).forEach((match) => {
    console.log(`    ${match.name}`)
  })
}

export function buildCommand (config: Config, context: Context, commands: CmdArg[]) {
  return commands.map((cmd) => {
    if (typeof cmd === "function") {
      return cmd(context)
    }

    return cmd
  }).join(config.commandSeparator)
}
