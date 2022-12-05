import brainGame from '../../src/index.js';

const randomOperator = () => {
  const operators = ['+', '-', '*'];
  const n = Math.floor(Math.random() * 3);
  const operator = operators[n];
  return operator;
};

const description = 'What is the result of the expression?';

const number = () => {
  const randomNumber1 = Math.floor(Math.random() * 21);
  const randomNumber2 = Math.floor(Math.random() * 21);
  const operator = randomOperator();
  const numberStr = `${randomNumber1} ${operator} ${randomNumber2}`;
  return numberStr;
};

const rightAnswer = (string) => {
  const corAnswer = Function('return ' + string)();
  return corAnswer;
};

const brainCalc = () => {
  brainGame(description, number, rightAnswer);
};
export default brainCalc;
