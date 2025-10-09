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
                computerScore =+ 1;
                console.log("You lose");
            } else {
                humanScore =+ 1;
                console.log("You win");
            }
            break;

        case "paper" :
            if (computerChoice == humanChoice) {
                console.log("It's a tie");
            } else if (computerChoice == "scissor") {
                computerScore =+ 1;
                console.log("You lose");
            } else {
                humanScore =+ 1;
                console.log("You win");
            }
            break;

    }
}

let humanScore = 0;
let computerScore = 0;
