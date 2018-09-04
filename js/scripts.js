// console.log("Hello World!");
// Jacob Rachal 9/3/2018
//JavaScript is Object-Oriented-Programming.
// console.log("Hello World!");
//access the console, go down a level, this is the action we want to do (or go down another level), passing our argument within parenthesees, passing along a string that says Hello World!.

// DAY 7 - DOM part 2
//textContent
// Get the text content of the para tag.
// let text = document.getElementById("para").textContent;
// console.log(text);
//the textcontent tells JS to parse thru the element and just get the text.
//reads only as text.
// document.getElementById("para").textContent = "This is some more text, entered via JavaScript."; //Replaces what you have within the HTML page.
// can manipulate and change text with textContent. !!!


//using innerHTML (like I did for my takehome of day 6)
// Get everything from the para tag.
// let text = document.getElementById("para").innerHTML;// gets EVERYTHING, text and tags.
//use to webscrape.  reads it as html.
// console.log(text);
//BE CAREFUL with this, as people can enter script and cause the page to execute code. SEE: script injection, Myspace.


//Creating Elements (from thin air!)

let content = document.getElementById("content");

// Creating  a paragraph tag.
let myPTag = document.createElement("p"); //create a paragraph tag.//can rename as newP to save on time.
// document.createElement("h1, li, etc.")
myPTag.textContent = "This is a paragraph tag and paragraph text added from the JavaScript!";
// At this point, we've created the element, it EXISTS, it just hasn't been added to the DOM yet
// content.appendChild(myPTag);
// content.append(myPTag); //no difference between appendChild and append except for the fact that it is NEW, Internet Explorer doesn't support append.


// Creating a button and adding a class. (using Bootstrap buttons and classes)
let myBtn = document.createElement("button");
myBtn.textContent = "Click me!";
// content.appendChild(myBtn); //successfully added a button, now to add a class.
myBtn.className = "btn btn-primary"; //can put multiple classes at once.
// DO NOT HAVE multiple lines of this since it overwrites what was previously there. Use ONLY for concrete classes that will not be changed by JS.

//adding an id.
myBtn.id = "someID";//can procedurally generate these later on down the line.
// content.appendChild(myBtn);

// Say we want to see what class an element has.
// console.log(document.getElementById("someID").classList);
//couts: DOMTokenList(2) ["btn", "btn-primary", value: "btn btn-primary"]

// manipulating with classList.
// myBtn.classList.remove("btn-primary");
//can also do classList.add("btn"); //allows us to add and remove classes at the drop of a hat.
// content.appendChild(myBtn); //append always has to go at the end of the element generation.


// USING setAttribute, for adding alts and image links.
//adding an image via url
let myImg = document.createElement("img");
myImg.setAttribute("alt", "Add attribute from JS");
myImg.setAttribute("src", "https://pbs.twimg.com/profile_images/584025370036314112/0maBx-gf_400x400.jpg")
// content.appendChild(myImg);
//can set any and all necessary HTML attributes using this method.

//to GET an attribute...
// console.log(myImg.getAttribute("src"));

// WIll now be generating an entire page using nothing but JavaScript
const script = document.querySelector("script");
const body = document.querySelector("body");

//helper variables
let newP = document.createElement("p");
let newH1 = document.createElement("h1");
let newFooter = document.createElement("footer");
let newA = document.createElement("a");
let newHeader = document.createElement("header");
let newUl = document.createElement("ul");
// let newLi = document.createElement("li"); //see below function.
let newDiv = document.createElement("div");

// creating a function to generate a list.
function createLi(classArray, linkText) { //the array of classes to add to this li, and the text to be displayed.
  let newLink = document.createElement("li"); //generating new li
  let newA = document.createElement("a"); //resetting this every time the func runs.
  newA.setAttribute("href", "#");
  newA.textContent = linkText;
  newLink.appendChild(newA);//appending the anchor tag to this li.
  for (let i = 0; i < classArray.length; i++) {
    newLink.classList.add(classArray[i]);
  }; //"for" TAB
  newUl.appendChild(newLink);
};
//time to call the function.
createLi(["pull-left"], "Home");
createLi(["pull-right"], "Contact");
createLi(["pull-right"], "About"); //...this is our nav-bar!
//nothing will display, since this hasn't been appended to the body yet.

newUl.classList.add("nav", "nav-pills");
newHeader.appendChild(newUl);
body.insertBefore(newHeader, script); //what to append, and the location where you want to append above.
// HOLY SMOKES, IT WORKED

//adding more things.
function createTextElement(elementType, text) {
  let newElement = document.createElement(elementType);
  newElement.textContent = text;
  return newElement;
  // console.log("createTextElement", this);
};

newDiv.classList.add("text-center");

let h1 = createTextElement("h1", "Hello World!");
let p = createTextElement("p", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.");
newDiv.appendChild(h1);
newDiv.appendChild(p);
body.insertBefore(newDiv, script); //....neato! There's our headline!

//adding a footer now.
// IMP note TO self: for help on takehomes, look at next day's itinerary.

let newFooterLink = document.createElement("a");
newFooterLink.textContent = "Check me out.";
newFooterLink.setAttribute("href", "https://www.google.com/");
newFooterLink.setAttribute("target", "_blank");
newFooterLink.classList.add("text-center", "footer");//originally had newFooter.classList.add("text-center");// auto centered the text.
newFooter.appendChild(newFooterLink);
body.insertBefore(newFooter, script);
//very very very basic example of how you can generate a webpage using (almost) only JavaScript. Useful for todo checklist app finale.
//lookup "Javascript 30" for daily javascript exercises.

//keyword "this" {who's on first skit}
//this pertains to the scope, a self-referencer. See https://www.w3schools.com/js/js_this.asp
//EXAMPLE.
function myFunc() {
  let me = {
    firstName: "Jacob",
    lastName: "Rachal",
    id: 1234,
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
    // console.log("ACk!");
    //console.log(this.fullName);
  }
  console.log(me.fullName());//GOT IT *thud*
  // return me;
  // console.log("myFunc", this);
}
// console.log(this.myFunc);

// console.log(this);//posts everything going on within this file.
// console.log("Global", this);

myFunc();

//doing the FizzBuzz test. This is something that you will get asked to do at interviews. Some things may be different, but the heart will be the same.

function fizzBuzz() {
  let list = document.createElement("ol"); //ordered list, compare #'s
  for (let i = 1; i <= 100; i++) {
    let res = document.createElement("li"); //place here to eliminate below redundancy.
    if(i % 15 ==0){
      console.log("FizzBuzz"); //order matters, this has to be the first one otherwise this will never be printed.
      // let res = document.createElement("li"); //adding this to complere the challenge
      res.textContent = "FizzBuzz";
      list.appendChild(res);//adding this to complete the challenge.
    } else if (i % 3  == 0) {
      console.log("Fizz");
      // let res = document.createElement("li");
      res.textContent = "Fizz";
      list.appendChild(res);
    } else if(i % 5 ==0) {
      console.log("Buzz");
      // let res = document.createElement("li");
      res.textContent = "Buzz";
      list.appendChild(res);
    } else {
      console.log(i);
      // let res = document.createElement("li");
      res.textContent = i;
      list.appendChild(res);
    }
    // list.appendChild(res); ??
  }
  body.insertBefore(list, script);
};

fizzBuzz();



//end
