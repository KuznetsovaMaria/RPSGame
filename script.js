
//     assign 0 - paper, 1 - rock, 2 - scissors
//     computer's choice:
//     randomize a number 0-2
//     store computer's choice in var
function getComputerChoice() {
    let computerChoice =  Math.floor(Math.random() * 3);
    console.log(`Computer: ${computerChoice}`);
    return computerChoice;
}

// convert randomized number to r/p/s value
let convertComputerNumToValue = function(number) {
    switch (number) {
        case 0:
            return 'P';
            break;
        case 1:
            return 'R';
            break;
        case 2:
            return 'S';
    }
}


// player's choice:
//     ask for input:
//         prompt for R/P/S
//     store player's choice in var
function getPlayerChoice() {
    return prompt('R/P/S?', 'R');
}

// compare the values:
//     A tie if identical choices
//     r > s
//     s > p
//     p > r


// according to the general value comparison compare the two given choices

function compareChoices(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        return 'tie';
    } else if (computerChoice === 'R' && playerChoice === 'S' ||
    computerChoice === 'P' && playerChoice === 'R' ||
    computerChoice === 'S' && playerChoice === 'P') {
        return 'computer';
    } else {
        return 'player';
    }
}

// make the player input case insensitive
function caseInsensitive(text) {
    return text.toUpperCase();
}

// make a 5 round game
function playGame() {

    //count computer and player wins in one game to determine the ultimate winner
    //count games
    let computerScore = 0;
    let playerScore = 0;
    let gamesLeft = 5;

    while (gamesLeft > 0) {
        // store the player choice process (function) in a variable for future reference
        let playerChoice = caseInsensitive(getPlayerChoice());
        console.log(`Player: ${playerChoice}`);

        // assign the computer choice process (functions) to a variable for future 
        // reference
        let computerChoice = convertComputerNumToValue(getComputerChoice());
        console.log(`Computer: ${computerChoice}`);

        // call the comparing function with new arguments
        const comparison = compareChoices(computerChoice, playerChoice);

        //output the result of the current round and count the wins
        if (comparison === 'tie') {
            console.log(`A tie`);
        } else if (comparison === 'computer') {
            computerScore++;
            console.log(`Computer won! ${computerChoice} beats ${playerChoice}`);
            //if one of them wins three games, there's no need to play two more, we announce
            //the winner and reduce the number of games left to play to zero
            //thus ending the game 
            if (computerScore >= 3) {
                console.log('Computer has won more than half the games, the winner is decided');
                gamesLeft = 0;
            }
        } else {
            playerScore++;
            console.log(`Player won! ${playerChoice} beats ${computerChoice}`);
            if (playerScore >= 3) {
                console.log('Player has won more than half the games, the winner is decided');
                gamesLeft = 0;
            }
        }

        //print a divider (empty) line
        console.log('');
        gamesLeft -= 1;
    }

    //display the final result of the game
    if (computerScore === playerScore) {
        console.log(`The game has ended with a tie`);
    } else if (computerScore > playerScore) {
        console.log(`Computer is the ultimate winner with ${computerScore} wins against ${playerScore} player's losses`)
    } else {
        console.log(`Player is the ultimate winner with ${playerScore} wins and ${computerScore} computer's losses`);
    }
}

let game = playGame();




