/*
Problem:
- take in user input and computer choice, return who wins and current scores

Plan:
Functions: 
- calculate computer choice
- take in user input
- compare choices and update scores
- play round which initiates round

*/

let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let random_num = Math.random()

    if (random_num <= .3) {
        return "rock"
    } else if (random_num > .6) {
        return "paper"
    } else {
        return "scissors"
    }

}

function compareChoices(computerChoice, humanChoice) {
    if ((computerChoice == "rock" && humanChoice == "scissors") || (computerChoice == "scissors" && humanChoice == "paper") || (computerChoice == "paper" && humanChoice == "rock")) {
        computerScore += 1
        return "computer"
    } else if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "rock")) {
        humanScore += 1
        return "human"
    } else {
        return "nobody"
    }
}

function playRound(event) {

    if (humanScore >= 5 && computerScore >= 5) {
        return
    }

    if (event.target.tagName !== "BUTTON") {
        return
    }

    let computer = getComputerChoice()
    let human = event.target.textContent.toLowerCase()

    let winner = compareChoices(computer, human)
    displayScore(winner)
}

function displayScore(winner) {
    let score_div = document.querySelector(".score")
    let score_announcement = document.createElement("p")
    let score_text = `${winner} wins this round. Score: human=${humanScore}, computer=${computerScore}`

    if (humanScore == 5 || computerScore == 5) {
        score_text = `Game over: ${winner} wins! Final Score: human=${humanScore}, computer=${computerScore}`
    }

    score_announcement.textContent = score_text
    score_div.appendChild(score_announcement)
}

let buttons_div = document.querySelector(".buttons")
buttons_div.addEventListener('click', playRound)