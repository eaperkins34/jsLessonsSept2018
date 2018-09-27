/*
INTO TO ARRAYS
go in square brackets []
comma separate
can have any data types
great for listing
*/

//overview and calling
let students = ['tony', 'marshall', 'rhys', 'ray', 23, true, ['ryan', 'iesha']];   // an array inside of an array can be used to group items
//index number     0        1         2        3    4   5           6
console.log(typeof students);  //output -> object

console.log(students[2]);  // remember, to pull individual values within an array to use square brackets around the index number

/* 
CHALLENGe
Go into the nested array and get 'iesha'
print out "Hello Iesha, you look nice today"
*/

function iesha(){
    console.log("hello," + " " + students[6][1] + " " + "you look nice today");  
}

iesha() 

console.log(`Hello ${students[6][1]}, you look nice today`)

let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheese cake', 'hotdog',];


// for (let i = 0; i < food.length; i ++ ){
//     console.log(food[i]);
// }
// for (let f of food){                FOR OF FUNCTION
//     console.log(f);
// }                              //outputs each item on a separate line, this is done because the function runs each line individually

food.push('pizza') //appends pizza to the end of the array
//console.log(food);
food.splice(1, 1, 'Bananas');  // first num: index number to start at, second num: number of things to remove, third num: replacement value
//console.log(food);
food.splice(2, 0, 'Sweet potatoe pie'); //adds it in without replacing anything
//console.log(food)
food.pop(); // removes the last value

