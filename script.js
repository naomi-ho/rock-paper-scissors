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
    const computerHand = document.getElementById("computer-hand");

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

    // displays the current computer hand being played for the round
    if (computerSelection === "rock") {
        computerHand.textContent = "🪨";
    } else if (computerSelection === "paper") {
        computerHand.textContent = "📜";
    } else {
        computerHand.textContent = "✂️"
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
            gameResult.textContent = "YOU WIN";
        } else {
            gameResult.textContent = "YOU LOSE";
        }

        gameResult.setAttribute("style", "font-size: 25px; font-weight: bold");

        playButton.textContent = "Play Again";
        playButton.setAttribute("style", "background: #04AA6D; border: none; font-size: 20px; padding: 10px; border-radius: 10px");

        document.body.appendChild(gameResult);
        document.body.appendChild(playButton);

        // disables buttons
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;

        // darkens buttons
        document.getElementById("rock").style.backgroundColor = "#2b2929";
        document.getElementById("paper").style.backgroundColor = "#2b2929";
        document.getElementById("scissors").style.backgroundColor = "#2b2929";
    }
    // displays a replay button that will reload the window
    playButton.addEventListener("click", () => {
        location.reload();
    });
}

function game() {
    const playerSelectRock = document.querySelector("#rock");
    const playerHand = document.getElementById("player-hand");

    // runs game with player playing rock and updates the player's hand
    playerSelectRock.addEventListener('click', () => {
        playRound("rock", getComputerChoice());
        playerHand.textContent = "🪨";
        endGame(playerScore, computerScore);
    });

    // runs game with player playing scissors and updates the player's hand
    const playerSelectScissors = document.querySelector("#scissors");
    playerSelectScissors.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
        playerHand.textContent = "✂️";
        endGame(playerScore, computerScore);
    });

    // runs game with player playing paper and updates the player's hand
    const playerSelectPaper = document.querySelector("#paper");
    playerSelectPaper.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
        playerHand.textContent = "📜";
        endGame(playerScore, computerScore);
    });
}

game();