import { bundleSource } from "./helpers/bundleSource.ts";

await bundleSource({
  source: "scripts/buckets/versionBucket.ts",
  destination: "version.generated.ts"
})

await Deno.run({
  cmd: ["deno", "task", "bundle"]
}).status()

await Deno.run({
  cmd: ["deno", "run", "--allow-all", "scripts/gitTag.ts", "commitVersionFile"],
  stdout: "inherit",
}).status()
