import version from "../version.ts"

if (Deno.args[0] === "commitVersionFile") {
  await Deno.run({
    cmd: ["git", "add", "version.generated.ts", "cli/launch.ts"],
    stdout: "inherit",
  }).status()

  await Deno.run({
    cmd: ["git", "commit", "-m", `chore: 🤖 ${version}`],
    stdout: "inherit",
  }).status()
}

await Deno.run({
  cmd: ["git", "tag", "-s", version, "-m", `Release ${version}`],
  stdout: "inherit",
}).status()
