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

getHumanChoice();

let humanScore = 0;
let computerScore = 0;
