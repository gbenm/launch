# Launcher for terminal commands

## How to use
After [install](#install)

- Execute `launch` without arguments (this creates a file to store all commands)
  > you'll see the location of the scripts file
- Execute `launch [command_name]` in the previous
  step some example commands are displayed
- You can also add parameters to the launch script these will forward to the last command in the cmd array

## Config
To customize the cli's behavior, export a constant named config in your script file with your desired configuration:

```typescript
export const config = {
  //...
}
```

For available configuration options, please refer to the [default script file](./assets/.launch.scripts.mjs). It is recommended to copy the JSDoc comments for type checking purposes.

## Install

```bash
deno run -A https://deno.land/x/launch/install.ts
```

# License

MIT
