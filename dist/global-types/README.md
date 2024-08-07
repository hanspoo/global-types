# global-types for nx

This is an nx plugin that add some kind global .d.ts definitions.

## How it works

It augments every "tsconfig*.json" file under "apps" or "libs" with an includes entry: ../../types/*.d.ts (any dots as needed).
Then every definition file .d.ts in that folder will be available for all apps and libs.

## Usage

Install the plugin:

```
npm i -D @hanspoo/global-types
```

And run the generator add-lib:

```
nx g @hanspoo/global-types:add-lib
```

## Example

A common use case is to add environment variables to process.env.

When this generator has run, all the definition files under the top level folder _types_ will be global.
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

## Publishing

Increment manually the version number in package.json.
Execute the next command using the same version number you've put in package.json.

```
./node_modules/.bin/nx publish global-types  --ver=0.1.6 --tag=latest
```
