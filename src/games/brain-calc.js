import brainGame from '../index.js';
import generateRandomInRange from '../utils.js';

const description = 'What is the result of the expression?';

const generateRound = () => {
  const operators = ['+', '-', '*'];
  const n = generateRandomInRange(0, 2);
  const operator = operators[n];
  const randomNumber1 = generateRandomInRange(0, 20);
  const randomNumber2 = generateRandomInRange(0, 20);
  const question = `${randomNumber1} ${operator} ${randomNumber2}`;
  let rightAnswer = 0;
  switch (operator) {
    case '+':
      rightAnswer = randomNumber1 + randomNumber2;
      break;
    case '-':
      rightAnswer = randomNumber1 - randomNumber2;
      break;
    case '*':
      rightAnswer = randomNumber1 * randomNumber2;
      break;
    default:
      rightAnswer = undefined;
  }
  return [question, rightAnswer];
};

const brainCalc = () => {
  brainGame(description, generateRound);
};
export default brainCalc;
