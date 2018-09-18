// console.log("Hello World!");
// Jacob Rachal 9/17/2018
//JavaScript is Object-Oriented-Programming.
// console.log("Hello World!");
//access the console, go down a level, this is the action we want to do (or go down another level), passing our argument within parenthesees, passing along a string that says Hello World!.

// IMP:: meet @ the HIVE for Wed., and game night this friday.
// Tours for Sanger kids next week.
// no-instructor project= a dictionary for memes. (Because good grief do I need one.) Try to use an API.


// DAY 11 FETCH / Objedcts (Advanced) / JS Classes
//note, do not clone the repo specified by the syllabus for today.
//API  --  application programming interface
// will need this in a moment::  https://api.github.com/users/YOUR_USERNAME/repos
// https://api.github.com/users/jacob-rachal/repos

function getRepos() {
  // wait to perform this action after you get a response back
  return fetch('https://api.github.com/users/jacob-rachal/repos').then(data => {
    return data.json(); //parse the data as json.
  }).then(repos =>{ //then is s 'promise', telling JS that there will be a response.
    // console.log(repos); //displays all the repos I have in the console within an array.
    //And we can therepore perform actions on this array.
    let repoList = document.getElementById("myRepos");
    //forEach loop. Works like a for loop. Usefull for looping on arrays as the incrementer.
    // Rule of thumb: use the singular form of the thing being looped on as the temp pointer for pointing to each individual array thing.

    console.log(repos[0]); //looking to make sure what this object looks like before we render it to the page.

    repos.forEach(repo => {
      //now not printing out / skipping over a particular repo that's not completed that we don't want to show.
      // if (repo.name === "B2-Classwork") {return; }
      let temp = document.createElement("li");
      let paragraph = document.createElement("p"); //added after break
      let link = document.createElement("a");  //added after break
      temp.setAttribute("class", "list-group-item");
      paragraph.textContent = repo.name;
      link.textContent = "View";
      link.setAttribute("href", repo.html_url);
      link.setAttribute("target", "_blank");//opens up in new tab.
      temp.appendChild(paragraph); //we now have all the repo titles I've made displayed.
      temp.appendChild(link);
      repoList.appendChild(temp);
    });
  });
}

getRepos();

//CLASSES - simmilar to other object-oriented programming classes.
// which can be exported / imported from other JS files, somehow.

// super basic class.
class User {
  constructor(name) {//the INITIALIZER of the class. Adds things to the class's scope.
    this.name = name;
    //have all the variables of the class defined here.
  }
  //creating a function within a class.
  say_hello() {
    alert(this.name);
  }
}
let user = new User("Jacob");
user.say_hello();


//JAVASCRIPT FRAMEWORKS:: angular, react.js, vue.js, ember.js, meteor.js (don't use, it's dying), angularJS (legacy version of angular.), backbone.js
//first three are the big ones.
//npm.js

//codecademy, good examples. Codewars, have to pass a test to sign up, given busted code in order to fix.
//Udemy.
//freecodecamp.


// Good uses of javascript::

// Bad uses of JavaScript::
// END DAY 11
