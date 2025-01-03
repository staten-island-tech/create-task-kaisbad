import "../CSS/style.css";
import { DOMSelectors } from "../JS/dom.js";
import { lcfb, coinFlip } from "../JS/options.js";

console.log(lcfb, coinFlip);

function playGameCard() {
  clearCards();
  lcfb.forEach((option) =>
    DOMSelectors.playcontainer.insertAdjacentHTML(
      "beforeend",
      `<div class="playcard"><h1 class="header">${option.name}</h1>
  <ul><li>${option.beat}</li>
  <li>${option.lose}</li>
  <li>${option.tie}</li></ul>
  <img src="${option.image}" alt="operator" class="card-img">
  <button class=cardbtn>Choose</button></div>
  
`
    )
  );
}

function clearCards() {
  DOMSelectors.container.innerHTML = "";
}

/* function insertCard(characters) {
  clearCards();
  characters.forEach((character) => {});
} */

DOMSelectors.container.addEventListener("click", function (event) {
  playGameCard();
});

//make font variables
//make themes
//separate home buttons
