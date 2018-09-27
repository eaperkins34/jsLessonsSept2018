/*
CLASSIC FOR LOOPS

It's going to do the same thing over and over. Allows you to do the same thing without coding it x amount of times.
*/

/*Loop variations
    For Statement
    Do While Statement
    While Statement
    Labeled Statement
    Break Statement
    Continue Statement
    For In Statement
    For Of Statement
*/

//counted from 0 to 9 by ones
// for (let i = 0; i < 10; i  ++) {
//     console.log(i);
// }

//count from 0 - 20 by 2's
for (let x = 0; x < 21; x += 2) {
    console.log(x);
}

//CHALLENGE:
//Using a for lop, count from 10 to 0 going down by 1's

// for (let i = 10; i >= 0; i -=1) {
//     console.log(i);
// }

//Whiteboard challenge
//count from 0, going down by 2's to -24

for(let i=0; i >= -24; i -= 2) {
    console.log(i)
}

//Challenge: using a for loop, go through a name and display each letter individually

let name = 'emily';

for (let i = 0; i < name.length; i++){
    console.log(name[i]);
}

/*
Challenge:
Make a for loop where you add up all the numbers from 1 to 50 (should equal 1275)
*/
let sum = 0;

for (let a = 1; a < 51; a ++ ){
    sum = sum + a;
}
console.log(sum)

/*CHALLENGE
Write a for loop running between the numbers 0-100
For multiples of 3, instead of the number, console.log 'Fizz'
For multipoes of 5 console.log 'Buzz'
For numbers which are multiples of BOTH 5 and3, console.log "FizzBuzz"
For any other numbe, console.log the value
*/

for (i = 0; i < 101; i ++){
    if (i % 15 === 0){
        console.log("FizzBuzz");
    }
    else if (i % 5 === 0){
        console.log("Buzz");
    } 
    else if (i % 3 === 0){
        console.log("Fizz");
    }
    else {console.log(i)
    }
   }
