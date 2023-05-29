import { Tree } from 'nx/src/devkit-exports';
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
export declare function addGlobalGenerator(tree: Tree, schema: any): Promise<void>;
export default addGlobalGenerator;
