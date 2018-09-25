/*Variables can have 7 different types
TYPES
*/

//Booleans can represent: on/off, yes/no, true/false type equations

let on = true;
console.log(on); //output is true

let off = false;
console.log(off); //output is false 

//Booleans help represent opposites

//NULL 
/*
Null is very easy to get confused with undefined. 
Null is an empty value (not 0; not undefined)

It is like an empty container; nothing is in it, but it still exists as a space to fill.
*/

let empty = null; //null is an empty UPS box
console.log(empty);

/*
UNDEFINED

Undefined = no value assigned (not even an empty container, it does not exist)

Undefined is not an error
*/

let undef = undefined; 
console.log(undef);

let grass; //undefined is a forgotten UPS box, someone started a variable to finish later or to be defined later but was never done
console.log(grass);

/*
Think of undefined and null as packages in UPS
Null -> package deliberately sent out as empty
Undefined -> is a package that was forgotten or has not yet been used
*/

//NUMBERS
let degrees = 65;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999; //JS can only store up to a 15 digit number, anything larger will get rounded up/down to the best of the programs ability
console.log(rounded);

//DECIMALS
let notQuite = 0.2 + 0.1; //this gets a weird answer
console.log(notQuite);

console.log(notQuite.toFixed(2)); // This stops the the response at 2 digits after the decimal 

let anotherNum = 0.2 + 0.5; //this gets 0.7
console.log(anotherNum);
//                       (2    +     1   ) /10;
let numbersAreHard = (0.2 * 10 + 0.1 * 10) /10;  //if having an issue with decimals, use a work around by converting the decimal to a whole number for the equation to work
console.log(numbersAreHard);


/*STRINGS
Strings = any value within quotes; JS will spit out the value within the quotes
*/

let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);
console.log(stringOne + stringTwo);//this will not put a space between the two variables

//numbers vs strings
let first = 1050 + 100;
let second = '1050' + '100'; //quotations around the numbers turn them into strings (text)
console.log(first); //number
console.log(second); //string

console.log(typeof first);
console.log(typeof second);

/*What's going on here?
"+" -> addition when given 2 numbers, concatenation when given 2 strings
*/

let third = 1050 + '100';
console.log(third);

let fourth = 1050 + 'abab';
console.log(fourth);

//CHALLENGE:
let firstName = "Emily";
let lastName = "Perkins";
let houseNumber = 2302;
let street = "Hawthorn Place";
let city = "Noblesville";
let state = "Indiana";
let zipcode = "46060";

console.log(firstName, lastName + ',', houseNumber, street + ',', city + ',', state, zipcode);

/* OBJECTS
What is an object?

An object is used for anything more complex than what is listed above (Boolean, string, number, variable, null, undefined)
An object is a container that can hold multiple data types

Denoted by {}
has keys and values (color (key): 'blue' (value)), separated with a colon
Each key is separated with a comma

let objectNow = {
    key1: value1,
    key2: value2,
}
*/

let burritosNow = {
    size: 'large',
    quantity: 4,
    now: true
}
console.log(burritosNow);
console.log(typeof burritosNow);

/* ARRAYS
Arrays are great for lists

These are denoted by []
have values separated by commas -> ['blue', 'green', 'yellow', 'red']
                                       0       1        2        3
*/

let burritos = ['large', 4, true];
console.log(burritos);
console.log(typeof burritos); //



