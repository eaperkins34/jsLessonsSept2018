/*
RETURNS
*/

function fullName (firstName, lastName) {
    return firstName + ' ' + lastName;
}

// fullName ('emily', 'perkins');  ///works but does not return anything

var fullName = fullName ('emily', 'perkins');
console.log(fullName);

function addNums(firstNum, secondNum) {
    return firstNum + secondNum;
}

console.log(addNums(2, 1));

/*
CHALLENGE
Make a tip calculator using a function
Have it RETURN the value
Capture that returned value in a variable
Print that variable 
*/

var payment = payment (20, 0.2);
function payment (bill, tipPercent) {
    return (bill * tipPercent) + bill;
}

console.log(payment);




