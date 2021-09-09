const dirt = document.querySelectorAll(".dirt");
const racoon = document.querySelectorAll(".racoon");
const scoreBoard = document.querySelector(".score-board");
const pop = document.querySelector('#pop')

let dirtBefore;
let end;
let score;

function randomDirt(dirt) {
  const d = Math.floor(Math.random() * dirt.length);
  const dRandom = dirt[d];
  if (dRandom == dirtBefore) {
    randomDirt(dirt);
  }
  dirtBefore = dRandom;
  return dRandom;
}

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function munculkanRacoon() {
  const dRandom = randomDirt(dirt);
  const tRandom = randomTime(300, 1000);
  dRandom.classList.add("muncul");

  setTimeout(() => {
    dRandom.classList.remove("muncul");
    if (!end) {
      munculkanRacoon();
    }
  }, tRandom);
}

function play() {
  end = false;
  score = 0;
  scoreBoard.textContent = 0;
  munculkanRacoon();
  setTimeout(() => {
    end = true;
  }, 10000);
}

function whack() {
  score++;
  this.parentNode.classList.remove('muncul');
  pop.play();
  scoreBoard.textContent = score;
}

racoon.forEach(r => {
  r.addEventListener("click", whack);
});
