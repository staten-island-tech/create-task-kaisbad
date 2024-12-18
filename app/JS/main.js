import "../CSS/style.css";
import { DOMSelectors } from "../JS/dom.js";
import { lcfb, coinFlip } from "../JS/options.js";

console.log(lcfb, coinFlip);

function playGameCard() {
  clearCards();
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="container" 
      </div>
}`
  );
}

function clearCards() {
  DOMSelectors.container.innerHTML = "";
}

function insertCard(characters) {
  clearCards();
  characters.forEach((character) => {});
}
