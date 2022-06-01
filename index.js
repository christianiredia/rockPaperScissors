const choices = ["rock", "paper", "scissors"]
let computerSelection = computerPlay()
let playerScore = 0
let computerScore = 0


function computerPlay() {
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
   
}

function singleRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection ) {
        return "Tie Game!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
        return "You LOST the game! Paper beats Rock!"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++
        return "You WON the game! Rock beats Scissors!"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        return "You WON the game! Paper beats Rock!"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++
        return "You LOST the game! Scissors beats Paper!"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++
        return "You LOST the game! Rock beats Scissors!"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        return "You WON the game! Scissors beats Paper!"
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Lets play a game ! Choose one", "rock, paper, or scissors?").toLowerCase()
        console.log(singleRound(playerSelection, computerSelection))
        computerSelection = computerPlay()
    }
    if (playerScore > computerScore) {
        return "You beat the computer!"
    } else if (playerScore < computerScore) {
        return "You lost to the computer!"
    } else {
        return "You Tied with the computer."
    }
}

console.log(game())