
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
// assign the computer choice process (functions) to a variable for future 
// reference
let computerChoice = convertComputerNumToValue(getComputerChoice());
console.log(`Computer: ${computerChoice}`);

// player's choice:
//     ask for input:
//         prompt for R/P/S
//     store player's choice in var
function getPlayerChoice() {
    return prompt('R/P/S?', 'R');
}

// store the player choice process (function) in a variable for future reference
let playerChoice = getPlayerChoice();
console.log(`Player: ${playerChoice}`);

// compare the values:
//     A tie if identical choices
//     r > s
//     s > p
//     p > r


// according to the general value comparison compare the two given choices

function compareChoices(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        console.log('A tie');
    } else if (computerChoice === 'R' && playerChoice === 'S' ||
    computerChoice === 'P' && playerChoice === 'R' ||
    computerChoice === 'S' && playerChoice === 'P') {
        console.log('Computer won!');
    } else {
        console.log('Player won!');
    }
}

// call the comparing function with new arguments
compareChoices(computerChoice, playerChoice);

// output the winner (done with log in the compare function)
