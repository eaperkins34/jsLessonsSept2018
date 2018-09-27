/*
ASSIGNMENT OPERATORS
*/

//assignment operator (=)
let x = 5;
console.log(x);
/*
x = x + 1;
console.log(x);
*/

//addition operator
x += 1;  // x = x + 1
console.log(x);  // output -> 6


//subtraction operator
x -= 1; // x = x - 1
console.log(x);  // output -> 5

//multiplication operator
x *= 1;  //  x = x * 1
console.log(x);9 // output -> 5

//division operator
x /= 1; // x = x / 1
console.log(x); // output -> 5

//Modulus finds the remainder on equations that are not whole numbers
console.log(10%3); //  output -> 1

console.log(7%5);  // output -> 2
console.log(x = x % 5);

x = x % 5; //  assign x to 0
x %= 5; // same as above line
//Modulus operations happen alot when trying to create and ID or encrpyt a password

//exponential assignment
let x = 5;
x = x ** 2; // ** = the power of
x **= 1;
console.log(x)