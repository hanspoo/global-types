import { execSync } from 'node:child_process';

import { Tree } from 'nx/src/devkit-exports';
import { addTypesPath } from './utils';

/**
 * Modify all tsconfig*.json to add a top level folder called types,
 * where you can put global .d.ts files.
 *
 * Uses the unix find command in folder apps and libs, to search the files, so
 * works in *nix like operating systems like linux and macos.
 *
 * This is my first plugin, so, commit first or.. try it on a new branch.
 *
 * @param tree
 * @param schema
 */
export async function addGlobalGenerator(tree: Tree, schema: any) {
  const cmd = `find ${tree.root}/libs ${tree.root}/apps -name tsconfig.\\*.json`;
  const result = execSync(cmd);
  const files = result.toString().split('\n');

  addTypesPath(tree.root, files, false);
}

export default addGlobalGenerator;
