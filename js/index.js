let arr = ["paper", "scissors", "rock"]
function computerPlay() {
  return arr[Math.floor(Math.random() * 3)]
}

function playRound(playerChoice, computerChoice) {
  if (computerChoice === "paper") {
    console.log('win')
  } else if (computerChoice === "scissors") {
    console.log('lose')
  } else {
    console.log('play again')
  }
}

const playerChoice = "rock";
const computerChoice = computerPlay();

console.log(playRound(playerChoice, computerChoice))
