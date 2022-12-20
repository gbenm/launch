import { brightGreen } from "https://deno.land/std@0.168.0/fmt/colors.ts"

const process = Deno.run({
  cmd: [
    Deno.execPath(),
    "install",
    "--import-map=".concat(import.meta.resolve("./import_map.json")),
    "-Af",
    "--name=launch",
    import.meta.resolve("./cli/main.ts")
  ]
})

const status = await process.status()

process.close()

if (!status.success) {
  console.log("Failed to install launch")
  Deno.exit(status.code)
}

console.log(brightGreen("ok!"))
