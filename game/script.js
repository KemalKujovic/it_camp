'use strict';

const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const scorePl0 = document.querySelector('#score--0');
const scorePl1 = document.querySelector('#score--1');
const section0 = document.querySelector('.player--0');
const section1 = document.querySelector('.player--1');
let currentNumber1 = Number(document.querySelector('#current--0').textContent);
let dice = document.querySelector('.dice');

let scores = [0, 0];

scorePl0.textContent = 0;
scorePl1.textContent = 0;
dice.classList.add('hidden');

let activePlayer = 0;
let playing = true;
let currentNum = 0;

rollBtn.addEventListener('click', function () {
  if (playing) {
    let randomNumber = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `dice-${randomNumber}.png`;

    document.getElementById(`current--${activePlayer}`).textContent = 0;
    document.getElementById(`current--${activePlayer}`);
    let currentScore = 0;

    if (randomNumber !== 1) {
      let current1 = document.querySelector('#current--0');
      currentNum += randomNumber;

      document.getElementById(`current--${activePlayer}`).textContent =
        currentNum;
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      currentNum = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      section0.classList.toggle('player--active');
      section1.classList.toggle('player--active');
    }
    // if(currentNum > 21){
    //   playing = false;
    //   document.getElementById(`current--${activePlayer}`)
    //     }
  }
});

holdBtn.addEventListener('click', () => {
  if (playing) {
    scores[activePlayer] += currentNum;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] > 20) {
      playing = false;
      let activeBg = document.querySelector(`.player--${activePlayer}`);
      // sadasnji.classList.add('player--winner')
      activeBg.classList.add('player--winner');
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      currentNum = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      section0.classList.toggle('player--active');
      section1.classList.toggle('player--active');
    }
  }
});

newBtn.addEventListener('click', () => {
  let activeBg = document.querySelector(`.player--${activePlayer}`);
  currentNum = 0;
  activePlayer = 0;
  playing = true;
  currentNum = 0;
  scores = [0, 0];
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;
  document.getElementById(`score--0`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;
  section0.classList.toggle('player--active');
  section1.classList.toggle('player--active');
  activeBg.classList.remove('player--winner');

  dice.classList.add('hidden');
});
