let playerScore = 0;
let comScore = 0;
let round = 0;

function computerPlay() {
    const figures = ['rock', 'paper', 'scissors'];
    return figures[Math.floor(Math.random() * figures.length)];
}

function playAgain() {
    window.location.reload();
}

function game(btn) {
    let comFigure = computerPlay([Math.floor]);
    console.log(comFigure);
    let plyFigure = btn.id;
    console.log(plyFigure);
    if (
        (plyFigure == 'rock' && comFigure == 'scissors') ||
        (plyFigure == 'paper' && comFigure == 'rock') ||
        (plyFigure == 'scissors' && comFigure == 'paper')
    ) {
        playerScore++;
        round++;
        document.getElementById('result-desc').textContent = 'Good Choice. You beat the Machine for this turn.' 
        document.getElementById('player-Score').textContent = playerScore
        document.getElementById('round').textContent = 'Round ' + round
        document.getElementById('fig-pic').src = comFigure + '.png'
        if(playerScore == 5)
        {
            document.body.classList.add('winScreen')
            document.getElementById('rock').onclick = null;
            document.getElementById('paper').onclick = null;
            document.getElementById('scissors').onclick = null;
            document.getElementById('result-desc').textContent = 'Congrats! You beat this silicon piece of sh*t.'
            return;
        }
    } else if(plyFigure == comFigure) {
        round++;
        document.getElementById('result-desc').textContent = 'Tie Game!'
        document.getElementById('round').textContent = 'Round ' + round
        document.getElementById('fig-pic').src = comFigure + '.png'
    } else {
        comScore++;
        round++;
        document.getElementById('result-desc').textContent = 'Oh no! You lost this round.'
        document.getElementById('com-Score').textContent = comScore
        document.getElementById('round').textContent = 'Round ' + round
        document.getElementById('fig-pic').src = comFigure + '.png'
        if(comScore == 5)
        {
            document.body.classList.add('loseScreen')
            document.getElementById('rock').onclick = null;
            document.getElementById('paper').onclick = null;
            document.getElementById('scissors').onclick = null;
            document.getElementById('result-desc').textContent = 'The CPU outsmarted you pal...'
            return;
        }
    }
}