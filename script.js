function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    if (random == 0){
        return "rock";
    } else if (random == 1) {
        return "paper";
    } else {
        return "scissor";
    }
}

function getHumanChoice() {
    let human = prompt ("Enter your choice");
    human = human.toLowerCase();
    return human;
}

function playRound(humanChoice, computerChoice) {
    switch(humanChoice) {
        case "rock" :
            if (computerChoice == humanChoice) {
                console.log("It's a tie");
            } else if (computerChoice == "paper") {
                computerScore += 1;
                console.log("You lose");
            } else {
                humanScore += 1;
                console.log("You win");
            }
            break;

        case "paper" :
            if (computerChoice == humanChoice) {
                console.log("It's a tie");
            } else if (computerChoice == "scissor") {
                computerScore += 1;
                console.log("You lose");
            } else {
                humanScore += 1;
                console.log("You win");
            }
            break;

        case "scissor" :
            if (computerChoice == humanChoice) {
                console.log("It's a tie");
            } else if (computerChoice == "rock") {
                computerScore += 1;
                console.log("You lose");
            } else {
                humanScore += 1;
                console.log("You win");
            }
            break;
    }
}

function playGame() {
    for (let i = 1; i <= 5; i ++) {
        
        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice();

        console.log ("The Computer picked: " + computerSelection);
        console.log ("You picked: " + humanSelection);

        playRound(humanSelection, computerSelection);

        console.log("Computer: " + computerScore);
        console.log("Your score: " + humanScore);
    };
}

function stateWinner() {
    if (humanScore == computerScore) {
        console.log("Nobody wins it's a tie");
    } else if (humanScore > computerScore) {
        console.log("Yay! You win the game");
    } else {
        console.log("Boo! You lost the game");
    }
}

let humanScore = 0;
let computerScore = 0;

playGame();

stateWinner();
