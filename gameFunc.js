let playerScore = 0;
let comScore = 0;

function computerPlay() {
    const figures = ['rock', 'paper', 'scissors'];
    return figures[Math.floor(Math.random() * figures.length)].toUpperCase();
}

function playerPlay() {
    sel = prompt('CHOOSE YOUR WEAPON...')
    return sel.toUpperCase();
}

function game() {
    for (i = 1; i <= 5; i++) {
        let comSelection = computerPlay();
        let playerSelection = playerPlay();
        if ((playerSelection == 'ROCK' && comSelection == 'SCISSORS') ||
            (playerSelection == 'PAPER' && comSelection == 'ROCK') ||
            (playerSelection == 'SCISSORS' && comSelection == 'PAPER')
        ) {
            playerScore += 1
            alert('YOU WIN!');
        } else if (playerSelection == comSelection) {
            alert('TIE GAME');
        } else {
            comScore += 1;
            alert('YOU LOSE...');
        }
        console.log('ROUND: ' + i);
        console.log(playerSelection + ' ' + comSelection);
        console.log('YOUR SCORE: ' + playerScore);
        console.log('COM SCORE: ' + comScore);
        if (i == 5) {
            if (comScore < playerScore) {
                alert('CONGRATULATIONS. YOU HAVE WON WITH ' + playerScore + ' OUT OF 5!');
            } else if (playerScore == comScore) {
                alert('IT\'S A TIE GAME!');
            }
             else {
                alert('YOU HAVE LOST WITH ' + playerScore + 'OUT OF 5!');
            }
        }
    }
}