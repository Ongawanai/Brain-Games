import brainGame from '../index.js';

const description = 'What is the result of the expression?';

const generateRound = () => {
  const operators = ['+', '-', '*'];
  const n = Math.floor(Math.random() * 3);
  const operator = operators[n];
  const randomNumber1 = Math.floor(Math.random() * 21);
  const randomNumber2 = Math.floor(Math.random() * 21);
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
