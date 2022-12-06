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
  const randomIndex = Math.floor(Math.random() * 9) + 1;
  const missingNumber = questionProgression[randomIndex];
  questionProgression[randomIndex] = '..';
  return questionProgression;
};

const rightAnswer = (arr) => {
  for (let i = 0; i < 10; i += 1) {
    if (arr[i] === '..') {
      const addedNumber = (arr[i + 1] - arr[i - 1]) / 2;
      const corAnswer = arr[i - 1] + addedNumber;
      return corAnswer;
    }
  }
};

brainGame(description, number, rightAnswer);

import readlineSync from 'readline-sync';

const randomProgression = () => {
  const fullProgression = [];
  let firstNumber = Math.floor(Math.random() * 21);
  let addedNumber = Math.floor(Math.random() * 11);
  for (let n = 0; n < 10; n += 1) {
    if (fullProgression.length === 0) {
      firstNumber = Math.floor(Math.random() * 21);
      addedNumber = Math.floor(Math.random() * 10) + 1;
      fullProgression.push(firstNumber);
    } else {
      fullProgression.push(fullProgression[n - 1] + addedNumber);
    }
  }
  return fullProgression;
};
//второй вариант:
const progression = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');
  let randomIndex = 0;
  let rightAnswer = 0;
  let fullProgression = [];
  let answer = '';
  for (let i = 0; i < 3; i += 1) {
    fullProgression = randomProgression();
    randomIndex = Math.floor(Math.random() * 10);
    rightAnswer = fullProgression[randomIndex];
    fullProgression[randomIndex] = '..';
    fullProgression = fullProgression.join(' ');
    console.log(`Question: ${fullProgression}`);
    answer = readlineSync.question('Your answer: ');
    if (Number(answer) === Number(rightAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      i += 4;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
export default progression;
