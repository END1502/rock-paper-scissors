function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    if (random == 0){
        console.log("rock");
    } else if (random == 1) {
        console.log("paper");
    } else {
        console.log("scissor");
    }
}
getComputerChoice();

function getHumanChoice() {
    let human = prompt ("Enter your choice");
    console.log(human);
}

getHumanChoice();

let humanScore = 0;
let computerScore = 0;
