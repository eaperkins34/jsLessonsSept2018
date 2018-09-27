/*
TERNARIES
*/
var x = -6;
// (x > 0) works as an IF statement
(x > 0) ? console.log("x is greater than 0.") : console.log("x is not greater than 0.")
// ^^ takes the place of the below function
if (x > 0){
    console.log("greater");
} else {
    console.log("not greater");
}


let x = 10;
(x == 0) ? console.log("x equals 0") : (x < 0) ? console.log("x is less than 0") : console.log("x is greater than 0")

/*CHALLENGE
Write a ternary that does the same thing as the age challenge

Age Challenge (if else):

var age = 30;

if (age >= 25) {
	console.log("Yay! You can rent a car!");
} else if (age >= 21) {
	console.log("Yay! You can drink!");
} else if (age >= 18) {
	console.log("Yay! You can vote!");
} else {
	console.log("Sorry, you're too young to do anything fun.");
}
*/

let age = 20;
(age < 18) ? console.log("sucks to be you")
 : (age >= 18 && age < 21) ? console.log("you can vote") 
 : (age >= 21 && age < 25) ? console.log("you can drink") 
 : console.log("you can rent a car")

 ///////


let yep = -8;

(yep < 0 && yep > -10) ? console.log('yep is between 0 and -10') 
: (yep > 0) ? console.log("yep is greater than zero") 
: console.log("yep is less than -10");

let y = 5;
(y == 2) ? console.log("y is equal to two") : console.log("default");
