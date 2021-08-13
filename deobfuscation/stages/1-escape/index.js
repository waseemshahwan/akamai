const fs = require('fs');
const path = require('path');

const Shift = require('shift-ast');
const { refactor } = require('shift-refactor');
const { parseScript } = require('shift-parser');

const { js: beautify } = require('js-beautify');

const fileContents = fs.readFileSync(path.resolve(__dirname, '../../../originals/akamai.js'), 'utf8');
const tree = parseScript(fileContents);

const $script = new refactor(tree);

let deobfuscated = beautify($script.codegen()[0], { indent_size: 4 });
fs.writeFileSync(path.resolve(__dirname, "../../by-machine/1-escape.js"), deobfuscated);
