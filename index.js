let you;
let yourScore = 0;
let computerScore = 0;
let computer;
let button = document.querySelector("button");
let result = document.getElementById("result");
const tied = new Audio("/soundsEffect/tied.mp3");
const winner = new Audio("/soundsEffect/K2TG46Z-winner-trumpet.mp3");
const loser = new Audio("/soundsEffect/89QFHTG-game-over-loser-05.mp3");

let choices = ["rock", "paper", "scissor"];

const buttons = document.querySelectorAll("img");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    you = button.id;
    computer = computerChoice();
    document.getElementById("your-choice").src = "/img/" + you + ".png";
    document.getElementById("computer-choice").src =
      "/img/" + computer + ".png";
    decideWinner(you, computer);
  });
});

function computerChoice() {
  return choices[Math.floor(Math.random() * 3)]; //random no. between 0-2
}

function decideWinner(you, computer) {
  // check for winner
  if (
    (you === "rock" && computer === "scissor") ||
    (you === "scissor" && computer === "paper") ||
    (you === "paper" && computer === "rock")
  ) {
    yourScore += 1;
    result.innerText = "🥳WINEEEEERRRR🥳";
    result.style.backgroundColor = "green";

    winner.play();
  } else if (you === computer) {
    yourScore += 1;
    computerScore += 1;
    result.innerText = "😃TIEEEEED😃";
    result.style.backgroundColor = "white";
    tied.play();
  } else {
    computerScore += 1;
    result.innerText = "🤡LOOOSERRRRRRR🤡";
    result.style.backgroundColor = "red";
    loser.play();
  }
  document.getElementById("your-score").innerText = yourScore;
  document.getElementById("computer-score").innerText = computerScore;
}
button.addEventListener("click", () => {
  yourScore = 0;
  computerScore = 0;
  document.getElementById("your-score").innerText = yourScore;
  document.getElementById("computer-score").innerText = computerScore;
  result.innerText = "";
  document.getElementById("your-choice").src = "";
  document.getElementById("computer-choice").src = "";
});
