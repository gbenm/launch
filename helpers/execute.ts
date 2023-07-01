export function execute(command: string, options: Deno.CommandOptions) {
  return new Deno.Command(command, options).spawn()
}

export function executeSync(command: string, options: Deno.CommandOptions) {
  return new Deno.Command(command, options).outputSync()
}
