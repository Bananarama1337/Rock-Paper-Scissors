let playerScore = 0; // Первое число
let computerScore = 0; // Второе число
let round = 0;
let finish = false;
let score = [0, 0];
const cases = ['rock', 'paper', 'scissors'];
const playerOut = document.querySelector('.score__player');
const computerOut = document.querySelector('.score__computer');
const gameResult = document.querySelector('.result');
const gameItog = document.querySelector('.game__itog');

function playRound(key, playerScore, computerScore){
    let computerChoice = cases[Math.floor(Math.random()*cases.length)];
    switch (key){
        case 'rock':
            switch (computerChoice){
                case 'paper':
                    computerScore++;
                    break;
                case 'scissors':
                    playerScore++;
                    break;
            }
            break;

        case 'paper':
            switch (computerChoice){
                case 'rock':
                    playerScore++;
                    break;
                case 'scissors':
                    computerScore++;
                    break;
            }
            break;

        case 'scissors':
            switch (computerChoice){
                case 'rock':
                    computerScore++;
                    break;
                case 'paper':
                    playerScore++;
                    break;
            }
            break;
    }
    gameItog.textContent = `Game ${round}: ${key} - ${computerChoice}`;
    return [playerScore, computerScore];
}

function clearAll(){
    playerOut.textContent = '0';
    computerOut.textContent = '0';
    gameResult.textContent = '';
    score = [0, 0];
    playerScore = score[0];
    computerScore = score[1];
    round = 0;
    finish = false;
    gameItog.textContent = 'Game result'
}

document.querySelector('.buttons').onclick = (event) =>{
    const key = event.target.textContent;
    document.querySelector('.retry').onclick = clearAll;
        if (cases.includes(key) && !finish){
        score = playRound(key, score[0], score[1]);
        playerScore = score[0];
        computerScore = score[1];
        playerOut.textContent = playerScore.toString();
        computerOut.textContent = computerScore.toString();
        round++;
        if (playerScore === 5){
            gameResult.textContent = 'The winner is Player!';
            finish = true;
            return;
        } else if (computerScore === 5){
            gameResult.textContent = 'The winner is Machine!';
            finish = true;
            return;
        }

    } else{
        return;
    }
}