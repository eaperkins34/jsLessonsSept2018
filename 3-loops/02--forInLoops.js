/*
FOR IN LOOPS

Great for iterating over values in an object
*/
//             item     value     item/key value 
let student = {name: 'Christian', awesome: true, degree: 'JavaScript', week: 1}

// for (let item in student) {
// //    console.log(typeof item);
//     console.log(student[item]);
// }

let catArray = ['tabby', 'british shorthair', 'burmese', 'main coon'];

for (cat in catArray){
    console.log(catArray[cat]);
}

/*Challenge:
Write a for in loop that capitalizes the first letter of a students name
*/

let name = 'emily';
let capName = '';
for (let ch in name){
    if (ch == 0) {
        capName = name[ch].toUpperCase();
    } else {
        capName = capName + name[ch].toLowerCase();
    }
}
console.log(capName);
 //   console.log(name[charAt(0).toUpperCase() + slice(1).toLowerCase() ]); ?????<would this work

 