import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/pexelsFreeScrabble.png";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here

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

  // nested for loops
  for (let i = 0; i < possList.length; i++) {
    let iText = possList(i);
    let jText = adjList(1);
    let kText = nounList(1);
    let extText = extList(getRandomIntInclusive(0, extList.length - 1));
    document.getElementById(".listHere").innerHTML =
      iText + jText + kText + "." + extText;
  }

  // let nameGenerator = (a, b) => a * b;

  console.log("code ran");
};
