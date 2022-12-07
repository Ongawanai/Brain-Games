import brainGame from '../index.js';

const description = 'What number is missing in the progression?';

const generateRound = () => {
  let firstNumber = Math.floor(Math.random() * 21);
  let addedNumber = Math.floor(Math.random() * 11);
  let fullProgression = [];
  for (let n = 0; n < 10; n += 1) {
    if (fullProgression.length === 0) {
      firstNumber = Math.floor(Math.random() * 21);
      addedNumber = Math.floor(Math.random() * 10) + 1;
      fullProgression.push(firstNumber);
    } else {
      fullProgression.push(fullProgression[n - 1] + addedNumber);
    }
  }
  const randomIndex = Math.floor(Math.random() * 10);
  const rightAnswer = fullProgression[randomIndex];
  fullProgression[randomIndex] = '..';
  fullProgression = fullProgression.join(' ');
  const question = fullProgression;
  return [question, rightAnswer];
};

const brainProgression = () => {
  brainGame(description, generateRound);
};
export default brainProgression;
