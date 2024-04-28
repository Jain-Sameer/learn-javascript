let RandomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');

const remaining = document.querySelector('.lastResult');
const lowORhigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //to check if valid input or not
  if (isNaN(guess)) {
    alert('Please enter a valid number.');
  } else if (guess < 1 || guess > 100) {
    alert('Please enter a number between 1-100');
  } else {
    prevGuess.push(guess);
    if (numGuess > 10) {
      displayGuess(guess);
      displayMessage('Game Over! Random number was ' + RandomNumber);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // check userGuess
  if (guess === RandomNumber) {
    displayMessage(`You guesses it right!`);
  } else if (guess < RandomNumber) {
    displayMessage(`Number is too low!`);
  } else if (guess > RandomNumber) {
    displayMessage(`Number is High!`);
  }
}
function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  // display success or failure!
  lowORhigh.innerHTML = `<h2>${message}</h2>`;
}

function newGame() {
  // start a new game
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    RandomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h3 id="newGame">Start new Game</h3>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
