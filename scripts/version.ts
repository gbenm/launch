import { bundleSource } from "./helpers/bundleSource.ts";

await bundleSource({
  source: "scripts/buckets/versionBucket.ts",
  destination: "version.generated.ts"
})
