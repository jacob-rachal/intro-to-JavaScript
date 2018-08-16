// Jacob Rachal 8/15/2018
// Day 2 - variable and conslole.log.

// Day 2 - Console log, Var, and String Interpolation
// Log out into the console a string that says "Hello World!"
console.log("Hello World!");

//Declairing a variable with type STRING, contents are my first name.
var myName = "Jacob";
// Can also call it mYnAmE.
var myAge = 26;
// Have variable names reflect what they contain!
// This is the only way to declare a variable in ES5, there are about 3 methods in ES6 or ES7.
console.log(myName, myAge);
// console.log(myAge);
// Look and see if these variables are declared ABOVE where they are used, else get an undefined error.

// String interpolation= Combine a string and a var that is also a string or a group of strings, to make a bigger string.
console.log("Hello, " + myName + "!");
// adding age, leaving in the above stuff to see where I've come from.
myName = "Frank"; //showing how myName can be redeclared.
console.log("Hello, " + myName + "!  You are " + myAge + " years old.");

// new stuff for making new variables.
const myLastName = "Rachal";//constant, cannot be changed or redeclared later
let myNewAge = 27; //more rigid than var.

// *Log out into the console myLastName and myNew Age the ES5 way.
console.log("Hello, " + myLastName + "!  You are " + myNewAge + " years old.");

// the ES6 way, with backticks (just below ESC key) AKA Grave Accent (Thanks Wikipedia).  Wrap the variable names like so: ${var}
// *Log out into the console myLastName and myNewAge the ES6 way.
console.log(`Hello, ${myLastName}!  You are ${myNewAge} years old.`);

// Day 2 - Date ==============================
const today = new Date();
//new is a keyword, so it cannot be fiddled with by pesky programmers.
console.log(today); //get a long string of specifics

//getting just the day.
let day = today.getDate();
console.log(day); //get just the day # of the month.

// get the month
let month = today.getMonth() + 1;//months are stored in an array, so January is technically 'month 0', or index 0.
console.log(day, month);

// let year = today.getYear(); //kicked out 118, could do + 1900.
// ^^ counts up howeverlong it's been since 1900.
let year = today.getFullYear();// corrected
console.log(day, month, year);

// get the hour
let hour = today.getHours();
console.log(day, month, year, hour); //24-hour clock. Military time in other words.

//Putting it all together...
console.log(`${month}/${day}/${year}`);
//Working with the pre-made functions attached to a pre-made object.


// Day 2 - MATH!!! ==========================================
// Gets a random number.  Using JavaScript objects.
// const rand = Math.random(); //get a random # from 0 to 1, so a decimal with lot's of decimal places.

// pseudo- GIVES us a random number, then multiply it by ten.
// Next add 1 so we cannot get 0. Finally, round down the number.
const rand = Math.floor( (Math.random()*10) +1 ); //floor rounds down, the +1 rounds us up so we are above 0.
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
