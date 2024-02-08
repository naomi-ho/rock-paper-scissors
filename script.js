// define global variables
const decisions = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
const maxScore = 5;
let gameResult;

function game() {
    // function that plays a single round of the game
    function playRound(playerSelection, computerSelection) {
        let lineTwo = document.getElementById('line-2');

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
        
        // update player and computer scores
        let playerLine = document.getElementById('player-score');
        let computerLine = document.getElementById('computer-score');

        playerLine.textContent = `Player: ${playerScore}`;
        computerLine.textContent = `Computer: ${computerScore}`;

        return (playerScore, computerScore);
    }

    // function that will randomly return either 'rock', 'paper' or 'scissors' for the computer's play
    function getComputerChoice() {
    let computerChoicePosition = Math.floor(Math.random() * decisions.length);
    let computerChoice = decisions[computerChoicePosition];
    return computerChoice;
    }

    // runs game with player playing rock
    const playerSelectRock = document.querySelector('#rock');
    playerSelectRock.addEventListener('click', () => {
        playRound("rock", getComputerChoice());
    });

    // runs game with player playing scissors
    const playerSelectScissors = document.querySelector('#scissors');
    playerSelectScissors.addEventListener('click', () => {
        playRound("scissors", getComputerChoice());
    });

    // runs game with player playing paper
    const playerSelectPaper = document.querySelector('#paper');
    playerSelectPaper.addEventListener('click', () => {
        playRound("paper", getComputerChoice());
    });

    // // loop runs through 5 rounds
    // for (let i = 0; i <= maxScore; i++) {
    //     playRound();
    // }

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