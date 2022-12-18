import { bundle } from "https://deno.land/x/buckets@v0.5.0/mod.ts";

const content = await bundle("scripts/bundleScriptsFile/launchScriptsDynamicContent.ts")
Deno.writeTextFileSync("cli/launchScriptsContent.ts", content)
