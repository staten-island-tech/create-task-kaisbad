import "../CSS/style.css";
import { DOMSelectors } from "../JS/dom.js";
import { lcfb, coinFlip } from "../JS/options.js";

console.log(lcfb, coinFlip);

function playGameCard() {
  clearCards();
  lcfb.forEach((option) =>
    DOMSelectors.rpscontainer.insertAdjacentHTML(
      "beforeend",
      `<div class="playcard"><h1 class="header">${option.name}</h1>
  <ul><li>${option.beat}</li>
  <li>${option.lose}</li>
  <li>${option.tie}</li></ul>
  <img src="${option.image}" alt="img" class="card-img">
  <button class="cardbtn" data-id=${option.id}>Choose</button></div>
  
`
    )
  );
}

function headTailsGameCard() {
  clearCards();
  coinFlip.forEach((option) =>
    DOMSelectors.cfcontainer.insertAdjacentHTML(
      "beforeend",
      `<div class="playcard"><h1 class="header">${option.name}</h1>
  <img src="${option.image}" alt="img" class="card-img">
  <button class="cardbtn" data-id=${option.id}>Choose</button></div>
  
`
    )
  );
}

function clearCards() {
  DOMSelectors.container.innerHTML = "";
}

DOMSelectors.rpsbtn.addEventListener("click", function (event) {
  playGameCard();
});

DOMSelectors.cfbtn.addEventListener("click", function (event) {
  headTailsGameCard();
});

DOMSelectors.cfcontainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("cardbtn")) {
    let identifier = event.target.getAttribute("data-id");
    console.log(identifier);
  }
});

DOMSelectors.rpscontainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("cardbtn")) {
    let identifier = event.target.getAttribute("data-id");
    console.log(identifier);
  }
});

function rpsGame() {
  for (let round = 1; round <= 3; round++) {
    let random = Math.floor(Math.random() * 4);
    let CPUChoice;
    //let outcome;
    if (random === 0) {
      CPUChoice = "Bone";
    } else if (random === 1) {
      CPUChoice = "Lion";
    } else if (random === 2) {
      CPUChoice = "Chicken";
    } else {
      CPUChoice = "Fly";
    }
  }
  console.log(CPUChoice);
}

rpsGame();
//make font variables
//make themes
//separate home buttons
