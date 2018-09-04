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
content.append(myPTag); //no difference between appendChild and append except for the fact that it is NEW, Internet Explorer doesn't support append.


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
content.appendChild(myBtn); //append always has to go at the end of the element generation.


// USING setAttribute, for adding alts and image links.
//adding an image via url
let myImg = document.createElement("img");
myImg.setAttribute("alt", "Add attribute from JS");
myImg.setAttribute("src", "https://pbs.twimg.com/profile_images/584025370036314112/0maBx-gf_400x400.jpg")
content.appendChild(myImg);
//can set any and all necessary HTML attributes using this method.

//to GET an attribute...
console.log(myImg.getAttribute("src"));



//end
