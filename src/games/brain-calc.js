import brainGame from '../index.js';
import generateRandomInRange from '../utils.js';

const description = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];

  return operators[generateRandomInRange(0, operators.length - 1)];
};

const calculateNumbers = (number, operator, number2) => {
  switch (operator) {
    case '+':
      return number + number2;
    case '-':
      return number - number2;
    case '*':
      return number * number2;
    default:
      throw new Error(`Operator ${operator} is incorrect`);
  }
};

const generateRound = () => {
  const operator = getRandomOperator();
  const randomNumber1 = generateRandomInRange(0, 20);
  const randomNumber2 = generateRandomInRange(0, 20);
  const question = `${randomNumber1} ${operator} ${randomNumber2}`;
  const rightAnswer = `${calculateNumbers(randomNumber1, operator, randomNumber2)}`;

  return [question, rightAnswer];
};

const brainCalc = () => {
  brainGame(description, generateRound);
};

export default brainCalc;
