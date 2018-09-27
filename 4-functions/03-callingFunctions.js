/*
CALLING FUNCTIONS
*/

function hi(){
    console.log('hello');
}

//hi //nothing, runs but does not produce a result

hi();
console.log(hi);

console.log(hi()); //output -> hello, undefined. it pulls 'hi()' first and then pulls console.log(hi). goes with order of operations as it pulls what's inside the () first