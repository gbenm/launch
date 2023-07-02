// @ts-check
import { homedir } from "node:os"
import { createHash } from "node:crypto"

/**
 * @typedef {object} LaunchConfig
 * @property {string} commandSeparator
 * @property {number} othersCommandsToShow
 * @property {RegExp} envRegexp
 * @property {number} checkVersionTimeoutInMs
 */

/** @type {Partial<LaunchConfig>} */
export const config = {
  commandSeparator: "&&",
  othersCommandsToShow: 3,
  checkVersionTimeoutInMs: 1000,
}

/**
 * @typedef {{ path: string }} Context
 * @typedef {(c: Context) => string} Builder
 * @typedef {string | Builder} CmdArg
 * @typedef {string | Builder} Cmd
 * @typedef {Cmd[] | { args: string[], cmd: Cmd[] }} BuiltCmd
 * @typedef {{ args: string[] }} CmdBuilderContext
 * @typedef {(_: CmdBuilderContext) => BuiltCmd } CmdBuilder
 * @typedef {{ dir?: string, cmd: Cmd[] | CmdBuilder, desc?: string }} Script
 * @typedef {{ [_: string]: Script }} Scripts
 * @typedef {(_0: TemplateStringsArray, ..._1: CmdArg[]) => Builder} CommandGenerator
 * @type {(_: { cmd: CommandGenerator }) => Scripts}
*/
export default ({ cmd }) => ({
  hello: {
    cmd: [ "echo Hello world!" ],
    desc: "Print Hello world!"
  },
  helloFn: {
    dir: homedir() || "",
    cmd: [
      "echo Hello world from",
      cmd`echo ${({ path }) => path}`
    ],
    desc: "Print Hello world with home directory"
  },
  describeArgs: {
    cmd: ({ args }) => [
      `echo "count: ${args.length}"`,
      ...args.map((arg, i) => `echo "${i + 1}. ${arg}"`),
      'echo input: '
    ],
    desc: "Describes the arguments of command"
  },
  cryptoArgs: {
    cmd({ args }) {
      const input = args.join("-")
      const algorithm = "sha256"
      const resultArgs = createHash(algorithm)
        .update(input)
        .digest("hex")
        .toString()

      return {
        args: [resultArgs],
        cmd: [
          `echo "hash algorithm: ${algorithm}"`,
          `echo "input: ${input || "<empty>"}"`,
          "echo result:" // will print resultArgs
        ]
      }
    },
    desc: "Prints a hash of the arguments joined with '-'"
  }
})
