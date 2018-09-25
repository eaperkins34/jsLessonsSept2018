/*
VARIABLES
-Variable is a powerful feature for JS, a way to refer to something that can change over time

notes on variables:
1) variable must begin with a letter, underscore, or dollar sign
2) you can use numbers, but they must follow one of the above
3) JS is case sensitive -- "hello" and "Hello" are different

*/
var a = 1
var b = 2

console.log(a + b); //output is 3

/*
DECLARATIONS

Declaration are the LEFT SIDE of a variable (equation)
    It is simply the var x
    It is on the left side of the assignment operator (=)

Initializations are the RIGHT SIDE of a variable
    Set the value of a variable
    incorporates the variable name (x), assignment operator (=), and the value (10) => x = 10
*/

var x; 
console.log('Declaration:', x);

x = 10
console.log('Initialization 1:', x)

x = 33
console.log('Initialization 2:', x);

/*
Var, Let, and Const:
var = "old" js keyword for variables
let = "new" keyword for variables (introduced in ES6)
const = also "new"; declares unchangeable variables
var and let are very similiar and can be used almost interchangeably
will get into basics later as to the differences between the 2, overall let seems to tend to work better than var though
*/

let today = 'Great!';
const elevenFifty ='Wonderful!'; //semi colons are not necessarily required but help express the end of a line, thought, or idea
console.log(today, elevenFifty) //be consistent in which you use though, always use semi colons, always use the same type of quotations (single or double)

today = 'lovely'; 
console.log(today, elevenFifty);

let cup = "water";
console.log(cup , today)

//elevenFifty = 'Super'
console.log(today, elevenFifty); //will cause error because "elevenFifty" is constant, it cannot be changed

/*
variables are used in virtually everything within JS
*/
