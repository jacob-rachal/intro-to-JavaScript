// console.log("Hello World!");
// Jacob Rachal 9/10/2018
//JavaScript is Object-Oriented-Programming.
// console.log("Hello World!");
//access the console, go down a level, this is the action we want to do (or go down another level), passing our argument within parenthesees, passing along a string that says Hello World!.
// DAY 9 - Objects!!


// const string = new String('String');
let string = new String('String'),
  arrObj = new Array('String'),
  newObj = new Object({name: "Redbeard"});//SO, this format is the same as repeatedly typing 'let' in front of each of these declarations.
  // newBool = new Boolean(False),
  // newNum = new Number(19);
console.log(arrObj);
console.log(newObj);
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
console.log(myObj.last_name, myObj['last_name'], myObj.some_other_obj.something_else);
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

let email = prompt('What is your primary email address?'),
  userName = prompt('What is your username?'),
  passWord = prompt('What is your password?');

// User(email, userName, passWord);
// email regex (regular Expression)
// console.log(new User(email, userName, passWord));

const newUser = new User(email, userName, passWord);

newUser.getUserName();

console.log(`This user is valid: ${newUser.isValidUser()}`);
//is valid function is checking that the user did enter stuff into the fields. Use to check that the user did not submit empty todos.

// function returnPrompt(quest) {
//   return prompt(quest);
// }

// newUser.email = "blah";
// newUser.pets = 5;
// console.log(newUser);

//for the final project, the things to use from this is having a todo constructor that has 2 keys: the todo and the due date.
  // end day 9
