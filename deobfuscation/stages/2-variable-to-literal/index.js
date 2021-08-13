const fs = require('fs');
const path = require('path');

const Shift = require('shift-ast');
const { refactor } = require('shift-refactor');
const { parseScript } = require('shift-parser');

const { js: beautify } = require('js-beautify');

const fileContents = fs.readFileSync(path.resolve(__dirname, '../../by-machine/1-escape.js'), 'utf8');
const tree = parseScript(fileContents);

const $script = new refactor(tree);

const _ac = $script("VariableDeclarator[binding.name=_ac]").nodes[0].init.elements;

$script("ComputedMemberExpression[object.name=_ac]").replace(i => {

    const index = i.expression.value;
    const item = _ac[index];

    return new Shift[item.type]({ value: item.value });
});

$script("VariableDeclarator[binding.name=_ac]").delete()


let deobfuscated = beautify($script.codegen()[0], { indent_size: 4 });
fs.writeFileSync(path.resolve(__dirname, "../../by-machine/2-variable-to-literal.js"), deobfuscated);