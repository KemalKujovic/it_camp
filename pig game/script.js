'use strict';

// uzimamo vrednosti
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const section0 = document.querySelector('.player--0');
const section1 = document.querySelector('.player--1');

// dekleracija
let scores, currentScore, playing, activePlayer;
const init = function () {
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0.innerText = 0;
  score1.innerText = 0;
  dice.classList.add('hidden');
  scores = [0, 0];
  section0.classList.add('player--active')
  section0.classList.remove('player--winner')
  section1.classList.remove('player--winner')
  section1.classList.remove('player--active')
};
init();


const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  section0.classList.toggle('player--active');
  section1.classList.toggle('player--active');
};

// rolling dice funciot.
rollBtn.addEventListener('click', function () {
  // 1. generating a random dice roll
  if (playing) {
    let broj = Math.trunc(Math.random() * 6) + 1;

    //2. display dice
    dice.classList.remove('hidden');
    dice.src = `dice-${broj}.png`;

    if (broj !== 1) {
      let curretn1 = document.querySelector('#current--0');
      currentScore += broj;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch to second player
      switchPlayer();
    }
    // 3. check for rolled and if not 1 or yes
  }
});

holdBtn.addEventListener('click', () => {
  if (playing) {
    // 1.. add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. chef if player's score is > 100
    if (scores[activePlayer] > 20) {
      // finish the game
      dice.classList.add('hidden');
      playing = false;
      let activeBackground = document.querySelector(`.player--${activePlayer}`);
      document.querySelector(`.player--${activePlayer}`);
      activeBackground.classList.add('player--winner');
      activeBackground.classList.remove('player--active');
    } else {
      //switch to another player
      switchPlayer();
    }
  }
});

newBtn.addEventListener('click', init);

