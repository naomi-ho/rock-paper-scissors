const decisions = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let roundResult;

// Function that will randomly return either 'rock', 'paper' or 'scissors' for the computer's play
function getComputerChoice() {
    let computerChoicePosition = Math.floor(Math.random() * decisions.length);
    let computerChoice = decisions[computerChoicePosition];
    return computerChoice;
}

// Function that plays a single round of the game
function playRound(playerSelection, computerSelection) {
    convertedPlayerSelection = playerSelection.toLowerCase();
    if (convertedPlayerSelection === computerSelection) {
        playerScore++;
        computerScore++;
        roundResult = "It's a tie";
    } else if (convertedPlayerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        roundResult = "You Win! Rock beats Scissors";
    } else if (convertedPlayerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        roundResult = "You Lose, Paper beats Rock";
    } else if (convertedPlayerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        roundResult = "You Win! Paper beats Rock";
    } else if (convertedPlayerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        roundResult = "You Lose! Scissors beats Paper";
    } else if (convertedPlayerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        roundResult = "You Win! Scissors beats Paper";
    } else if (convertedPlayerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        roundResult = "You Lose! Rock beats Scissors";
    } else {
        roundResult = "Wrong input, please enter Rock, Paper, or Scissors";
    }
    console.log(roundResult, playerScore, computerScore);
    return (roundResult, playerScore, computerScore);
}

let playerSelection = prompt("Enter Rock, Paper, or Scissors", "");
let computerSelection = getComputerChoice();
console.log(playerSelection, computerSelection);
playRound(playerSelection, computerSelection);