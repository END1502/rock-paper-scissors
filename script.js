function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return "rock";
    } else if (random === 1) {
        return "paper";
    } else {
        return "scissor";
    }
}

const win = () => {
    humanScore += 1;
    roundResult.textContent = "You win!";
}

const lose = () => {
    computerScore += 1;
    roundResult.textContent = "You lose!";
}

const tie = () => {
    roundResult.textContent = "It's a tie!";
}

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            if (computerChoice === humanChoice) {
                tie();
            } else if (computerChoice === "paper") {
                lose();
            } else {
                win();
            }
            break;

        case "paper":
            if (computerChoice === humanChoice) {
                tie();
            } else if (computerChoice === "scissor") {
                lose();
            } else {
                win();
            }
            break;

        case "scissor":
            if (computerChoice === humanChoice) {
                tie();
            } else if (computerChoice === "rock") {
                lose();
            } else {
                win();
            }
            break;
    }
}

const finalResult = document.createElement("p");
function stateWinner() {
    if (humanScore === computerScore) {
        finalResult.textContent = "Nobody wins it's a tie";
    } else if (humanScore > computerScore) {
        finalResult.textContent = "Yay! You win the game";
    } else {
        finalResult.textContent = "Boo! You lost the game";
    }

    humanScore = 0;
    computerScore = 0;
}

const score = document.createElement("p");
const buttons = document.querySelectorAll(".btn");
buttons.forEach(choice => {
    choice.addEventListener('click', (e) => {
        human = e.target.id;
        playRound(human, getComputerChoice());
        score.textContent = `Human: ${humanScore} :: Computer: ${computerScore}`
        if (humanScore === round || computerScore === round) {
            stateWinner();
        }
    })
})

const result = document.createElement("div");
const roundResult = document.createElement("p");
result.appendChild(roundResult);
result.appendChild(score);
result.appendChild(finalResult);

document.body.appendChild(result);

let humanScore = 0;
let computerScore = 0;
const round = 3;
