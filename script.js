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

function stateWinner() {
    if (humanScore === computerScore) {
        console.log("Nobody wins it's a tie");
    } else if (humanScore > computerScore) {
        console.log("Yay! You win the game");
    } else {
        console.log("Boo! You lost the game");
    }
}

const buttons = document.querySelectorAll(".btn");
buttons.forEach(choice => {
    choice.addEventListener('click', (e) => {
        human = e.target.id;
        playRound(human, getComputerChoice());
        console.log(`Human: ${humanScore} :: Computer: ${computerScore}`);
        if (humanScore === round || computerScore === round) {
            stateWinner();
        }
    })
})

const result = document.createElement("div");
const roundResult = document.createElement("span");
result.appendChild(roundResult);
document.body.appendChild(result);

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

let humanScore = 0;
let computerScore = 0;
const round = 3;
