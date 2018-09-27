/*
EXPRESSIONS

helps create a function that does not get hoisted
*/
hi(); //errors, cannot be pulled because the function was created in var, it does not get hoisted

console.log(typeof hi); // expectation: function, output -> undefined
var hi = function hi() {
    console.log('hello');
}
hi();    // output-> 'hello'

console.log(test);
var test = 2;
