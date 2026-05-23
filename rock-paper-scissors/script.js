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

playGame()

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

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors")
    return choice.toLowerCase()

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

function playRound() {
    let human = getHumanChoice()
    let computer = getComputerChoice()

    let winner = compareChoices(computer, human)

    console.log(`${winner} wins! Score: human=${humanScore}, computer=${computerScore}`)

}

function playGame() {
    for (let i=0; i < 5; i++){
        playRound()
    }
}
