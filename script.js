function computerRandomChoice() {
  const choice = ["paper", "scissors", "rock"];
  const choiceComputer = Math.floor(Math.random * choice.length);
  return [choiceComputer];
}

function mainGame() {
  let playerChoice = prompt("Choose rock, paper or scissors").toLowerCase();
  let computerChoice = computerRandomChoice();

  let result = resultComparison(playerChoice, computerChoice);

  console.log("Your choice", playerChoice);
  console.log("Computer choice", computerChoice);
  console.log("Result", result);
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
