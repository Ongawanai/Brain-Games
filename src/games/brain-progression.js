import brainGame from '../index.js';
import generateRandomInRange from '../utils.js';

const description = 'What number is missing in the progression?';

const generateRound = () => {
  let firstNumber = generateRandomInRange(0, 20);
  let addedNumber = generateRandomInRange(1, 10);
  let fullProgression = [];
  for (let n = 0; n < 10; n += 1) {
    if (fullProgression.length === 0) {
      firstNumber = generateRandomInRange(0, 20);
      addedNumber = generateRandomInRange(1, 10);
      fullProgression.push(firstNumber);
    } else {
      fullProgression.push(fullProgression[n - 1] + addedNumber);
    }
  }
  const randomIndex = generateRandomInRange(0, 9);
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
