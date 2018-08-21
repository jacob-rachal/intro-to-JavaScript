// Jacob Rachal 8/15/2018
// Day 2 - variable and conslole.log.



// Day 2 - MATH!!! ==========================================
// Gets a random number.  Using JavaScript objects.
// const rand = Math.random(); //get a random # from 0 to 1, so a decimal with lot's of decimal places.

// pseudo- GIVES us a random number, then multiply it by ten.
// Next add 1 so we cannot get 0. Finally, round down the number.
// const rand = Math.floor( (Math.random()*10) +1 ); //floor rounds down, the +1 rounds us up so we are above 0.
// const rand = Math.floor( ((Math.random()*10) *10)+1 ); // returns a random # between 0 and 100.
// console.log(rand);

// Here are some other ways to notify the user
// Simple popup.
//alert(rand); //makes a popup when the page is loaded/reloaded.

// User clicks cancel or OK
//confirm(rand); //there is a way to get the user's response back from this.

//Accepts a user's input
//prompt(rand); //for input, you can get back the user's input.
// Accepts a user's input then alerts the name.
let name = prompt('Please enter your name:');
alert(name); //for day 2 takehome.

// Function definition
