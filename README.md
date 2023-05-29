# global-types for nx

This is an nx plugin that add some kind of global \*.d.ts files.

## Usage

```
npm i @hanspoo/global-types
nx g @hanspoo/global-types:add-lib
```

## How

It augments every "tsconfig*.json" file under "apps" or "libs" folder, with an includes entry: ../../types/*.d.ts or as any dots as needed, the types of .d.ts files you put there will then work for all the apps and libs.

## Caveats:

- It doesn't create the types folder, nor the files that should be within it.
- Actually it's focused on integrated monorepos.
- Work only on \*nix operating systems like Linux and MacOS.
