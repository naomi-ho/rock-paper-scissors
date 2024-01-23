// Function that will randomly return either 'rock', 'paper' or 'scissors' for the computer's play
function getComputerChoice() {
    const decisions = ["rock", "paper", "scissors"];
    let computerChoice = Math.floor(Math.random() * decisions.length);
    console.log(computerChoice, decisions[computerChoice]);
}