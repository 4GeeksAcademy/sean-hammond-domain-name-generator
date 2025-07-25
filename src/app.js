import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/pexelsFreeScrabble.png";
import "./assets/img/4geeks.ico";

//declaring the arrays
let possList = ["My", "Their", "Yalls"]; // possessives
let adjList = ["Fun", "Cool", "Blue"];
let nounList = ["Pizza", "Book", "Jedi"];
let extList = ["com", "us", "me", "va", "cat"];

// Random integer generator
function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

let text = "";


// Declaring inner for loops

let possLoop = () => {
  for (let i = 0; i < possList.length; i++) {
    adjLoop(i);
  }
};

let adjLoop = () => {
  for (let j = 0; j < adjList.length; j++) {
    return possLoop(j);
  }
};

// the outer loop
let nounLoop = () => {
  for (let k = 0; k < adjList.length; k++) {
    jText = iText + possList[i] + adjList(i);
    return iText;
  }
};

// document.getElementById(".listHere").innerHTML = text;

window.onload = function () {
  //write your code here
  possWord = getRandomIntInclusive(1, possessiveList.length);
  adjWord = getRandomIntInclusive(1, adjList.length);
  nounWord = getRandomIntInclusive(1, nounList.length);
  extRandom = getRandomIntInclusive(1, extList.length);

  let nameGenerator = (a, b) => a * b;

  console.log("code ran");
};
