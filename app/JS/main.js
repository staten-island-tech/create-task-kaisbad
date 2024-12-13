import "../CSS/style.css";
import { DOMSelectors } from "../JS/dom.js";

function playGameCard() {
  clearCards();
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card" 
      </div>
}`}

function clearCards() {
  DOMSelectors.container.innerHTML = "";
}

function insertCard(characters) {
  clearCards();
  characters.forEach((character) => {
 