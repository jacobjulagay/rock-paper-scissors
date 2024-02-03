function startGame() {
    let play = confirm("Play game?");
    if (play === true) {
        playGame();
    } else {
        alert("See you next time!");
        return;
    }
}

function getPLayerChoice() {
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    playerSelection = playerSelection.trim().toLowerCase();

    let isPlayerSelectionValid = false;

    while (isPlayerSelectionValid === false) {
        if (playerSelection !== "rock" ||
            playerSelection !== "paper" ||
            playerSelection !== "scissors") {
                return playerSelection;
            }
        else {
            // This won't show because prompt() will show up before console
            alert("PLease try again, enter Rock, Paper, or Scissors.")
            console.log("PLease try again, enter Rock, Paper, or Scissors.")
        }
    
    }


}
