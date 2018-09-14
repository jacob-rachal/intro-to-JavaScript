// Jacob Rachal 9/12/2018
//JavaScript is Object-Oriented-Programming.
// DAY 10 - TIMERS!! &  local_storage, strict, IIFE

// const string = new String('String');
let string = new String('String'),
  arrObj = new Array('String'),
  newObj = new Object({name: "Redbeard"});//SO, this format is the same as repeatedly typing 'let' in front of each of these declarations.
  // newBool = new Boolean(False),
  // newNum = new Number(19);
// console.log(arrObj);
// console.log(newObj);
//console.log(string);
// string is a prototype / child of the String class, has acces to and can choose which funcs to get from its parent.
// Prototypes are all the functions available to an object, inherited (like DNA) from the parent class.
// Getting there...
// console.log(Object.getPrototypeOf(string));//returns the actual parent of that type.

const myObj = {
  first_name: "Jacob",
  last_name: "Rachal",
  // firstName: null
  // only need a comma when have multiple things / key-value pairs within this object.
  some_other_obj: {
    something_else: "Else"
  }
}; //DO note that this is only ONE way to make an object!

// console.log(myObj);
// console.log(myObj, myObj.hasOwnProperty('someProp'));
// console.log(myObj, myObj.hasOwnProperty('first_name'));
//constructor function - creates a new instance of an object.
// hasOwnProperty- checks to see if an object has a particular property or not. It doesn't check to see if that property has any data attached to it.

// dot notation or [] brackets - the 2 ways of obtaining the value of a key.
// console.log(myObj.last_name, myObj['last_name']); //cout-> Rachal Rachal
// console.log(myObj.last_name, myObj['last_name'], myObj.some_other_obj.something_else);
// THIS ^ is where using the hasPropertyOf would come in handy, checking to see if you have something_else before you run things.

// Constructor Functions
let user = {
  email: "jacobrachal@gmail.com",
  user_name: "jrachal",
  password: "Galmeraz54%"
  // real_name: {
  //   users_first_name: "Jacob",
  //   users_last_name: "Rachal"
  // }
};

// console.log(user);
//creating a function.
function User(email, userName, passWord) {
  // console.log(email, userName, passWord);
  this.email = email;
  this.user_name = userName;
  this.password = passWord;
  this.getUserName= function() {
    console.log(this.user_name);
  };
  // return this;
  this.isValidUser = function() {
    if(this.email && this.user_name && this.password) return true;
    else return false;
  }
};

// let email,
//   userName,
//   passWord;

// let email = prompt('What is your primary email address?'),
//   userName = prompt('What is your username?'),
//   passWord = prompt('What is your password?');

// User(email, userName, passWord);
// email regex (regular Expression)
// console.log(new User(email, userName, passWord));

// const newUser = new User(email, userName, passWord);

// newUser.getUserName();

// console.log(`This user is valid: ${newUser.isValidUser()}`);
//is valid function is checking that the user did enter stuff into the fields. Use to check that the user did not submit empty todos.

// function returnPrompt(quest) {
//   return prompt(quest);
// }

// newUser.email = "blah";
// newUser.pets = 5;
// console.log(newUser);

//for the final project, the things to use from this is having a todo constructor that has 2 keys: the todo and the due date.
  // end day 9

//copying over the stuff from day 9 just in case.
// ====================== DAY 10 == timers, local_storage, session_storage, strict, IIFE

// TIMERS

// var timer;
// var interval; //set by the user.
//
// function delayAlert (duration) {
//   duration = duration * 1000;
//   timer = setTimeout(triggerAlert, duration);
//   // timer = setTimeout(triggerAlert, 3000);//func to be ran and the time we want to wait in milliseconds
//   //now telling it to stop
//
// };//so 3 seconds
// function triggerAlert(){
//   alert("Timer Complete! Reached triggerAlert function.");
// };
//
// function cancelAlert() {
//   clearTimeout(timer);//
// };
//
// //setinterval functions.
// function intervalAlert(duration) {
//   duration = duration * 1000;
//   interval = setInterval(triggerAlert, duration);
//   // interval = setInterval(triggerAlert, 3000);
// };
//
// function cancelInterval(){
//   clearInterval(interval);
// };
//
// document.getElementById("timer-start").addEventListener("click", function (){
//   //things!
//   let time = prompt("How long would you like to wait (in seconds): ");
//   delayAlert(time);
//
//   // delayAlert(prompt("Input the delay duration in seconds: "));
// });
// //cron jobs. lookup
//
// //for canceling the timer.
// document.getElementById("cancel-timer").addEventListener("click", function (){
//   // delayAlert();
//   cancelAlert();
//   alert("Timer Canceled! Doing nothing.");//or have in a log.
//
// });//don't leave unused functions in production.
// // when dealing with timers, can add and remove classes
// // UX - user experience.
//
// //setInterval.
// document.getElementById("interval-start").addEventListener("click", function (){
//   let time = prompt("How long would you like this to occur (in seconds): ");
//   intervalAlert(time);
//   // intervalAlert(prompt("Enter the duration time in seconds: ")); //even though this works, kinda bad form.
// });
//
// document.getElementById("cancel-interval").addEventListener("click", function (){
//   cancelInterval();
//   console.log("Canceled the repeating alert!");
// });

// making a countdown timer.
// const clock = document.getElementById("clock");

function checkTime (i) {
  if (i < 10){i= "0" +i};
  return i;
}; // makes our clock more normal-looking.

function displayClock(){
  const clock = document.getElementById("clock");

  setInterval(function () {
    var today = new Date();
    var hour = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    min = checkTime(min);
    sec = checkTime(sec);
    clock.textContent = `${hour}:${min}:${sec}`;
  }, 1000);//callback function.
};
displayClock();

// LOCAL STORAGE yay
// Think of how Youtube starts a video from when you last paused & closed out of it. Kinda like that.
function storeUser(username) {
  window.localStorage.setItem('user', username); //allows you to take an item and store it into the browser's storage.
};//can usefacebook.user, facebook_user

function getUser() {
  return window.localStorage.getItem('user');
}

document.getElementById("displayUsername").addEventListener("click", function (){
  let user = document.getElementById("currentUser");
  user.textContent = getUser();
});

document.getElementById("get-username").addEventListener("click", function (){
  var usr = prompt("What is your username?");
  storeUser(usr);
});
// on my attempt, did this in the console of the browser:
// > localStorage.getItem('user')
// >>"Redbeard87523"

//Session Storage - only is stored within the session of that browser. Close the browser, loose the memory.
// works exactly the same way as localStorage.

// iife. Immediately Invoked Function Expression
// Allows you to call an anominous func that runs within itself.
//prevents scope bleedout, leak.
var number = 1;
// now putting an anon func within a variable
var getNumber = (function(x) {
  return function(){
    alert(x);
  };
}(number));
//can also do var getNumber = ((x) => {
number = 2; //this updates number, but is not in the scope of func getNumber().
getNumber();



// end day 10
