/*
ITERATING
*/

let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheese cake', 'hotdog',];

//food.forEach(f => {console.log(f)})

// food.forEach((food, number) => {
//     console.log(food);
//     console.log(number);
// })

/*
CHALLENGE
Create a list (with an array) of movies
use .forEach() to list your movies
add another movie at the end
and replace one of your existing movies with another one
*/

let movies = ['black panther', 'guardians', 'capt marvel', 'avengers'];

movies.forEach((movies) => {
    console.log(movies);
})

movies.push('black widow');
console.log(movies);

movies.splice(0,2, 'iron man', 'cap')
console.log(movies);

let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length);

let newArray = new Array(73);
console.log(newArray.length);
newArray.forEach(el => {
    console.log(el);                //no output generated due to no value being enterred
})      

console.log(newArray);