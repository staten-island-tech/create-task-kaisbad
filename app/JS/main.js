import "../CSS/style.css";
import { DOMSelectors } from "../JS/dom.js";
import { lcfb, coinFlip } from "../JS/options.js";

console.log(lcfb, coinFlip);

function playGameCard() {
  clearCards();
  DOMSelectors.playcontainer.insertAdjacentHTML(
    "beforeend",
    `<div class="card"><h2 class="header">${lfcb.name}</h2>
    <ul><li>${lfcb.beat}</li>
    <li>${lfcb.lose}</li>
    <li>${lfcb.tie}</li></ul>
    <img src="${lfcb.image}" alt="operator" class="card-img"></div>
}`
  );
}

function clearCards() {
  DOMSelectors.container.innerHTML = "";
}

/* function insertCard(characters) {
  clearCards();
  characters.forEach((character) => {});
} */

playGameCard();
