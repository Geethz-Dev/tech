let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0,
};

updateScoreElement();

function playGame(playerMove) {

    const computerMove = pickComputerMove();
    let result = '';
    if (playerMove === 'Scissors') {
        if (computerMove === 'Scissors') {
            result = 'You tie';
        }
        else if (computerMove === 'Rock') {
            result = 'You lose';
        }
        else if (computerMove === 'Paper') {
            result = 'You win';
        }
    }
    else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'You win';
        }
        else if (computerMove === 'Paper') {
            result = 'You tie';
        }
        else if (computerMove === 'Scissors') {
            result = 'You lose';
        }
    }
    else if (playerMove === 'Rock') {
        if (computerMove === 'Paper') {
            result = 'You lose';
        }
        else if (computerMove === 'Scissors') {
            result = 'You win';
        }
        else if (computerMove === 'Rock') {
            result = 'You tie';
        }
    }

    if (result === 'You win') {
        score.wins += 1;
    }
    else if (result === 'You lose') {
        score.losses += 1;
    }
    else if (result === 'You tie') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement(); 
       
    document.querySelector('.js-result')
        .innerHTML = result;
    document.querySelector('.js-moves')
        .innerHTML = `You
<img src="${playerMove}-emoji.png" class="image-element"> 
<img src="${computerMove}-emoji.png" class="image-element">
Computer`;              
}


    



function updateScoreElement (){
    
        document.querySelector('.js-score')
            .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }

function pickComputerMove() {
    let computerMove = '';
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
    }
    else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'Scissors';
    }
    console.log(computerMove);
    return computerMove;
}