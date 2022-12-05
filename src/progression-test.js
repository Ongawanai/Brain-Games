import brainGame from './index.js';

const randomProgression = () => {
  const arrProgression = [];
  let firstNumber = Math.floor(Math.random() * 21);
  let addedNumber = Math.floor(Math.random() * 11);
  for (let n = 0; n < 10; n += 1) {
    if (arrProgression.length === 0) {
      firstNumber = Math.floor(Math.random() * 21);
      addedNumber = Math.floor(Math.random() * 10) + 1;
      arrProgression.push(firstNumber);
    } else {
      arrProgression.push(arrProgression[n - 1] + addedNumber);
    }
  }
  return arrProgression;
};

const description = 'What number is missing in the progression?';

const number = () => {
  const questionProgression = randomProgression();
  const randomIndex = Math.floor(Math.random() * 10);
  const missingNumber = questionProgression[randomIndex];
  questionProgression[randomIndex] = '..';
  return { '': questionProgression, num2: missingNumber };
};

const rightAnswer = () => {
  const corAnswer = number(num2);
  return corAnswer;
};

brainGame(description, number, rightAnswer);
