import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Random integer generator
function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};

window.onload = function() {
  //write your code here
  let possList = ['My', 'Their', 'Yalls'];
  let adjList = ['Fun', 'Cool', 'Blue'];
  let nounList = ['Pizza', 'Book', 'Jedi'];
  let extList = ['com', 'us', 'va', 'io']

  possWord = getRandomIntInclusive(1, possessiveList.length);
  adjWord = getRandomIntInclusive(1, adjList.length);
  nounWord = getRandomIntInclusive(1, nounList.length);
  extRandom = getRandomIntInclusive(1, extList.length);

  let nameGenerator = (a, b) => a * b;

  console.log("code ran");
};
