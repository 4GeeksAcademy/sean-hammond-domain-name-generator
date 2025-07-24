import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/pexelsFreeScrabble.png";
import "./assets/img/4geeks.ico";

//declaring the arrays
let possList = ['My', 'Their', 'Yalls']; // possessives
let adjList = ['Fun', 'Cool', 'Blue'];
let nounList = ['Pizza', 'Book', 'Jedi'];
let extList = ['com', 'us', 'me', 'va', 'cat']

// getting max array length to avoid hard-code
let arrayLimit = Math.min(possList, adjList, nounList);

// Random integer generator
function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};


let text = "";

// Looping through an array
let iLoop = () => {
  for (let i = 0; i < arrayLimit; i++) {
    text = text + possList[i] + adjList(j);
    document.getElementById(".listHere").innerHTML = text;
  }
};

let jLoop = () => {
  iLoop();
}

let kLoop = () => {
  jLoop();
} 

window.onload = function() {
  //write your code here
  possWord = getRandomIntInclusive(1, possessiveList.length);
  adjWord = getRandomIntInclusive(1, adjList.length);
  nounWord = getRandomIntInclusive(1, nounList.length);
  extRandom = getRandomIntInclusive(1, extList.length);

  let nameGenerator = (a, b) => a * b;

  console.log("code ran");
};
