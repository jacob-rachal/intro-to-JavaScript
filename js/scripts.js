// Jacob Rachal 8/27/2018
// Takehome

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// DAY 3 -- conditionals, comparison

//recap:
//  === Strict comparison of data type and value
// == Loose comparison
// ! Not
// !== Strict Not comparison
// != Loose Not comparison

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

let myArray = ['Red', 'Blue', 'Green', 'Purple', 'Red', 'Black', 'White', 'Gray'];//can be an array of strings, #'s, objects, other arrays.
// arrays start with a zero-index for their first item.
// let red = myArray[0];
console.log(myArray[1]);
console.log(myArray.length); //returns the length of an array, the total # of THINGS within said array.
//Will probably be learning how to loop using this.

//new array
// let about = ['Name', age, 'Fact', true/false];
let about = ['Jacob', 26, 'Gravity is a force', true]; //multiple data types, not exactly a good thing.
console.log(about);//got back -> (4) ["Jacob", 26, "Gravity is a force", true]

// SO, lets make an array and see if we can manipulate it.
// let nums = [1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   9
// ]; //what we may have to set the array as when it has to hold other arrays. Or something!
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//console.log(Array.isArray(nums)); //checks if something IS an array. Returns true/false
// nums.push(10); //adds included element to the back of the array.
// nums.push(11, 12, 13); //can add multiple things as long as they are separated by commas.
// snums.unshift(0); //Places the element to the BEGINNING of the array. Not as important as push, but still useful.
// nums.pop();//VERY IMP! Don't pass anything to it. It rempoves the last item of the array. Will have to use loops or multiple lines to remove multiple items.
// nums.shift(); //Removes the FIRST element of the array. I wsh I had this back in my early Computer Science days.
// nums.splice(6); //goes to given index, then removes everything from that index on to the right.
// nums.splice(6,1); //  go to this index, then remove this many spaces from it.
// nums.splice(1,4); //"remove 2 thru 5". Useful since you may want to remove info from the middle of an array without touching the beginning or the end.

// let sliceArr = nums.slice(3); //slice creates a new array from the given index onwards. Doesn't harm parent array.
// let slice = nums.slice(3, 6); //designate the slice between indexes 3 to 6 w/out including the 6th index.
// console.log(nums);
// console.log(sliceArr);
// console.log(slice);

//going back to the color array.
// console.log(myArray.indexOf('Green')); // returns the index of the given value of said array.
//example below of indexOf in action.
// let color = myArray.indexOf('Green');
// console.log(myArray[color]); //should return Green.  Lets us have more control over manipulating the array elements, or finding info about array elements.

//Going back to the nums array.
console.log(nums);

//going back to the numbers array. to remove something.
// let color = myArray.indexOf('Green'); //insert a color here, it will get removed from myArray.
// myArray.splice(color, 1); //we only want to remove one item.
// console.log(myArray);


//Say we want to get the last index of an array. There are two ways of doing this.
let lastIndex = myArray.length -1; //the wrong way to do it.
let properLastIndex = myArray.lastIndexOf('Red'); //returns the index of the last index of singular/multiple instances of the given input.
// console.log(properLastIndex);//won't be doing it this way.


// console.log(myArray.reverse()); //returns the reversed array.

//something really weird
// console.log(myArray.sort()); //sorts the array alphabetically.
// console.log(myArray.sort().reverse()); //reverses the alphabetical array.

//recap
// .push -Adds new item to the end of the array.
// .unshift - Adds new item to the beginning of the array.
// .pop -Removes the last item of an array.
// .shift - Removes the first item in the array.
// .splice - Cuts out section of the array.
// .slice - Makes a copy of the array and then cuts the array.
// .indexOf - Gives the index of an item in the array.
// .reverse - Reverse the array.
// .sort() -Sorts the array.


// day 4 LOOPS ===================================================================
// 6 different types of loops: while, for, do-while, for-each, for-of, for-in. And break & continue.

// let num = 0;
// while (num < 10) {
//   console.log(num);
//   num++;
// }
// console.log(num);
// for (let i = 0; i < 10; i++) { //can decrament via i--.
//   //console.log(num); //0 is printed 10 times.
//   console.log('I have ran');
// }//will be used the most.

//do-while. condition is evaluated after the action is performed.
// do {
//   num++;
//   console.log(num);
// } while (num < 10); //we won't use nearly as much.

// for each loops. Using myArray. Scratch that, doing later since it involves using functions.

//Exercise: using a for loop to print out each color int he myArray.
// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

//doing arrays within arrays "try it yourself" from the dayFour page.
let myFavoriteMovies = [];
let firstFav = ["The LEGO Movie", "2015"];
let secondFav = ["STAR WARS Ep. 4", "1981"];
let thirdFav = ["Frozen", "2016"];
myFavoriteMovies.push(firstFav, secondFav, thirdFav);
// console.log(myFavoriteMovies[2][1]); //get the year of the 3rd film.
let movieYears = [];
// movieYears.push(myFavoriteMovies[0][1], myFavoriteMovies[1][1], myFavoriteMovies[2][1]);
for (let i =0; i <  myFavoriteMovies.length; i++) {
  movieYears.push(myFavoriteMovies[i][1]);
}
console.log(movieYears);

//Regarding Homework...
// start off

//end with ...

//next week we have a sub.
// TAKEHOME SECTION for dayFour

//make an array of things todo this weekend.
// let toDoWkEnd = [];
// //get 3 things from user.
// let thingOne = [prompt("What is the first thing you need to do this weekend?")];
// let thingTwo = [prompt("What is the second thing you need to do this weekend?")];
// let thingThree = [prompt("What is the third thing you need to do this weekend?")];
//
// toDoWkEnd.push(thingOne, thingTwo, thingThree);
// // console.log(thingOne); //checking that it works.
//
// //for loop now.
// for(let i=0; i<toDoWkEnd.length; i++) {
//   //get a random # and attach it to one of the elements
//   //reuse nums?
//   toDoWkEnd[i].push(nums.length%i);
//   //can use prompt to the user to ask them how long item should take.
//   // let temp = prompt()
// }
//
// // while loop here.
// while (i<2) {
//   //find the longest day, log to the console
// }

//in a do-while, add 'easy-peasy' to the other 2 that weren't the longest.

// Lastly, alert the arrays that have easy-peasy in them.
//
//
// // With Ryeker ===================================================================================
// let todos = [];
// let todo1 = prompt("Hey there, what are you doing?", "Eat Cheese."); //2nd string is the default
// // let timeframeOne = prompt("How long should this take you? (in days)", "1");
// let todo2 = prompt("Hey there, what are you doing?", "Eat Meat."); //2nd string is the default
// // let timeframeTwo = prompt("How long should this take you? (in days)", "2");
// let todo3 = prompt("Hey there, what are you doing?", "Play Golf."); //2nd string is the default
// // let timeframeThree = prompt("How long should this take you? (in days)", "3");
//
// //making arrays.
// let todoOneArr = [todo1]//, timeframeOne];//not a pleasent way of doing it.
// let todoTwoArr = [todo2]//, timeframeTwo];
// let todoThreeArr = [todo3]//, timeframeThree];
// //on windows, place selector on a line and hold down Ctrl, click on other lines...BOOM.
// todos.push(todoOneArr, todoTwoArr, todoThreeArr);
// //push is a function.
//
// //a for loop.
// for(let i = 0; i<todos.length; i++) {
//   //todos[i]
//   let timeframe = prompt(`About how many days should ${todos[i][0]} take? (Please provide in days)`, "1"); //default of 1 days
//   //parsinteger, to convert our string reply into a int so we can compare the # of days later on down the line.
//   //parseInt(timeframe); //takes any data type and tries to convert it into an integer.  It doesn't change the parameter for the rest of the code's life.
//   let temp = parseInt(timeframe); //or could reassign timeframe.
//   if(!isNaN(temp) ) {
//     todos[i].push(temp);
//   } else {
//     todos[i].push(1); //Edge Casing: catching potential errors for your user. Not the best way in this case.
//   }
//   //todos[i].push(parseInt(timeframe));
// }
// // NaN ::not a Number.  not exactly a error, but it does say invalid number.
// // isNaN() --returns a true/false on if element is NOT a NUMBER. So if it is a number, returns false.
// // How you evaluate if something is NOT a #.
//
// //while loop section.
// let n = 0; //iterator
// let max = 0; //comparator. Global variable.
// while (n < todos.length) {
//   if (max < todos[n][1]) {
//     max = todos[n][1];
//   }
//   n++; //end of loop.
// }
// //pseudocode.
//
// let m = 0;
// // while (m < todos.length) {
// //   if (max = todos[m][1] ) {
// //     console.log(`${todos[m][0]} is the thing that will take the longest.`);
// //   } else {
// //     todos[m].push("easy-peasy");
// //   }
// //   m++;
// // }
// do {
//   if (todos[m][1] === max) {
//     // console.log(`${todos[m][0]} is the thing that will take the longest.`);
//     console.log(todos[m]);
//   } else {
//     todos[m].push("easy-peasy");
//     alert(todos[m]);
//   }
//   m++;
// } while(m < todos.length);
//DONE! Ack.

//8/27/2018
//day 5
//HOISTING
//JavaScript reads the code and saves all the vars and functions, and then it runs the code.
console.log(name);
var name = "Ryker"; //Declare and define a variable.

//FUNCTIONS.
//var practice = "2" + 2;
// ==22, since it concatenates 2 and 2.

// Anonymous FUNCTIONS. Don't have names.
//need the function keyword. Will run one time and never again.
// function (name, age) {
//   // return `My name is ${name} and I am ${age} years old`;
//
// }; //Function DEFINITION.
//JavaScript is an asynchronus language.

//Named FUNCTIONS. (day 4 takehome.)
// function getTodos(question) {
//   todos.push(prompt(question));
//   //have a var here, considered global.
//   //return ;
// };//Function Def.
//can refer to itself.

//func calls.
// getTodos("What's the first thing you want to do?");
//function call site.
// getTodos("What's the next thing you want to do?");
// getTodos("What's the last thing you want to do?");

//expression VS declaration.

nameThatBand("Coldplay");
function nameThatBand(bandName) { //function DECLARATION
  // return alert(`${bandName} is overrated`);
};

//expressions are usefull when you don't want your function getting pulle dout of scope, or if you are awaiting input from the user.
// function nameThatBand(bandName) { //function DECLARATION
//   return alert(`${bandName} is overrated`);
// };
// let sayHello = function() { //func EXPRESSION.
//   alert("Hello");
// };
// sayHello(); //func call

//Recursive FUNCTION.
let incr = 0;
let sayGoodBye = function() {
  if(incr > 5) {
    alert("Goodbye again!");
    incr++;
    sayGoodBye();
  } else {
    return;
  }
};

// sayGoodBye();

//Arrow functions from ES6 (=>) semi-replaced arrow funcions.

//"FAT" arrow FUNCTIONS.
//more than one arguments
// () => (); //POINTLESS but basic form. Take 0 arguments and return 0 things.

() => { //Arrow function that takes 0 args and performs data manipulation
  incr++;
  if (incr<5) {
    sayGoodBye();
  }
  return //funcs don't have to return.
};

pasta => { //takes 1 argument (can have parentheses or not) and alerts a string.
  alert(`My favorite pasta is ${pasta}!`);
};

pasta => (pasta.toUpperCase()); //acting like anonymous func.

(car, house) => {
  //call an API to save this data...
  return  `The returned info is ${data}`;
}

//=============== SELF CHALLENGE: look thru GitHub and read random HTML/ CSS/ JS repos and see if you understand things. =================


//Try it yourself challenges:

//calculating a dog's age.
//Accept 1 argument (age of the dog in years).
let dogAge = prompt("How old is your dog? (In human years)");
let doge = parseInt(dogAge);
let doTH = function() {
  let finale = doge*7;
  alert(`That dog is ${finale} years old in DOG years.`);
};
doTH();
// Return the age of the dog using the conversion rate of 1 year to 7 "dog" years.
// Alert the answer.
//Ryker's attempt
function calculateDogYears(age) {
  let parsed = parseInt(age);
  if(!isNaN(parsed)) {
    return parsed * 7;
  } else {
    let newAnswer = prompt("Come on! I said a NUMBER of years!", "1");
    calculateDogYears(newAnswer);
  }
};

// let dodgeAge = prompt("how old is your dog?", "10");
// alert(calculateDogYears(dodgeAge));

//lifetime supply challenge.
// Accept 2 arguments (age of person now, amount of product per day).
// Calculate the supply needed for the rest of the user's life, based on a constant max age of 80.
// Alert the answer in this format: "You will need x to last you until you're y.
// BONUS: write it to accept a dynamic max age.
//ran out of time.

//METHOD vs FUNCTION.

// There is a basic, but important difference

// A function is a piece of code that is called by name. It can be passed data to operate on (i.e. the parameters) and can optionally return data (the return value). All data that is passed to a function is explicitly passed.
// A method is a piece of code that is called by a name that is associated with an object. In most respects it is identical to a function except for two key differences:
// A method is implicitly passed the object on which it was called.
// A method is able to operate on data that is contained within the class (remembering that an object is an instance of a class - the class is the definition, the object is an instance of that data).


//examples of methods and functions.
// parseInt();//needs arguments.

// "Ryeker".toUpperCase();//doesnot need arguments.
// console.log("Ryeker".toUpperCase());//methods implicitly uses the thing to the left of the period.


// TAKEHOME DAY 5 SECTION.
// Instructions;;;
// On your takehome-day5 branch write a program that uses functions to:
//
// Take a number and return the square of that number (power of 2).
// If a non-number argument is passed into the function, alert NaN and prompt for another response
function checkSquare(n) {
  let parsed = parseInt(n);
  if(!isNaN(parsed)) {
    return parsed * parsed;
  } else {
    let newAnswer = prompt("Come on! I said a NUMBER in NUMERIC form!", "1");
    checkSquare(newAnswer);
  }
};
let getSq = prompt("Pass me an integer in numeric form, and I'll squate it for you.", "2");
alert(checkSquare(dodgeAge)); //Done? I think so for this one.

// In a second function, capitalize the first letter of a string and add a period (.) to the end of the string if it doesn't already end with a period
function grammarCheck (s) {
  //pass the string into an array? Thank you GOOGLE!
  let temp = s.split(""); //split morphs a string into an array of substrings, and the "" separates each character including the whitespace.
  temp[0].toUpperCase();
  //period checking + adding...
  if ( temp[temp.length-1] != '.' ) {
    temp.push('.');
  }
  //return temp; //?
};
//Include a function call here?

// Create a string that will flip the position of the first and second half of a string. For example, the string “abcdef” would be returned as “defabc”. Hint: use substring.
function flipped (str) {
  let temp = str.split("");
  let midpoint = temp.length / 2;
  //Don't forget to adjust for array's addressing quirk.
  //use array.slice(start, end)? Doesn't effect original array, copies into new array.
  //array.splice() seems like the best choice here.
};
// BONUS: If you are bored by all that, write a function that checks if a given string is a palindrome.
