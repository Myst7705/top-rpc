function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection, computerSelection) {
    playerSelection= playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    computerSelection= computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase();

    if (playerSelection===computerSelection) {
        return 2; // 2 means you tie
    }
    else if (playerSelection==='Scissors'&&computerSelection==='Rock' || playerSelection==='Paper'&&computerSelection==='Scissors' || playerSelection==='Rock'&&computerSelection==='Paper') {
        return 0; // 0 means you lose
    } else {
        return 1; // 1 means you win
    }
}

let playerWinCount = 0;
let computerWinCount = 0;

function game(playerSelection) {
    let computerSelection;

    if (playerWinCount<5 && computerWinCount<5) {
        computerSelection = getComputerChoice();
        let whoWin = playRound(playerSelection, computerSelection);

        if (whoWin===2) {
            result.textContent = `It's a tie! ${playerSelection} ties ${computerSelection}`;
            
        } else if (whoWin===1) {
            result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
            playerWinCount++;
            
        } else {
            result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
            computerWinCount++;
            
        }
    } else if (playerWinCount===5) {
        result.textContent = 'You won the game! Reload the page to play again.';

        once();
    } else if (computerWinCount===5) {
        result.textContent = 'You lost the game! Reload the page to play again.';

        once();
    }
    curScore.textContent = `You: ${playerWinCount}  Computer: ${computerWinCount}`
}




function reloadButtonHandler() {
    let reloadLink = document.createElement('a');
    reloadLink.href = 'index.html';

    let reloadBtn = document.createElement('button');
    reloadBtn.textContent = 'Reload'
    reloadBtn.style.cssText = 'width: 100px; height: 50px; font-size: 10px;'

    results.appendChild(reloadLink);
    reloadLink.appendChild(reloadBtn);
}

var once = function () {
    if (once.done) return;

    reloadButtonHandler();

    once.done = true;
}






const paperBtn = document.querySelector('#paper');
const rockBtn = document.querySelector('#rock');
const scissorsBtn = document.querySelector('#scissors');

paperBtn.addEventListener('click', function() {
    game('paper');
});
scissorsBtn.addEventListener('click', function() {
    game('scissors');
});
rockBtn.addEventListener('click', function() {
    game('rock');
});

const result = document.querySelector('.result');
const curScore = document.querySelector('.curScore');
const results = document.querySelector('.results');