import brainGame from '../index.js';
import generateRandomInRange from '../utils.js';

const getGcd = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }

  return getGcd(num2 % num1, num1);
};

const description = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const firstNumber = generateRandomInRange(1, 100);
  const secondNumber = generateRandomInRange(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const rightAnswer = `${getGcd(firstNumber, secondNumber)}`;

  return [question, rightAnswer];
};

const brainGcd = () => {
  brainGame(description, generateRound);
};

export default brainGcd;
