function startGame() {
    let play = confirm("Play game?");
    if (play === true) {
        playGame();
    } else {
        alert("See you next time!");
        return;
    }
}

function getPlayerChoice() {
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    playerSelection = playerSelection.trim().toLowerCase();

    let isPlayerSelectionValid = false;

    while (isPlayerSelectionValid === false) {
        if (playerSelection !== "rock" ||
            playerSelection !== "paper" ||
            playerSelection !== "scissors") {
                return playerSelection;
        } else {
            // This won't show because prompt() will show up before console
            alert("PLease try again, enter Rock, Paper, or Scissors.");
            console.log("PLease try again, enter Rock, Paper, or Scissors.");
        }
    }
}

// Random choice of rock, paper, scissors for computerSelection
function getComputerChoice() {
    rand = Math.floor(Math.random() * 3);
    if (rand === 0) {
        return "rock";
    } else if (rand === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function singleRound(playerSelection, computerSelection) {
    //Draw
    if (playerSelection === "rock" && computerSelection === "rock" ||
        playerSelection === "paper" && computerSelection === "paper" ||
        playerSelection === "scissors" && computerSelection === "scissors") {
        console.log("It's a draw");
        return 0;
    }
    // Computer Win
    if (playerSelection === "scissors" && computerSelection === "rock" ||
        playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "scissors") {
        console.log(`You lose. ${playerSelection} loses to ${computerSelection}`);
        return "computer";
    }
    // Player Win
    if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper") {
        console.log(`You win. ${playerSelection} loses to ${computerSelection}`);
        return "player";
    }

}

// TODO: Add if you win 3 games, then finish the program.
function playGame() {
    
    let playerCount = 0;
    let computerCount = 0;

    while(playerCount < 3 && computerCount < 3 ) {
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        let winner = singleRound(playerSelection, computerSelection);
        if (winner === "computer") {
            computerCount += 1;
        } else if (winner === "player") {
            playerCount += 1;
        } else {
            continue;
        }
        console.log(`playerCount: ${playerCount}, computerCount: ${computerCount}`);
    }

    if (playerCount === 3) {
        alert(`Player won. Player: ${playerCount}, Computer: ${computerCount}`);
    } else if (computerCount === 3) {
        alert(`Computer won. Player: ${playerCount}, Computer: ${computerCount}`);
    } else {
        alert(`Draw. Player: ${playerCount}, Computer: ${computerCount}`);
    }
}

startGame();
