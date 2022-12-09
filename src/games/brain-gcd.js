import _ from 'lodash';
import brainGame from '../index.js';
import generateRandomInRange from '../utils.js';

const findDividers = (number) => {
  const numberDividers = [];
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      numberDividers.push(i);
    }
  }
  return numberDividers;
};

const findGCD = (number1, number2) => {
  const firstNumberDividers = findDividers(number1);
  const secondNumberDividers = findDividers(number2);
  const overallDividers = _.intersection(firstNumberDividers, secondNumberDividers);
  const gcd = _.max(overallDividers);
  return gcd;
};

const description = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const firstNumber = generateRandomInRange(1, 100);
  const secondNumber = generateRandomInRange(1, 100);
  let question = [firstNumber, secondNumber];
  const rightAnswer = findGCD(question[0], question[1]);
  question = question.join(' ');
  return [question, rightAnswer];
};

const brainGcd = () => {
  brainGame(description, generateRound);
};
export default brainGcd;
