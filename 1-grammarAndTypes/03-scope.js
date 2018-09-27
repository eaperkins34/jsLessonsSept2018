//3 main keywords for declarations. Var, Let, Const

/*SCOPE
Javascript has both LOCAL and GLOBAL SCOPE 
*/

var x = 12; //GLOBAL scope

function scope () {  //LOCAL scope
    var x = 33;
    console.log(x);
}
scope(); // output -> 33
console.log(x);  // output -> 12

//when pulling function scope () pulls at a local level, console.log pulls at a global level

var x = 12 //globally, single variable named x

function scope() {  
    x = 33;           //changes x on a global scale, redefinining x
    console.log(x);
}

scope();  //output -> 33
console.log(x); // output -> 33

/*
the two examples above are different because the first example had 2 variables named "x".
the second example had just 1 variable named "x" in the global scope.
*/

var x = 12;   //global (state)

function scope() {
    var x = 33;   //local (county)
    if (true) {
        var x = 45;   //more local (city)
        console.log(x);  // guess -> 45, actual -> 45
    }
    console.log(x);  // guess -> 33, actual -> 45
}
scope();
console.log(x); // guess -> 12, actual ->12

/*
^^^example shows why var can be more difficult to work with
Var obeys global scope and local scope, but ignores any block within local scope
*/

let x = 12

function scope() {
    let x = 33;
    if(true) {
        let x = 45;
        console.log(x);  // output -> 45
    }
    console.log(x); // output -> 33
}
scope();
console.log(x); // output -> 12

//

function constTest() {
    const scope = 1;
    if (true) {                //this variable only exists within the curly brace
        const scope = 2;       //single use, as soon as this function ends, it gets deleted
        console.log(scope);
    }
    console.log(scope);
    if(true) {
        const scope = 3;
        console.log(scope);
    }
    console.log(scope);
}
constTest();

/*
    variable declar.                   obeys functional scope    obeys block scope   can be mutated (changed after initialization)
    var  (operates on lvl 1 & 10)                 x                         o                   x
    let (operates on lvl 1-10)                    x                         x                   x
    const                                         x                         x                   o
*/