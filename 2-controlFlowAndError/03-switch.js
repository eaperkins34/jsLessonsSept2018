/*
SWITCH
*/
 let friend = 'Alecx';

 switch (friend) {
     case 'Tom':
        console.log('Hey Tom, when are you rock climbing?');
        break;
    case 'Ken':
        console.log('Hey Ken, wanna play Catan?');
        break;
    case 'Carolyn':
        console.log('Hey Carolyn, why are you leaving?');
        break;
    default: 
        console.log(`I'm sorry, ${friend}, but do I know you`);  //having the back tics (``) allows you to enter a variable in ${} 
 }

 /////CHALLENGE
 
 let dessert = 'pie';

 switch (dessert) {
     case 'pie':
        console.log('Pie, pie, me oh my!');
        break;       
    case 'cake':
        console.log('Cake is great!');
        break;
    case 'ice cream':
        console.log('I scream for ice cream!');
    default:
        console.log(`Sorry, ${dessert} is not on the menu.`);
 }

 let yep = -18;

 switch(true){
    case (yep < 0 && yep > -10):
        console.log('worked');
        break;
    case (yep > 0):
        console.log('worked here');
        break;
    default:
        console.log("didn't work");
 }