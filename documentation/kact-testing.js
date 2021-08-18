
// `a` is `1` for keydown or onkeydown, `2` for keyup or onkeyup, `3` for keypress or onkeypress
// keyType

let ctrlKeyDown = 0; // i
let keyType = 1; // a
let charCode = 63; // m
let keyCode = 63; // n
let metaKey = 0; // c
let altKey = 0; // b

var FIRST;

if (!charCode || !keyCode) FIRST = false;

if(charCode != 0 && keyCode != 0 && charCode != keyCode) {
    keyCode = -1;
} else {
    keyCode = keyCode != 0 ? keyCode : charCode;
    FIRST = keyCode;
}

console.log(FIRST);

/*

n is:
-2 normal letter key down
-3 pgup, pgdown, delete, etc
-4 f1,f2,etc

shiftkey, altkey, ctrlkey - real keycode is n
*/

let SECOND = 0 == ctrlKeyDown && 0 == metaKey && 0 == altKey && keyCode >= 32 && 
    (keyCode = 3 == keyType && keyCode >= 32 && keyCode <= 126 ? -2 : keyCode >= 33 && keyCode <= 47 ? -3 : keyCode >= 112 && keyCode <= 123 ? -4 : -2);

console.log(FIRST, SECOND);