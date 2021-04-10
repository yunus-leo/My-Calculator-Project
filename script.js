// Get all UI elements
let input = document.querySelector('.input');
let container = document.querySelector('.container');
let keys = document.querySelector('.keys');
let equal = document.querySelector('#equal');
let finalAnswer = document.querySelector('.finalAnswer');

// Add event Listener
document.querySelector('.btn').addEventListener('click', function (e) {
  // Change input color
  input.style.color = 'grey';

  if (e.target.textContent === 'c') {
    input.textContent = '';
    finalAnswer.textContent = '';
  } else if (e.target.textContent === 'x') {
    input.textContent += '*';
  } else if (e.target.textContent === '=') {
    let answer = eval(input.textContent);

    // input.textContent = answer;
    finalAnswer.textContent = answer;

    // input.insertAdjacentText('beforebegin', answer);
  } else {
    input.textContent += e.target.textContent;
  }
});
