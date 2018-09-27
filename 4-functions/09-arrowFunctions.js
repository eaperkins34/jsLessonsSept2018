/*
ARROW FUNCTIONS
*/

function chocolateMilk() {
    console.log("chocolate milk is awesome.");
}

chocolateMilk();

let tea = () => {                        // arrow functions do not get hoisted
    console.log('tea sucks');
}

tea()


var cats = (kitten, puppy) => {
    console.log(`I have ${kitten} cats, and ${puppy} dogs.`);
}

cats(2, 2)

// Arrow Function Body Styles
//     Concise    -    single function use
let apples = x => console.log(`There are ${x} apples.`);
apples(5);

//     Block   -     function that can do multiple functions/equations
let peaches = (x) => { 
    console.log(`There are ${x} peaches.`)
}         //cannot break up the middle of the function across mutliple lines like ternaries

peaches(5)




