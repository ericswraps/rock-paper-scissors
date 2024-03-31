let computerScore = 0; 
let playerScore = 0; 

console.log("Let's play Rock Paper Scissors!");
function getComputerChoice() {
    let rando = Math.floor(Math.random() * 3) + 1;
    if (rando == 1) {
        return "Rock";
    } else if (rando == 2) {
        return "Paper";
    } else if (rando == 3) {
        return "Scissors";
    }
}


function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();
    console.log(playerChoice);
    console.log(computerChoice);

    if (playerChoice === computerChoice) {
        i--;
        return "You tied!";
    } else if (
        playerChoice === "paper" && computerChoice === "rock" ||
        playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "scissors" && computerChoice === "paper"
    
    ) {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}


function playGame () {
    for(i = 0; i <= 4; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`${playerScore}, ${computerScore}`);
    }
    if (playerScore > computerScore) {
        console.log("You won the game!");
    } else {
        console.log("You lost the game. :(");
    }
}

playGame();
