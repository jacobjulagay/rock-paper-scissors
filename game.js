function startGame() {
    let play = confirm("Play game?");
    if (play === true) {
        playGame();
    } else {
        alert("See you next time!");
        return;
    }
};

function getPLayerChoice() {
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
};

// Random choice of rock, paper, scissors for computerSelection
function getComputerChoice() {
    rand = Math.floor(Math.random() * 3);
    if (rand === 0) {
        return "rock";
    } elif (rand === 1) {
        return "paper";
    } else {
        return "scissors";
    }
};

function singleRound(playerSelection, computerSelection) {
    //Draw
    if (playerSelection === "rock" && computerSelection === "rock" ||
        playerSelection === "paper" && computerSelection === "paper" ||
        playerSelection === "scissors" && computerSelection === "scissors") {
        console.log("It's a draw");
        return 0;
    }
    // Computer Win
    else if (playerSelection === "scissors" && computerSelection === "rock" ||
        playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "scissors") {
        console.log(`You lose. ${playerSelection} loses to {computerSelection}`);
        return 1;
    }
    // Player Win
    else {  
        console.log(`You lose. ${playerSelection} loses to {computerSelection}`);
        return 2;
    }
}

