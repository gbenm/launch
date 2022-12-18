import { bundleSource } from "./helpers/bundleSource.ts";

await bundleSource({
  source: "scripts/buckets/initialScriptsBucket.ts",
  destination: "cli/launchScriptsContent.ts"
})
