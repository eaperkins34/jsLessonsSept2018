/*
PARAMETERS

parameters are like empty storage boxed we can name whatever
*/

function pet(animal) {
    console.log(`I have a ${animal} for a pet.`);
}

//pet(); undefined as pet has not been defined
pet('cat');

/*
CHALLENGE
Write a function that takes 2 parameters:
One parameter is for a first name
Other parameter is for a last name
Have them come together in a variable inside the function
console.log 'Hello, my name is Tyler Shelton'
Call you funciton
*/

function myName(firstName, lastName) {
    console.log(`Hello, my name is ${firstName} ${lastName}.`)
}

myName('Emily', 'Perkins');
