// define global variables
const decisions = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
const maxScore = 5;

const gameResult = document.createElement("p");
const playButton = document.createElement("button");

// randomly returns either 'rock', 'paper' or 'scissors' for the computer's hand
function getComputerChoice() {
    let computerChoicePosition = Math.floor(Math.random() * decisions.length);
    let computerChoice = decisions[computerChoicePosition];
    return computerChoice;
}

// plays a single round of the game
function playRound(playerSelection, computerSelection) {
    const lineTwo = document.getElementById("line-2");
    const playerLine = document.getElementById("player-score");
    const computerLine = document.getElementById("computer-score");

    if (playerSelection === computerSelection) {
        playerScore++;
        computerScore++;
        lineTwo.textContent = "It's a tie";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        lineTwo.textContent = "You win! Rock beats Scissors";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        lineTwo.textContent = "You lose, Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        lineTwo.textContent = "You win! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        lineTwo.textContent = "You lose! Scissors beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        lineTwo.textContent = "You win! Scissors beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        lineTwo.textContent = "You lose! Rock beats Scissors";
    }

    // updates the player and computer scores
    playerLine.textContent = `Player: ${playerScore}`;
    computerLine.textContent = `Computer: ${computerScore}`;
    return (playerScore, computerScore);
}

// ends the game once someone reaches 5 points
function endGame (playerScore, computerScore) {
    // declare the winner
    if (playerScore >= maxScore || computerScore >= maxScore) {
        if (playerScore > computerScore) {
            gameResult.textContent = "You Win";
        } else {
            gameResult.textContent = "You Lose";
        }

        playButton.textContent = "Play Again";
        document.body.appendChild(gameResult);
        document.body.appendChild(playButton);

        // disables buttons
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
    }
    // displays a replay button that will reload the window
    playButton.addEventListener("click", () => {
        location.reload();
    });
}

function game() {
    // runs game with player playing rock
    const playerSelectRock = document.querySelector("#rock");
    playerSelectRock.addEventListener('click', () => {
        playRound("rock", getComputerChoice());
        endGame(playerScore, computerScore);
    });

    // runs game with player playing scissors
    const playerSelectScissors = document.querySelector("#scissors");
    playerSelectScissors.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
        endGame(playerScore, computerScore);
    });

    // runs game with player playing paper
    const playerSelectPaper = document.querySelector("#paper");
    playerSelectPaper.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
        endGame(playerScore, computerScore);
    });
}

game();