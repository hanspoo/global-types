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

## Caveats:

- It doesn't create the types folder, nor the files that should be within it.
- Actually it's focused on integrated monorepos.
- Work only on \*nix operating systems like Linux and MacOS.
