// Jacob Rachal 8/22/2018
// Day 3 - takehome


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
  //console.log(`Hello, ${myLastName}!  You are ${myNewAge} years old.`);

// Day 2 - Date ==============================
  //const today = new Date();
//new is a keyword, so it cannot be fiddled with by pesky programmers.
  //console.log(today); //get a long string of specifics

//getting just the day.
  //let day = today.getDate();
  //console.log(day); //get just the day # of the month.

// get the month
  //let month = today.getMonth() + 1;//months are stored in an array, so January is technically 'month 0', or index 0.
  //console.log(day, month);

// let year = today.getYear(); //kicked out 118, could do + 1900.
// ^^ counts up howeverlong it's been since 1900.
  //let year = today.getFullYear();// corrected
  //console.log(day, month, year);

// get the hour
  //let hour = today.getHours();
  // console.log(day, month, year, hour); //24-hour clock. Military time in other words.

//Putting it all together...
  //console.log(`${month}/${day}/${year}`);
//Working with the pre-made functions attached to a pre-made object.


// Day 2 - MATH!!! ==========================================
// Gets a random number.  Using JavaScript objects.
// const rand = Math.random(); //get a random # from 0 to 1, so a decimal with lot's of decimal places.

// pseudo- GIVES us a random number, then multiply it by ten.
// Next add 1 so we cannot get 0. Finally, round down the number.
  //const rand = Math.floor( (Math.random()*10) +1 ); //floor rounds down, the +1 rounds us up so we are above 0.
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
  //let name = prompt('Please enter your name:');
  //alert(name); //for day 2 takehome.

// Function definition
// end day 2

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// DAY 3 -- conditionals, comparison

//the 'if' statement
//if () {}
//if(1=='1')
if (1 === 1) {
  //console.log("I am here!");
  //console.log(true); //prints out true.
  //console.log(!true);// ! in JS represents 'not', same as in other computer langs. Also means we can take the opposite of things.
  //console.log(true);
}

if (1 !==18405826593 ) {
  console.log("I am here! 1");
}
if (1 !=="1" ) {
  console.log("I am here! 2");
}

//recap:
//  === Strict comparison of data type and value
// == Loose comparison
// ! Not
// !== Strict Not comparison
// != Loose Not comparison

if (1 === 2 ) {
  console.log("I am here! 3");
} else {
  console.log("In the else.");
} //no conditions on an else (unless it is an else if). Acts as the catchall.

if (1 === 1 ) {
  console.log("I am here! 4");
} else {
  console.log("In the else.");
}

//  < and >
if ( 3 > 1) {
  console.log("I am here! 5");
} else {
  console.log("In the else. 5");
}
if ( 0 > 1 ) {
  console.log("I am here! 6");
} else {
  console.log("In the else. 6");
}

// >= greater than or equal to, <= less than or equal to.
if ( 1 >= 1 ) { // the = sigh should always come second to the <> symbol.
  console.log("I am here! 7");
} else {
  console.log("In the else. 7");
}
//Reading JS just like reading english.

// recap part 2:
//> Greater Than
// < Less Than
// >= greater than or equal to
// <= Less than or equal to

const myNumb = 2; //1 or 2, or '1'
if ( 1 === myNumb ) {
  console.log("I am here! 8");
} else {
  console.log("In the else. 8");
}

// const userInput = prompt('Please enter a number:');
// if ( 1 == userInput ) { // the = sign should always come second to the <> symbol.
//   console.log("I am here! 9");
//   console.log("Is the User input 1? YES!");//user's input is a integer, but is getting read to the 'if' as a string.
// } else {
//   console.log("In the else. 9");
// }
//input tag in html.

//after the break.
// DAY 3 -- The LOGICAL OPERATORS
// AND OR

//starting w/ OR
// OR is symbolized by || pipes
//can string on as many ORs as you want
// const userInput = prompt('Please enter a number:');
// if ( userInput == 1 || userInput == 5 || userInput == 15) {
//   console.log("I am here! 10");
//   console.log("User's input is " + userInput);
// } else {
//   console.log("In the else. 10");
//   console.log("User's input is " + userInput);
// }

//AND &&
//&amp; // html for &
// const userInput = prompt('Please enter a number:');
// if ( userInput > 5 && userInput < 10) {
//   console.log("I am here! 11");
//   console.log("User's input is " + userInput);
//   //there are some use cases where you want nested if statements
//   //if TAB
// } else {
//   console.log("In the else. 11");
//   console.log("User's input is " + userInput);
// }
// //example
// if (storeIsOpen && storeHasItem) {
// }

//else-if
// const userInput = prompt('Please enter a number:');
// if ( userInput > 5 ) {
//   console.log("number is greater than five.");
//   console.log("User's input is " + userInput);
// } else if (userInput === '' || userInput === null) {
//   console.log("Userd  didn't enter anything.");
// }else if( userInput <5) {
//   console.log("Nummber is less than five.");
//   console.log("User's input is " + userInput);
// } else if ( userInput === '5' || userInput === "Five" || userInput === "five" || userInput == 5 ) {
//   console.log("User entered five.");
//   console.log("User's input is " + userInput);
// } else {
//   console.log("User did not enter a valid number / data type.");
//   console.log("User's input is " + userInput);
// }
//Can keep on a

// Day 3 -- Switch statements.
// const today = new Date().getDay() + 1; //Sunday is index 0, so need to adjust.
// console.log(today);

//Day 3 takehome section
let firstName = prompt("Please enter your first name: ");
let lastName = prompt("Please enter your last name: ");
//prompt, alert, confirm
let userColor = prompt("Alright! Now, out of the folowing 10 colors, which one is your favorite? Red, orange, yellow, green, blue, pink, purple, black, white, and grey. (Enter your answer as a lowercase string.)")
//need to include the user's name in the response messages!
switch (userColor) {
//   //comparing ^that against case THIS:
  case "red":
    alert("Things with this color tend to go faster.");
    break; //escapes the switch statement.

  case "orange":
    alert("Orange to meet you.");
    break;

  case "yellow":
    alert("Better start preparing to stop.");
    break;

  case "green":
    alert("Get that hammer down and go!");
    break;

  case "blue":
    alert("I like that color too!");
    break;

  case "pink":
    alert("Oink oink. :)");
    break;

  case "purple":
    alert("Royally nice.");
    break;

  case "black":
    alert("...so all the pigments?");
    break;

  case "white":
    alert("...so the visible spectrum?");
    break;


  case "grey":
    alert("...I got nothin'.");

    default:
    console.log("catchall");
}

// Day 3 -- MATH!!!!
const addition = 1 + 1;
const subtraction = 3 - 1;
const multiplication = 2 * 2;
const division = 10 / 2;
//remainder
const remainder = 11 % 3;
const remeven = 10 % 2;
const remodd = 11 % 2;
// console.log(remodd);
//Showing Matthew hwo to use the modulous / remainder operator to check in a # is even or odd.
if (remeven == 0) {
  console.log("got an even");
} else {
  console.log("got an odd");
}
console.log("Addition " + addition);
// Does order of operations still take precedence?

//Pseudo- what I came up whith
// let theirNum = 1;
// console.log(++theirNum);

//Instructor's solution
let theirNum = 1;
//Increment
// theirNum++;
//Decrement
// theirNum--;
//wrong way first
// theirNum = theirNum + 3; //DEFINITELY THE WRONG WAY. Reassigning the variable.
theirNum += 3; // The correct way of doing it.
theirNum -= 10;
theirNum *= 5;
theirNum /= 12;// with these 4 uncommented, should get -2.5
console.log(theirNum);

// FOR the last part of the takehome, use alerts within a switch case.
// On WED, doing arrays.
