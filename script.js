
const options = ["ROCK", "PAPER", "SCISSORS"];
const getCompChoice = () => {
    const choice = Math.floor(Math.random() * 3);
    return (options[choice]);
}

compChoice = getCompChoice();  //computer choice doen't change so look at this code for reference: https://github.com/UniverseNature/Rock-Paper-Scissors/blob/main/Script.JS
playerChoice = "Rock";
let compScore = 0;
let playerScore = 0;

const playRound = (playerChoice, compChoice) => {
    console.log(`Your choice: ${playerChoice}`);
    console.log(`Opponent's choice: ${compChoice}`);
    if (playerChoice == "ROCK" && compChoice == "PAPER") {
        compScore++;
        console.log("Paper beats Rock. You lose!");
    } else if (playerChoice == "PAPER" && compChoice == "SCISSORS") {
        compScore++;
        console.log("Scissors beat Paper. You Lose!");
    } else if (playerChoice == "SCISSORS" && compChoice == "ROCK") {
        compScore++;
        console.log("Rock beats Scissors. You Lose!");
    } else if (playerChoice == "PAPER" && compChoice == "ROCK") {
        playerScore++;
        console.log("Paper beats Rock. You Win!");
    } else if (playerChoice == "SCISSORS" && compChoice == "PAPER") {
        playerScore++;
        console.log("Scissors beat Paper. You Win!");
    } else if (playerChoice == "ROCK" && compChoice == "SCISSORS") {
        playerScore++;
        console.log("Rock beats Scissors. You Win!");
    } else if (playerChoice == compChoice) {
        console.log("Both chose same. It's a Draw!");
    }
}

const game = () => {
    playRound(prompt().toUpperCase(), compChoice);
    playRound(prompt().toUpperCase(), compChoice);
    playRound(prompt().toUpperCase(), compChoice);
    playRound(prompt().toUpperCase(), compChoice);
    playRound(prompt().toUpperCase(), compChoice);

    console.log(`Your Score: ${playerScore}`);
    console.log(`Opponent's Score: ${compScore}`);
    if (playerScore > compScore) {
        console.log("You have WON the game!");
    } else if (compScore > playerScore) {
        console.log("You have LOST the game!");
    }

}

game();
