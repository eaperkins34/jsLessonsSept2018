/*
HOISTING
*/

console.log(scissors);  //undefined, the declaration is pulled, but not the value
var scissors = 'blue';  //console.log pulls that a declaration has been made, but is not defined.

console.log(scissors);

hello();
function hello(){
    console.log('hoisting is.. interesting');
}
hello();