/* alert("Lets play a game of Rock, Paper, Scissors!")

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoiceFromKey(key) {
    switch (key) {
        case "r":
            return "rock";
        case "p":
            return "paper";
        case "s":
            return "scissors";
        default:
            return null;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelectionKey = prompt("Enter your choice (r for rock, p for paper, s for scissors):").toLowerCase();
        const playerSelection = getPlayerChoiceFromKey(playerSelectionKey);
        if (!playerSelection) {
            alert("Invalid choice. Please choose again.");
            i--; // Decrementing the loop counter to repeat the current round
            continue;
        }
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}


// Start the game
game();

confirm('Thanks for playing! Would you like to play again?')
console.log(confirm) */


const playGame = funtion() {  
}


// Start the game
playGame()