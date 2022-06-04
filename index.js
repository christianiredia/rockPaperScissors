const choices = ["rock", "paper", "scissors"]
const rockButton = document.querySelector(".rock")
const paperButton = document.querySelector(".paper")
const scissorsButton = document.querySelector(".scissors")
const outcomeDiv = document.querySelector(".outcome")
const playerScoreSpan = document.querySelector(".player-score")
const computerScoreSpan = document.querySelector(".computer-score")

let computerSelection = computerPlay()
let playerScore = 0
let computerScore = 0

function computerPlay() {
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection ) {
        const p = document.createElement("p")
        p.innerText = "Tie Game!"
        outcomeDiv.appendChild(p)
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
        const p = document.createElement("p")
        p.innerText = "You LOST the game! Paper beats Rock!"
        outcomeDiv.appendChild(p)
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++
        const p = document.createElement("p")
        p.innerText = "You WON the game! Rock beats Scissors!"
        outcomeDiv.appendChild(p)
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        const p = document.createElement("p")
        p.innerText = "You WON the game! Paper beats Rock!"
        outcomeDiv.appendChild(p)
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++
        const p = document.createElement("p")
        p.innerText = "You LOST the game! Scissors beats Paper!"
        outcomeDiv.appendChild(p)
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++
        const p = document.createElement("p")
        p.innerText = "You LOST the game! Rock beats Scissors!"
        outcomeDiv.appendChild(p)
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        const p = document.createElement("p")
        p.innerText = "You WON the game! Scissors beats Paper!"
        outcomeDiv.appendChild(p)
    }
}

function  checkForWinner(playerScore, computerScore) {
    if (playerScore === 5) {
        const h2 = document.createElement("h2")
        h2.classList.add("player-won")
        h2.innerText = `You Won! The score was ${playerScore} to ${computerScore}! Great job beating the computer!`
        outcomeDiv.append(h2)

    } else if (computerScore === 5) {
        const h2 = document.createElement("h2")
        h2.classList.add("computer-won")
        h2.innerText = `You Lost! The score was ${playerScore} to ${computerScore}. Better luck next time!`
        outcomeDiv.append(h2)
    }
}

function updateScores(playerScore, computerScore) {
    playerScoreSpan.innerText = `You: ${playerScore}`
    computerScoreSpan.innerText = `Computer: ${computerScore}`
}

rockButton.addEventListener("click", function() {
    const computerSelection = computerPlay()
    const playerSelection = "rock"
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, computerScore)
    checkForWinner(playerScore, computerScore)
})

paperButton.addEventListener("click", function() {
    const computerSelection = computerPlay()
    const playerSelection = "paper"
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, computerScore)
    checkForWinner(playerScore, computerScore)
})

scissorsButton.addEventListener("click", function() {
    const computerSelection = computerPlay()
    const playerSelection = "scissors"
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, computerScore)
    checkForWinner(playerScore, computerScore)
})


