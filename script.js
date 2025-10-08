function getComputerChoice(max) {
    let random = Math.floor(Math.random() * max);
    if (random == 0){
        console.log("rock");
    } else if (random == 1) {
        console.log("paper");
    } else {
        console.log("scissor");
    }
}