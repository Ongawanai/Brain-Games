import brainGame from '../index.js';
import generateRandomInRange from '../utils.js';

const description = 'What number is missing in the progression?';

const generateProgression = (firstNumber, addedNumber, length) => {
  const progression = [firstNumber];
  for (let n = 1; n < length; n += 1) {
    progression.push(progression[n - 1] + addedNumber);
  }

  return progression;
};

const generateRound = () => {
  const firstNumber = generateRandomInRange(0, 20);
  const addedNumber = generateRandomInRange(1, 10);
  const progressionLength = generateRandomInRange(5, 10);

  const fullProgression = generateProgression(firstNumber, addedNumber, progressionLength);

  const randomIndex = generateRandomInRange(0, progressionLength - 1);
  const rightAnswer = `${fullProgression[randomIndex]}`;
  fullProgression[randomIndex] = '..';
  const question = `${fullProgression.join(' ')}`;

  return [question, rightAnswer];
};

const brainProgression = () => {
  brainGame(description, generateRound);
};
export default brainProgression;
