// Function that will randomly return either 'rock', 'paper' or 'scissors' for the computer's play
function getComputerChoice() {
    const decisions = ["rock", "paper", "scissors"];
    let computerChoicePosition = Math.floor(Math.random() * decisions.length);
    let computerChoice = decisions[computerChoicePosition];
    return computerChoice;
}

// Function that plays a single round of the game
function playRound(playerSelection, computerSelection) {
    typeof(playerSelection);
    convertedPlayerSelection = playerSelection.toLowerCase();
    if (convertedPlayerSelection === computerSelection) {
        console.log("It's a tie");
    } else if (convertedPlayerSelection === "rock" && computerSelection === "scissors") {
        console.log("You Win! Rock beats Scissors");
    } else if (convertedPlayerSelection === "rock" && computerSelection === "paper") {
        console.log("You Lose, Paper beats Rock");
    } else if (convertedPlayerSelection === "paper" && computerSelection === "rock") {
        console.log("You Win! Paper beats Rock");
    } else if (convertedPlayerSelection === "paper" && computerSelection === "scissors") {
        console.log("You Lose! Scissors beats Paper");
    } else if (convertedPlayerSelection === "scissors" && computerSelection === "paper") {
        console.log("You Win! Scissors beats Paper");
    } else if (convertedPlayerSelection === "scissors" && computerSelection === "rock") {
        console.log("You Lose! Rock beats Scissors");
    } else {
        console.log("Wrong input, please enter Rock, Paper, or Scissors");
    }
}

let playerSelection = prompt("Enter Rock, Paper, or Scissors", "");
let computerSelection = getComputerChoice();
console.log(playerSelection, computerSelection);
playRound(playerSelection, computerSelection);