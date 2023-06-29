function computerRandomChoice() {
  const choice = ["paper", "scissors", "rock"];
  const random = Math.floor(Math.random() * choice.length);
  const computerChoose = choice[random];
  return computerChoose;
}

function resultComparison(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "draw";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win";
  } else {
    return "You loose";
  }
}

function mainGame() {
  let playerChoice = prompt("Choose rock, paper or scissors").toLowerCase();
  let computerChoice = computerRandomChoice();

  let result = resultComparison(playerChoice, computerChoice);

  console.log("Your choice", playerChoice);
  console.log("Computer choice", computerChoice);
  console.log("Result", result);
}
