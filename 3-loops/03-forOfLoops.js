/*
FOR OF LOOPS

better for arrays
*/

/*
let student = {name: 'Emily', awesome: true, degree: 'JavaScript', week: 1};
    for (let key of student) {                                                          THIS WON'T WORK!!!
        console.log(key);
    }
    */


let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon'];

for (cat of catArray){
    console.log(cat, 'says meow');       //output -> 0F pulls the value of tabby, british shorthair,  etc
} 

for (cat in catArray){ 
    console.log(cat, 'says meow');      // output -> IN pulls the key(position) of 0 1 2 3 etc
}