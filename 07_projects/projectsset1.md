# Projects related to DOM

## project link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-asxbn57u?file=1-colorChanger%2Findex.html)



# Solution code

## project 1  :- Color Changer


```javascript
const btn = document.querySelectorAll('.button');
const body = document.querySelector('body');

btn.forEach(function (button) {
  // console.log(button)
  button.addEventListener('click', function (e) {
    // console.log(e)
    // console.log(e.target)
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## project 2 :- BMI Generator

```javascript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let text = "";

    if(bmi<18.6){
      text = "Under Weight";
    }
    else if(bmi < 24.9){
      text = "Normal Range";
    }
    else  text = "Overweight"

    result.innerHTML = `<span>${bmi}</span> <span>${text}</span>`;
  }
});

```

## Project 3 :- DigitalClock

``` javascript
const clock = document.getElementById('clock');
// const date = new Date();
// console.log(date.toLocaleTimeString());

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```


## Project 4 :- GuessTheNumber

``` javascript
let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const input = document.querySelector('#guessField');
const gueesSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let countGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault(); // this will hold the form value instead of directly passing to the server
    let guess = parseInt(input.value);
    validation(guess);
  });
}

// Validation() method -- ensure that input value is valid input or not. If it is valid input then it will then pass to the checkGuess() method for futher processing
function validation(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess <= 0) {
    // Cover all edge cases
    alert('Please enter a number greater than 0');
  } else if (guess > 100) {
    alert('Please enter a number smaller than 100');
  } else {
    if (countGuess == 11) {
      // check that limit is over or not
      displayGuess(guess);
      displayMsg(`Game Over... Random number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNum) {
    displayMsg('You guessed it right');
    endGame();
  } else if (guess < randomNum) {
    displayMsg('Number is Too low');
  } else {
    displayMsg('Number is Too high');
  }
}

function displayGuess(guess) {
  input.innerHTML = '';
  gueesSlot.innerHTML += `${guess}, `;
  countGuess++;
  remaining.innerHTML = `${11 - countGuess} `;
}

function displayMsg(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  input.value = '';
  input.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newBtn = document.querySelector('#newGame');
  newBtn.addEventListener('click', function (e) {
    randomNum = parseInt(Math.random() * 100 + 1);
    countGuess = 1;
    gueesSlot.innerHTML = '';
    remaining.innerHTML = `${11 - countGuess}`;
    input.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```

## Project 5 :- Keyboard

``` javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  // console.log(e.key);
  // console.log(e.keyCode);
  // console.log(e.code)
  insert.innerHTML = `
  <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});
```


## Project 6 :- unlimitedColors

``` javascript
//generate a random color
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const start = function () {
  if (!intervalId) {
    intervalId = setInterval(changeColor, 1000);
  }

  function changeColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stop = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', start);

document.querySelector('#stop').addEventListener('click', stop);

```