/*
RECAP
*/
let stringExample = 'string';  //this is a string literal
//let secondString = userinput()   //not a literal as it is based on user input
let boolExample = true;

let conditionExample = 0;
// can use "let" "var" "const" or have no declaration and JS will fill in var

//if else example
if (typeof conditionExample === 'string') {
    console.log("yep, it's a string");
} else if (typeof conditionExample === 'number'){
    console.log("yep, it's a number")
} else if (typeof conditionExample === 'boolean'){
    console.log("yep, it's a boolean");
} 

console.log(typeof conditionExample);
//switch example

switch (typeof conditionExample) {
    case 'string':
        console.log('this is a string');
        break;
    case 'number':
        console.log('this is a number');
        break;
    case 'boolean':
        console.log('this is a boolean');
        break;
    default: 
        console.log('this is not a string, number, or boolean');
        break;
}
//////ASIDE
let x = 0;

switch (x) {
    case (x < 0 && x > -10):
        console.log('this is a small number');
        break;
    case (x > 0):
        console.log('this is a larger number');
        break;
}


// TERNARIES
conditionExample = '0';
(typeof conditionExample === 'string') ? console.log('our variable is a string')
    : (typeof conditionExample ==='number') ? console.log('our variable is a number')
    : (typeof conditionExample === 'undefined') ? console.log('our variable is undefined')
    : console.log('this is default');


/*FIZZ BUZZ CHALLENGE!!
Challenge: 
Create a variable named FB that takes numbers
Write a conditional that:
Prints out "Fizz" if the number is divisible by 3
Prints out "Buzz" if the number is divisible by 5
Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
*/

let FB = 15;


if((FB % 3 === 0) && (FB % 5 === 0)) {
    console.log('Fizz Buzz');
} else if (FB % 5 === 0 ){
    console.log('Buzz');
} else if (FB % 3 === 0) {
    console.log('Fizz');
}


switch (true) {
    case (FB % 15 ===0):
        console.log('Fizz Buzz');
        break;
    case (FB % 5 === 0):
        console.log('Buzz');
        break;
    case (FB % 3 === 0):
        console.log('Fizz');
        break;
}


(FB % 15 === 0) ? console.log('Fizz Buzz')
    : (FB % 5 === 0) ? console.log('Buzz')
    : (FB % 3 === 0) ? console.log('Fizz')
    : console.log('the number is not divisible by 3 or 5');
