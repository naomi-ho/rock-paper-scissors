// define global variables
const decisions = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let roundResult;
const maxRoundNumber = 5;
let gameResult;

// function that will randomly return either 'rock', 'paper' or 'scissors' for the computer's play
function getComputerChoice() {
    let computerChoicePosition = Math.floor(Math.random() * decisions.length);
    let computerChoice = decisions[computerChoicePosition];
    return computerChoice;
}

// function that plays a best-of-five game that keeps score and reports a winner or loser at the end
function game() {
    // function that plays a single round of the game
    function playRound(playerSelection, computerSelection) {
        convertedPlayerSelection = playerSelection.toLowerCase();
        if (convertedPlayerSelection === computerSelection) {
            playerScore++;
            computerScore++;
            roundResult = "It's a tie";
        } else if (convertedPlayerSelection === "rock" && computerSelection === "scissors") {
            playerScore++;
            roundResult = "You win! Rock beats Scissors";
        } else if (convertedPlayerSelection === "rock" && computerSelection === "paper") {
            computerScore++;
            roundResult = "You lose, Paper beats Rock";
        } else if (convertedPlayerSelection === "paper" && computerSelection === "rock") {
            playerScore++;
            roundResult = "You win! Paper beats Rock";
        } else if (convertedPlayerSelection === "paper" && computerSelection === "scissors") {
            computerScore++;
            roundResult = "You lose! Scissors beats Paper";
        } else if (convertedPlayerSelection === "scissors" && computerSelection === "paper") {
            playerScore++;
            roundResult = "You win! Scissors beats Paper";
        } else if (convertedPlayerSelection === "scissors" && computerSelection === "rock") {
            computerScore++;
            roundResult = "You lose! Rock beats Scissors";
        } else {
            roundResult = "Wrong input, please enter Rock, Paper, or Scissors";
        }
        console.log(roundResult, playerScore, computerScore);
        return (roundResult, playerScore, computerScore);
    }

    // loop runs through 5 rounds
    for (let round = 0; round < maxRoundNumber; round++) {
        let playerSelection = prompt("Enter Rock, Paper, or Scissors", "");
        let computerSelection = getComputerChoice();
        console.log(playerSelection, computerSelection);
        playRound(playerSelection, computerSelection);
    }

    // calculate and reports the game's winner
    if (playerScore === computerScore) {
        gameResult = `It's a tie (Player: ${playerScore}, Computer: ${computerScore})`;
    } else if (playerScore > computerScore) {
        gameResult = `You win (Player: ${playerScore}, Computer: ${computerScore})`;
    } else {
        gameResult = `You lose (Player: ${playerScore}, Computer: ${computerScore})`;
    }
    console.log(gameResult);
    return gameResult;
}

game();