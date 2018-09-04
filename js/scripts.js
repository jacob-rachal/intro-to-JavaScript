// console.log("Hello World!");
// Jacob Rachal 8/29/2018
//JavaScript is Object-Oriented-Programming.
console.log("Hello World!");
//access the console, go down a level, this is the action we want to do (or go down another level), passing our argument within parenthesees, passing along a string that says Hello World!.
// DAY 6

// takehome for day 5, with Ryeker.
//part 1
// let answer = powerOfTwo(parseInt(prompt("What do you want to square?", '2')));

function powerOfTwo (number) {
  if(!isNaN(number)) {
    return number*number;
  } else {
    alert("NaN");
    let answer = powerOfTwo(parseInt(prompt("That wasn't a number! What Number?", '2')));
    //alert(answer);
  }
};
// alert(answer);

// part 2
function parseString (string) {
  let parsedLetter = string.charAt(0).toUpperCase(); //S-O-B, so that's how that works!
  let stringArr = string.split(''); //technically optional. A ' ' will split a string by each individual word.
  stringArr.splice(0, 1, parsedLetter);//starting at index 0, removing 1 character, adding on new uppercase version character.
  //replaces the first letter with the new uppercased letter.
  string = stringArr.join(''); // combines an array back into a string.
  if(string.charAt(string.length - 1) !== '.')     string = string + '.'; //can do string += '.';
  //also have acces to .concat.
  return string;
};
//On reflection, I was way off by converting my string into an array in order to use what I've learned on it.
// But then again, WE HAVEN'T LEARNED HOW TO HANDLE STRINGS IN JS YET!!!!
// let answer2 = parseString(prompt("Type something in.", "hello world"));
// alert(answer2);

// part 3
function reverseHalves(string) {
  let halfIndex = Math.ceil(string.length / 2);
  // Math.ceil()  or Math.floor()
  let firstHalf = string.substring(0, halfIndex);
  let secondHalf = string.substring(halfIndex, string.length);
  alert(`${secondHalf}${firstHalf}`);
};
// let answer3 = reverseHalves(prompt("Give me a string to cut in half.", "abcdef"));

//bonus function.
function isPalindrome(string) {
  let reversed = string
                    .split('') //returns and array
                    .reverse() // ONLY WORKS on arrays
                    .join('') //thing.
  return string === reversed;
};

//END OF day 5 takehome
//Start of day 6 proper (08/29/2018)
//THE DOM (Document object model, a virtual environment that us programmers met to make a website; to users it is the viewscreen.)
// API a server w/ a database behind it.
//dom nodes. IMP: nextSibling and nextSibling, parentElement,

// const user = {
//   name: "jacob",
//   age: 32,
// };

//querying the dom.
// document.getElementsByTagName("p");//has to have a string.
let pTags = document.getElementsByTagName("p"); //returns an array of dom nodes.
// console.log(pTags);

//2nd method
let specialPTag = document.getElementsByClassName("my-special-p-tag");//returns the multiple of class instances.
console.log(specialPTag[0]);
//console.log(specialPTag);
//returns an array.

//3rd & last method
let thisPTag = document.getElementById("unique"); //returns 1 DOM node
console.log(thisPTag);
// THESE ^ are the older methods.

//the 2 newer methods are:
let h1Tags = document.querySelectorAll("h1");//same as getElementsByTagName, just shorter. Actually does the job of all three.
let queryPTags = document.querySelectorAll(".my-special-p-tag");//gets by class name.
let idPTags = document.querySelectorAll("#unique"); //gets by id

//gets you the FIRST instance-> document.querySelector(".text-danger"); //works for tagging, classes, ids.

// NOTETOSELF:  when have downtime, read the docs for javascript stuff.
// Just learned tha tGoogle Chrome is an absolute RAM memory hog.
//Let's try it out! challenge.

function snafu (selector, element) { //no time for niceness, just get soemthing!
  if (selector === "getElementsByTagName"){
    let temp = document.getElementsByTagName(element);
    console.log(temp);
  } else if (selector === "getElementsByClassName") {
    let temp = document.getElementsByClassName(element);
    console.log(temp);
  } else if (selector === "getElementById") {
    let temp = document.getElementById(element);
    console.log(temp);
  } else if (selector === "querySelectorAll") {
    let temp = document.querySelectorAll(element);
    console.log(temp);
  } else if (selector === "querySelector") {
    let temp = document.querySelector(element);
    console.log(temp);
  } else {
    console.log("Something went wrong.");
    alert(prompt("Something went wrong with your input, please try again:"));
  }
};

// snafu("querySelector", "h1");

//Rykers version.
function ack (method, element) {
  //can give user a legend
  let result;
  switch(method){
    case "getElementsByTagName":
      result = document.getElementsByTagName(element);
      break;

    case "querySelector":
      result = document.querySelector(element);
      break;
    //repeat.

    default:
      result = "Sorry, that's not valid.";
  }
  console.log(result);
};
// ack("getElementsByTagName", "h1");

// LISTENING FOR EVENTS.
// also, DOM nodes == elements.

//EVENT LISTENERS
let redDiv = document.querySelector(".red-background");

// let count = 0;
redDiv.addEventListener( //takes 2 arguments
  "mouseover", //1. Valid DOM event.
  event => {  //2. a callback function (e, ev, or event)
      // console.log(event);
      // if(count < 10){
      //   count++;
      // } else {
          redDiv.style.backgroundColor = "#0000FF";//inline style//not a good way of doing it, fyi
            //would instead toggle classes on & off rather than doing this inline styling.
          //do another eventlistener.
          redDiv.addEventListener("mouseleave", event => {redDiv.style.backgroundColor="#E40007";});
      //     count = 0;
      // }
  }//func definition, not the func call.
  //can do function (e){ ...}
);
//google material


let input = document.querySelector("#my_Input");

input.addEventListener("keydown", e => {
    // console.log(e.target);
    // console.log(e.target.value); //keylogger, yikes.
    console.log(e.keyCode);
  }
);

//takehome day 6 section, my attempt.

// Write a program that converts temperatures. It should:

// Ask your user to give you a scale (Celcius or Fahrenheit) and the tempurature they want to convert.
//So if they give you 90 Fahrenheit, they would want you to convert 90 degrees Fahrenheit to whatever that is in Celcius
let getScale = prompt("Hello! I am a temperature converter. I can convert from Fahrenheit to Celcius, or the other way around! First, enter the scale you want to convert FROM. (C for Celcius-to-Fahrenheit, F for Fahrenheit-to-Celcius): ");
let getDeg = prompt(`Now what is the degree in ${getScale} you want me to convert? (enter as a valid integer, please): `)
let toHtml = document.querySelectorAll(".tempThingy");
// toHtml[0].innerHTML = `result`;


// Employ a function that accepts those two values as arguments: temperature and scale (either celcius or fahrenheit) and converts the tempurature they gave you to the opposite scale.
// At this point, assume that I have run error-checking cases on the user's input.
//Helper function 1: Celcius to Fahrenheit.
function cToF(bait) {
  let product = bait*1.8+32;
  return product;
};

//Helper function 2: Fahrenheit to Celcius
function fToC(bait) {
  let product = (bait-32)/1.8;
  return product;
};

function converter (degree, scale) {
  //scale is a string or a single char, and degree is either an int or a string itself.
  // Assume arguments are char, int. EX: 97, F or 30, C.
  let temp = parseInt(degree);
  let result;
  switch(scale){
    case 'C':
      result = cToF(temp) + " Degrees Fahrenheit.";
      break;

    case 'F':
      result = fToC(temp) + " Degrees Celcius.";
      break;

    default:
      result = "Sorry, something's not valid. Please try again.";

  }
  // console.log(result); // debugging checker
  // toHtml.innerHTML = `result`;
  toHtml[0].innerHTML = result;
};

converter(getDeg, getScale);
// Display the temperature in an h3 with minimal styling.

// TO-DO still (sections below)
// From that point on, when the user clicks on the h3, run the function to convert the temperature back and forth between Celcius and Fahrenheit.
// Display the converted temperature in the h3 each time it is changed.
