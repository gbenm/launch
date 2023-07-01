import { executeSync } from "../helpers/execute.ts"
import version from "../version.ts"

if (Deno.args[0] === "commitVersionFile") {
  executeSync("git", {
    args: ["add", "version.generated.ts"],
    stdout: "inherit",
    stderr: "inherit",
  })

  executeSync("git", {
    args: ["commit", "-m", `chore: 🤖 ${version}`],
    stdout: "inherit",
    stderr: "inherit",
  })
}

const result = executeSync("git", {
  args: ["tag", "-s", version, "-m", `Release ${version}`],
  stdout: "inherit",
  stderr: "inherit",
})

if (!result.success) {
  console.log("Failed to create tag, ensure that you can sign tags")
}
