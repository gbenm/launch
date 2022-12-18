import version from "../version.ts"

await Deno.run({
  cmd: ["git", "tag", "-s", version, "-m", `Release ${version}`],
  stdout: "inherit",
}).status()
