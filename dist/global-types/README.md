# global-types for nx

This is an nx plugin that add some kind of global \*.d.ts files.

## Usage

Create a top level folder called types.
Put some *.d.ts files there.

```
npm i @hanspoo/global-types
nx g @hanspoo/global-types:add-lib
```

Run this generator and the types defined in the files will be available for all the projects and libs.

## How
It augments every "tsconfig*.json" file under "apps" or "libs" with an includes entry: ../../types/*.d.ts (any dots as needed). 

## Example

A common use case is to add environment variables to process.env.

When this generator has run, all the definition files under the top level folder *types* will be global.
In this specific example we'll create some typed environment variables, augmenting the ProcessEnv interface in Node.

```
cd YOUR_WORKSPACE_HOME
mkdir types
touch types/environment.d.ts
```

Put the next content in the file just created; it will add some variables to process.env:

```
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      DB_DSN: string;
      DEBUG: string;
      MAX_ROWS: string;
    }
  }
}

export {};
```

Then in your code, it will be type safe to use them with dot notation:

```
process.env.NODE 
```

Without this, you should use untyped bracket notation to access the variable:

```
process.env["NODE"]
```

Loosing type safety and intellisense in your editor.

## Caveats:

- It doesn't create the types folder, nor the files that should be within it.
- Actually it's focused on integrated monorepos.
- Work only on \*nix operating systems like Linux and MacOS.
