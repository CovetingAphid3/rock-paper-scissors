

const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomIndex];
    return computerChoice;
}




function playerSelection() {
    let playerChoice = prompt('Choose rock, paper, scissors:');
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors') {
        return playerSelection();  // Return the result of the recursive call
    } else {
        return playerChoice;
    }
};




function rockPaperScissors(playerChoice, computerChoice) {
    let result;
    if (playerChoice === 'rock' && computerChoice === 'paper') {
        result = 'lose';
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        result = 'lose';
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        result = 'lose';
    } else if (playerChoice === computerChoice) {
        result = 'draw';
    } else {
        result = 'win';
    }

    return result;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let gameInProgress = true;  // Introduce a variable to control the loop

    while (gameInProgress) {
        
        const playerChoice = playerSelection();
        console.log(`You chose: ${playerChoice}`);
        const computerChoice = getComputerChoice();
        console.log(`Computer chose: ${computerChoice}`);
        const result = rockPaperScissors(playerChoice, getComputerChoice());

        if (result === 'win') {
            playerScore++;
        } else if (result === 'lose') {
            computerScore++;
        }

        console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);

        if (playerScore === 3 || computerScore === 3) {
            gameInProgress = false;
        }
    }

    if (playerScore === 3) {
        console.log('Congratulations! You win the game.');
    } else {
        console.log('Computer wins the game. Better luck next time!');
    }
}

game();