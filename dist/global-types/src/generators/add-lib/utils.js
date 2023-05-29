"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dotsToRoot = exports.addTypesPath = void 0;
const fs = require("fs");
function addTypesPath(root, files, dryRun = true) {
    files.forEach((a) => {
        console.log(`processing ${a}`);
        if (!fs.existsSync(a))
            return;
        const data = fs.readFileSync(a);
        const config = JSON.parse(data.toString());
        if (!Array.isArray(config.include)) {
            console.log(`invalid file ${a}, no include property found, skipping`);
            return;
        }
        const newlib = dotsToRoot(root, a);
        if (config.include.find((s) => s === newlib)) {
            console.log(`${a} already has the value, skipping`);
            return;
        }
        config.include.push(newlib);
        if (!dryRun)
            fs.writeFileSync(a, JSON.stringify(config));
    });
    console.log(`Done, modified ${files.length} files`);
}
exports.addTypesPath = addTypesPath;
function dotsToRoot(root, fName) {
    const relative = fName.replace(root, '').replace(/^\//, '');
    const parts = relative.split('/');
    return '../'.repeat(parts.length - 1) + 'types/*.d.ts';
}
exports.dotsToRoot = dotsToRoot;
//# sourceMappingURL=utils.js.map