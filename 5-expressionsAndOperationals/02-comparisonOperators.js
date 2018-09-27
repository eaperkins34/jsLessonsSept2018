/*
COMPARISON OPERATORS 
*/

//equality - only checks value within ''
console.log('3' == 3); //type coercion - does not care about type
console.log('three' == 3);  //false
console.log(0 == false == '' == null); // 0, null, and, '' all equal false

//strict equality (used most in real coding)
console.log(3 === 3); // verifies type and value are the same    output -> true
console.log ('3' === 3);  // output -> false

// not equal  (!= not equal)
console.log('3' != 4); // output -> true  
console.log('4' != 4); // output -> false     does not care about type

//strict not equal
console.log('3' !== 3); // checks type and value; 

//greater than
console.log(3 > 2); //output -> true

//less than
console.log(2 < 3); // output -> true

//greater than or equal to
console.log(3 >= 3); // output -> true

//less than or equal to
console.log(4 <= 4); // output -> true

//And: returns true if the left and right are both true
console.log(true && true)// output -> true
let x = 5;
console.log(x < 10 && x > -5); // output -> true
console.log(x < 10 && x > 15); // output -> false
//letters can be assigned value as well
let str = 'a'
console.log(str < 'p'); //output -> true

//or: return true if the left OR right are true
console.log(true || false);
let x = 5;
console.log(x < 10 || x > -5);
console.log(x < 10 || x > 15);