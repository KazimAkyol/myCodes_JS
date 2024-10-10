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
  }
});
