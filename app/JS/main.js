import "../CSS/style.css";
import { DOMSelectors } from "../JS/dom.js";

const rockPaperScissors = ["Rock", "Paper", "Scissors"];
const coinFlip = ["Heads", "Tails"];

function playGameCard() {
  clearCards();
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card" 
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
