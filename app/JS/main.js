import "../CSS/style.css";
import { DOMSelectors } from "../JS/dom.js";
import { lcfb, coinFlip } from "../JS/options.js";

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
      <button class="cardbtn" data-id=${option.id}>Choose</button></div>`
    )
  );
}

function clearCards() {
  DOMSelectors.container.innerHTML = "";
}

function clearGameCards() {
  DOMSelectors.rpscontainer.innerHTML = "";
  DOMSelectors.cfcontainer.innerHTML = "";
}

function rpsGame(playerChoice) {
  let random = Math.floor(Math.random() * 4);
  let CPUChoice;
  let outcome;
  let playerNameChoice;

  for (let i = 1; i <= 1; i++) {
    if (random === 0) {
      CPUChoice = "Bone";
    } else if (random === 1) {
      CPUChoice = "Lion";
    } else if (random === 2) {
      CPUChoice = "Chicken";
    } else {
      CPUChoice = "Fly";
    }
    //0 = Lion
    //1 = Chicken
    //2 = Fly
    //3 = Bone
    if (CPUChoice == "Bone") {
      if (playerChoice == 0) {
        outcome = "lose";
      } else if (playerChoice == 2) {
        outcome = "win";
      } else {
        outcome = "tie";
      }
    } else if (CPUChoice == "Lion") {
      if (playerChoice == 1) {
        outcome = "lose";
      } else if (playerChoice == 3) {
        outcome = "win";
      } else {
        outcome = "tie";
      }
    } else if (CPUChoice == "Chicken") {
      if (playerChoice == 2) {
        outcome = "lose";
      } else if (playerChoice == 0) {
        outcome = "win";
      } else {
        outcome = "tie";
      }
    } else {
      //fly
      if (playerChoice == 3) {
        outcome = "lose";
      } else if (playerChoice == 1) {
        outcome = "win";
      } else {
        outcome = "tie";
      }
    }
    if (playerChoice == 0) {
      playerNameChoice = "Lion";
    } else if (playerChoice == 1) {
      playerNameChoice = "Chicken";
    } else if (playerChoice == 2) {
      playerNameChoice = "Fly";
    } else {
      playerNameChoice = "Bone";
    }
  }
  clearGameCards();
  DOMSelectors.rpscontainer.insertAdjacentHTML(
    "beforeend",
    `<div class="outcomecard"><h1 class="header">You ${outcome}!</h1>
      <ul><li>AI Choice: ${CPUChoice}</li>
      <li>Your Choice: ${playerNameChoice}</li></ul>
      <h2>Refresh to Play Again</h2><div>`
  );
}

function cfGame(playerChoice) {
  let flip = Math.floor(Math.random() * 2);
  let CPUChoice;
  let outcome;
  let playerNameChoice;

  for (let i = 1; i <= 1; i++) {
    if (flip === 0) {
      flip = "Heads";
    } else {
      flip = "Tails";
    }

    if (playerChoice == 0) {
      playerNameChoice = "Heads";
    } else {
      playerNameChoice = "Tails";
    }

    if (playerNameChoice == "Heads") {
      CPUChoice = "Tails";
    } else {
      CPUChoice = "Heads";
    }

    if (playerNameChoice == flip) {
      outcome = "win";
    } else {
      outcome = "lose";
    }
  }
  clearGameCards();
  DOMSelectors.cfcontainer.insertAdjacentHTML(
    "beforeend",
    `<div class="outcomecard"><h1 class="header">You ${outcome}!</h1>
    <ul><li>Flip Outcome: ${flip}</li>
    <li>AI Choice: ${CPUChoice}</li>
    <li>Your Choice: ${playerNameChoice}</li></ul>
    <h2>Refresh to Play Again</h2><div>`
  );
}

DOMSelectors.rpsbtn.addEventListener("click", function () {
  playGameCard();
});

DOMSelectors.cfbtn.addEventListener("click", function () {
  headTailsGameCard();
});

//DOMSelectors.returnbtn.addEventListener("click", function () {});

DOMSelectors.cfcontainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("cardbtn")) {
    let playerChoice = event.target.getAttribute("data-id");
    cfGame(playerChoice);
  }
});

DOMSelectors.rpscontainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("cardbtn")) {
    let playerChoice = event.target.getAttribute("data-id");
    rpsGame(playerChoice);
  }
});
