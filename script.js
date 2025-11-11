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
                console.log("It's a tie");
            } else if (computerChoice === "paper") {
                computerScore += 1;
                console.log("You lose");
            } else {
                humanScore += 1;
                console.log("You win");
            }
            break;

        case "paper":
            if (computerChoice === humanChoice) {
                console.log("It's a tie");
            } else if (computerChoice === "scissor") {
                computerScore += 1;
                console.log("You lose");
            } else {
                humanScore += 1;
                console.log("You win");
            }
            break;

        case "scissor":
            if (computerChoice === humanChoice) {
                console.log("It's a tie");
            } else if (computerChoice === "rock") {
                computerScore += 1;
                console.log("You lose");
            } else {
                humanScore += 1;
                console.log("You win");
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
        console.log(e.target.id);
        human = e.target.id;
        playRound(human, getComputerChoice());
    })
})

let humanScore = 0;
let computerScore = 0;

stateWinner();
