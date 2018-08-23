// Jacob Rachal 8/22/2018


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

// const today = new Date().getDay();
// switch (today) {
//   //comparing ^that against case THIS:
//   case 0:
//     console.log("Sunday");
//     break; //escapes the switch statement.
//
//   case 1:
//     console.log("Monday");
//     break;
//
//   case 2:
//     console.log("Tuesday");
//     break;
//
//   case 3:
//     console.log("Wednesday");
//     break;
//
//   case 4:
//     console.log("Thursday");
//     break;
//
//   case 5:
//     console.log("Friday");
//     break;
//
//   case 6:
//     console.log("Saturday");

    //default:
    //console.log("catchall");
// }

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

// DAY 4 -- ARRAYS and LOOPS
// 8/22/2018

let myArray = ['Red', 'Blue', 'Green', 'Purple', 'Black', 'White', 'Gray'];//can be an array of strings, #'s, objects, other arrays.
