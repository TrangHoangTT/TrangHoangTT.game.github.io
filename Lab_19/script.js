'use strict';
// Lựa chọn và thao tác các element

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 18;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// Xử lí Click Events
let secretNumber = Math.trunc(Math.random() * 100 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
function disableBtnAndInput() {
  document.querySelector('.check').setAttribute('disabled', 'disabled');
  document.querySelector('.check').style.cursor = 'no-drop';
  document.querySelector('.guess').setAttribute('disabled', 'disabled');
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('.number').textContent = secretNumber;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('🚫 No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    disableBtnAndInput();

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too hight!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#B22222';
      disableBtnAndInput();
    }
  }
});
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📈 Too hight!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game';
//       document.querySelector('.number').textContent = secretNumber;
//       document.querySelector('.score').textContent = 0;
//       document.querySelector('body').style.backgroundColor = '#B22222';
//       document.querySelector('.check').setAttribute('disabled', 'disabled');
//       document.querySelector('.check').style.cursor = 'no-drop';
//       document.querySelector('.guess').setAttribute('disabled', 'disabled');
//     }
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📉 Too low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game';
//       document.querySelector('.number').textContent = secretNumber;
//       document.querySelector('.score').textContent = 0;
//       document.querySelector('body').style.backgroundColor = '#B22222';
//       document.querySelector('.check').setAttribute('disabled', 'disabled');
//       document.querySelector('.check').style.cursor = 'no-drop';
//       document.querySelector('.guess').setAttribute('disabled', 'disabled');
//     }
//   }
// });
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 100 + 1);
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('.check').removeAttribute('disabled');
  document.querySelector('.check').style.cursor = 'pointer';
  document.querySelector('.guess').removeAttribute('disabled');

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
