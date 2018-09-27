/*
ELSE
*/

weather = 75;

if(weather < 70) {
    console.log('Wear a jacket!');
} else {
    console.log('No jacket necessary!');
}

name = 'emily';
if(name === 'emily'){
    console.log('Hello, my name is emily');
} else {
    console.log('What is your name?');
}


function name(string){
   console.log(string.charAt(0).toUpperCase()); //pulls first letter and makes it upper case
   console.log(string.slice(1).toLowerCase()); //pulls remainder of word and makes lower case
   return string.charAt(0).toUpperCase().slice(1).toLowerCase();
}

name('itALy');

let name = 'eMILy';
if (name[0] == name[0].toUpperCase()){
    firstLetter = name[0] + name.slice(1).toLowerCase();
    console.log(firstLetter);
} else {
    otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log(otherLetters);
}

/*
ELSE IF
*/
// CHALLENGE!!! 
let age = 36;
if(age <= 17) {
    console.log("Sorry, you're too young to do anything");
} else if (age >= 18 && age < 21) {
    console.log("Yay! You can vote!");
} else if (age >= 21 && age < 25) {
    console.log("Yay! You can drink!");
} else if (age >= 25) {                         //can also do else {console.log('rent a car);}
    console.log("Yay! You can rent a car!");
}

let age = 24
if(age >=25) {
    console.log('yay, you can rent a car');
} else if (age >= 21){
    console.log('yay, you can drink');
} else if (age >= 18){
    console.log("yay you can vote");
} else {
    console.log("sorry, you're young");
}
 