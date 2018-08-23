// Jacob Rachal 8/22/2018
// Day 2 - variable and conslole.log and MATH.

// Here are some other ways to notify the user
// Simple popup.
//alert(rand); //makes a popup when the page is loaded/reloaded.
// User clicks cancel or OK
//confirm(rand); //there is a way to get the user's response back from this. (TAKE AS A BOOLEAN)
//Accepts a user's input
//prompt(rand); //for input, you can get back the user's input.
// Accepts a user's input then alerts the name.

//for day 2 takehome.
let firstName = prompt('Please enter your first name:');
let lastName = prompt('Thanks! Now please enter your last name:');
console.log("The user's first name is " + firstName);
alert("The user's last name is: " + lastName);

let userBDay = prompt("Excellent! One more question for you. What's your birthday in (mm/dd/yy) format? ");
let dodad = confirm(" Is " + userBDay + " really your birthday? (Click OK for yes and CANCEL for no.)" );
//Hang on, let me see if this works...
if (dodad) {
  console.log(dodad);
  alert(firstName + " " + lastName +"'s birthday is on " + userBDay);
} else {
  console.log(dodad);
  alert(firstName + " " + lastName +"'s birthday is NOT on " + userBDay);
}// Wow, it does work.
