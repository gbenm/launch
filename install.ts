import { brightGreen } from "https://deno.land/std@0.192.0/fmt/colors.ts"

const installCommand = new Deno.Command(Deno.execPath(), {
  args: [
    "install",
    "--import-map=".concat(import.meta.resolve("./import_map.json")),
    "-Af",
    "--name=launch",
    import.meta.resolve("./cli/main.ts")
  ]
})

const process = installCommand.spawn()

const status = await process.status

if (!status.success) {
  console.log("Failed to install launch")
  Deno.exit(status.code)
}

console.log(brightGreen("ok!"))
