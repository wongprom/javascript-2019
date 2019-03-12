/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

var scores, roundScores, activePlayer, dice, prevDice, gamePlaying;

init();

var x = document.querySelector('#score-0').textContent;
document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function() {
  if (gamePlaying) {
    //1. random number
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    //2.diplay the result
    document.querySelector('#dice-1').style.display = 'block';
    document.querySelector('#dice-2').style.display = 'block';

    document.querySelector('#dice-1').src = 'dice-' + dice1 + '.png';
    document.querySelector('#dice-2').src = 'dice-' + dice2 + '.png';

    //3.update the round score IF the number was NOT 1
    //solution for challenge 2
    /* 
    if (dice === 6 && prevDice === 6) {
      //player looses scores
      scores[activePlayer] = 0;
      document.getElementById('score-' + activePlayer).textContent = '0';
      nextPlayer();
    } else if (dice !== 1) {
      //add score
      roundScores += dice;

      document.querySelector(
        '#current-' + activePlayer
      ).textContent = roundScores;
    } else {
      //next player
      nextPlayer();
    }
    prevDice = dice;
    //solution for challenge 2 END**********************'
     */
    //solution challenge 3**************************
    if (dice1 !== 1 && dice2 !== 1) {
      //add score
      roundScores += dice1 + dice2;
      document.querySelector(
        '#current-' + activePlayer
      ).textContent = roundScores;
    } else {
      //next player
      nextPlayer();
    }
    //solution challenge 3 END**********************'
  }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
  if (gamePlaying) {
    //add currrent scores to global scores
    scores[activePlayer] += roundScores;
    //update the UI
    document.getElementById('score-' + activePlayer).textContent =
      scores[activePlayer];

    var input = document.querySelector('.final-score').value;

    // undefined,0,null,"" are COERCED to false
    //Anything else i COERCED to true
    var winningScore;
    if (input) {
      winningScore = input;
    } else {
      winningScore = 100;
    }

    //check if player won the game

    if (scores[activePlayer] >= winningScore) {
      document.getElementById('name-' + activePlayer).textContent = 'winner';
      document.querySelector('#dice-1').style.display = 'none';
      document.querySelector('#dice-2').style.display = 'none';
      document
        .querySelector('.player-' + activePlayer + '-panel')
        .classList.add('winner');
      document
        .querySelector('.player-' + activePlayer + '-panel')
        .classList.remove('active');

      gamePlaying = false;
    } else {
      //next Player
      nextPlayer();
    }
  }
});

function nextPlayer() {
  //next Player
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScores = 0;

  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('#dice-1').style.display = 'none';
  document.querySelector('#dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScores = 0;
  gamePlaying = true;

  document.querySelector('#dice-1').style.display = 'none';
  document.querySelector('#dice-2').style.display = 'none';

  document.getElementById('score-0').textContent = 0;
  document.getElementById('score-1').textContent = 0;
  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
}
