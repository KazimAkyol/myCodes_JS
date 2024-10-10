//! Selectors

const selectionArticle = document.querySelector(".selection");

//! Seçilen Elemanların Taşıyıcıları

const yourChoiseDiv = document.getElementById("your-choice");
const pcChoiseDiv = document.getElementById("pc-choice");

//! Message

const messagePar = document.querySelector(".message");

//! Score card

const scoreCardSection = document.querySelector(".score-card");
const pcScoreSpan = document.getElementById("pc-score");
const yourScoreSpan = document.getElementById("your-score");
const domTopScore = document.getElementById("top-score");

//! Modal

const modalCardSection = document.querySelector(".modal-card");
const finalMEssagePar = document.getElementById("final-message");
const playAgainButton = document.getElementById("play-again");

//! Variables

let userSelectImg = document.createElement("img");
let pcSelecetImg = document.createElement("img");
let pcArr;
let pcRandom;

//! Colors

const YELLOW = "#ffc538";
const RED = "#fb778b";
const GREEN = "#5ab7ac";

//! Event Listeners

selectionArticle.addEventListener("click", (e) => {
  // console.log(e.target.id);

  if (e.target.id) {
    userSelectImg.src = `./assets/${e.target.id}.png`;
    userSelectImg.alt = e.target.id;
    yourChoiseDiv.appendChild(userSelectImg);
    createPcSelection();
  }
});

playAgainButton.addEventListener("click", () => {
  console.log("Play again butonuna tiklandi");
  // modalCardSection.classList.toggle("show");
  // modalCardSection.classList.toggle("remove");
  modalCardSection.style.display = "none";
  window.location.reload();
});

//! Functions

const createPcSelection = () => {
  pcArr = ["rock", "paper", "scissor"];
  pcRandom = pcArr[Math.floor(Math.random() * 3)];
  // console.log("test", Math.floor(Math.random() * 3));
  pcSelecetImg.src = `./assets/${pcRandom}.png`;
  pcSelecetImg.alt = pcRandom;
  pcChoiseDiv.appendChild(pcSelecetImg);
  calculateResult();
};

const calculateResult = () => {
  console.log("user", userSelectImg.alt);
  console.log("pc", pcSelecetImg.alt);

  //Esitlik Durumu
  if (userSelectImg.alt == pcRandom) {
    draw();
  } else {
    if (userSelectImg.alt === "rock") {
      pcRandom === "paper" ? youLost() : youWin();
    } else if (userSelectImg.alt === "scissor") {
      pcRandom === "rock" ? youLost() : youWin();
    } else if (userSelectImg.alt === "paper") {
      pcRandom === "scissor" ? youLost() : youWin();
    }
  }
  if (pcScoreSpan.textContent === "10" || yourScoreSpan.textContent === "10") {
    openModal();
  }
};

const draw = () => {
  messagePar.textContent = "It's a draw";
  scoreCardSection.style.color = YELLOW;
  messagePar.style.backgroundColor = YELLOW;
};

const youLost = () => {
  messagePar.textContent = "You Lost";
  scoreCardSection.style.color = RED;
  messagePar.style.backgroundColor = RED;
  pcScoreSpan.textContent++;
};

const youWin = () => {
  messagePar.textContent = "You Win";
  scoreCardSection.style.color = GREEN;
  messagePar.style.backgroundColor = GREEN;
  yourScoreSpan.textContent++;
  topScoreCheck();
};

const openModal = () => {
  console.log("Modal Acildi");
  modalCardSection.classList.add("show");
  if (yourScoreSpan.textContent === "10") {
    finalMEssagePar.textContent = "💃 You Win";
    document, (querySelector(".modal").style.backgroundColor = GREEN);
  } else {
    finalMEssagePar.textContent = "😩 You Lost";
    document.querySelector(".modal").style.backgroundColor = RED;
    playAgainButton.style.color = RED;
  }
};


