// Jacob Rachal 8/22/2018
// Day 3 - takehome
// Day 3 -- Switch statements.

//Day 3 takehome section
let firstName = prompt("Please enter your first name: ");
let lastName = prompt("Please enter your last name: ");
// Types of popups to use: prompt, alert, confirm
let userColor = prompt("Alright! Now, out of the folowing 10 colors, which one is your favorite? Red, orange, yellow, green, blue, pink, purple, black, white, and grey. (Enter your answer as a lowercase string.)")
//need to include the user's name in the response messages!
switch (userColor) {
//   //comparing ^that against case THIS:
  case "red":
    // I attempted to use an OR within the checker for "Red", but it didn't work.
    alert("I don't know if you know this, " + firstName + " " + lastName + ", but things with this color tend to go faster.");
    break; //escapes the switch statement.

  case "orange":
    alert("Orange to meet you, " + firstName + " " + lastName + "!");
    break;

  case "yellow":
    alert("Oh for-!  Don't look directly at the sun, " + firstName + " " + lastName + "!");
    break;

  case "green":
    alert("I have a need, " + firstName + ".  The need for speed!");
    break;

  case "blue":
    alert("Hey " + firstName + " " + lastName + ", I like that color too!");
    break;

  case "pink":
    alert("Hey " + firstName + " " + lastName + ", I didn't know you knew of the hacker Pinkie Pie. :)");
    break;

  case "purple":
    alert("Royally nice, " + firstName + " " + lastName + ".");
    break;

  case "black":
    alert("...so all the pigments, right " + firstName + " " + lastName + "?");
    break;

  case "white":
    alert("...so the visible spectrum, right " + firstName + " " + lastName + "?");
    break;

  case "grey":
    alert("...I got nothin' " + firstName + " " + lastName + ".");

  default:
    alert("Something went wrong, refresh the page and try again.")
    console.log("The user failed to input an answer that could be properly read.");
}

// Day 3 -- MATH!!!!
// const addition = 1 + 1;
// const subtraction = 3 - 1;
// const multiplication = 2 * 2;
// const division = 10 / 2;
//remainder
// const remainder = 11 % 3;
// const remeven = 10 % 2;
// const remodd = 11 % 2;
// console.log(remodd);
//Showing Matthew hwo to use the modulous / remainder operator to check in a # is even or odd.
// if (remeven == 0) {
//   console.log("got an even");
// } else {
//   console.log("got an odd");
// }
// console.log("Addition " + addition);
// Does order of operations still take precedence?

//Pseudo- what I came up whith
// let theirNum = 1;
// console.log(++theirNum);

//Instructor's solution
// let theirNum = 1;
//Increment
// theirNum++;
//Decrement
// theirNum--;
//wrong way first
// theirNum = theirNum + 3; //DEFINITELY THE WRONG WAY. Reassigning the variable.
// theirNum += 3; // The correct way of doing it.
// theirNum -= 10;
// theirNum *= 5;
// theirNum /= 12;// with these 4 uncommented, should get -2.5
// console.log(theirNum);

// FOR the last part of the takehome, use alerts within a switch case.
// On WED, doing arrays.
