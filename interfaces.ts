export interface Config {
  scriptsPath: string
  scriptsFile: string
  commandSeparator: string
  othersCommandsToShow: number
  envRegexp: RegExp
  checkVersionTimeoutInMs: number
}

export type LaunchConfig = Partial<Omit<Config, "scriptsPath" | "scriptsFile">>

export interface ScriptsModule {
  default: (helpers: Helpers) => Scripts
  config: LaunchConfig
}

export interface Helpers {
  cmd: (template: TemplateStringsArray, ...args: string[]) => Builder
}

export interface Scripts {
  [name: string]: Script
}

export interface Script {
  dir?: string
  cmd: Cmd[] | CmdBuilder
  desc?: string
}

export type Cmd = string | Builder

export type Builder = (context: Context) => string

export interface Context {
  path: string
}

export type CmdBuilder = (_: CmdBuilderContext) => BuiltCmd

export interface CmdBuilderContext {
  args: string[]
}

export type BuiltCmd = Cmd[] | { args: string[], cmd: Cmd[] }

export type CmdArg = string | Builder
