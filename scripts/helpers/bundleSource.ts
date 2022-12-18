import { bundle } from "https://deno.land/x/buckets@v0.5.0/mod.ts";

export async function bundleSource ({ source, destination }: Args) {
  const content = await bundle(source)
  Deno.writeTextFileSync(destination, content)
}

export interface Args {
  source: string
  destination: string
}
