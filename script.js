
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
        console.log('A tie');
    } else if (computerChoice === 'R' && playerChoice === 'S' ||
    computerChoice === 'P' && playerChoice === 'R' ||
    computerChoice === 'S' && playerChoice === 'P') {
        console.log(`Computer won! ${computerChoice} beats ${playerChoice}`);
    } else {
        console.log(`Player won! ${playerChoice} beats ${computerChoice}`);
    }
}

// make the player input case insensitive
function caseInsensitive(text) {
    return text.toUpperCase();
}




// make a 5 round game
function playGame() {

    //count computer and player wins in one game to determine the ultimate winner
    let computerScore = 0;
    let playerScore = 0;

    for (let gameNumber = 0; gameNumber < 5; gameNumber++) {
        // store the player choice process (function) in a variable for future reference
        let playerChoice = caseInsensitive(getPlayerChoice());
        console.log(`Player: ${playerChoice}`);

        // assign the computer choice process (functions) to a variable for future 
        // reference
        let computerChoice = convertComputerNumToValue(getComputerChoice());
        console.log(`Computer: ${computerChoice}`);

        // call the comparing function with new arguments
        const comparison = compareChoices(computerChoice, playerChoice);

        //print a divider (empty) line
        console.log('');
    }
}

let game = playGame();

// output the winner (done with log in the compare function)


