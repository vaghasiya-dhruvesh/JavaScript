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