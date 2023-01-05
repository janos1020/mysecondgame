'use strict';

// selecting elements

// id-ra #-el hivatkozunk vagy a getelement
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnHold = document.querySelector('.btn--hold')
const btnRoll = document.querySelector('.btn--roll')
let score =  [0,0]
let curentScore = 0
let score1 = 0
let activePlayer = 0;
let playing = true;

const swithcPlayer = function () {
    

    document.getElementById( `current--${activePlayer}`).textContent= 0
    activePlayer = activePlayer === 0 ? 1 : 0;
    curentScore = 0
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')


}


score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
//rolling dice funcionality
btnRoll.addEventListener('click', function () {
    //1. generating a random dice roll
if (playing){

    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    //2. display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // 3. melyik játékos
    if (dice !== 1) {
        // add curent score
        curentScore += dice;

        document.getElementById( `current--${activePlayer}`).textContent= curentScore

    }
    else {
        
        swithcPlayer ()
    }
}
})

btnHold.addEventListener('click', function () {
   // console.log('hold button');
//add curent score to active player
    if (playing) {
        score[activePlayer] += curentScore;
        console.log(score[activePlayer]);
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
    
        // check if score <100
        if (score[activePlayer] >= 100) {
            playing = false
            diceEl.classList.add('hidden');

            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

        
        } else {
            swithcPlayer()
        }

    }

})
btnNew.addEventListener('click', function () {
    playing = true;

    diceEl.classList.add('hidden');
    
     
    score = [0, 0];
    
            document.getElementById(`score--${0}`).textContent = 0;
            document.getElementById(`score--${1}`).textContent = 0;
            document.getElementById('current--0').textContent = 0;
            document.querySelector(`.player--${1}`).classList.remove('player--winner');
    document.querySelector(`.player--${0}`).classList.remove('player--winner');
    curentScore = 0;
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')


}
)