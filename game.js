function startGame() {
    let play = confirm("Play game?");
    if (play === true) {
        playGame();
    } else {
        alert("See you next time!");
        return;
    }
}
