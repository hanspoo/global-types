"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addGlobalGenerator = void 0;
const tslib_1 = require("tslib");
const node_child_process_1 = require("node:child_process");
const utils_1 = require("./utils");
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
function addGlobalGenerator(tree, schema) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const cmd = `find ${tree.root}/libs ${tree.root}/apps -name tsconfig.\\*.json`;
        const result = (0, node_child_process_1.execSync)(cmd);
        const files = result.toString().split('\n');
        (0, utils_1.addTypesPath)(tree.root, files, false);
    });
}
exports.addGlobalGenerator = addGlobalGenerator;
exports.default = addGlobalGenerator;
//# sourceMappingURL=generator.js.map