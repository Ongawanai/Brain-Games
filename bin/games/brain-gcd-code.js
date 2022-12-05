import _ from 'lodash';
import brainGame from '../../src/index.js';

const findDividers = (number) => {
  const numberDividers = [];
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      numberDividers.push(i);
    }
  }
  return numberDividers;
};

const description = 'Find the greatest common divisor of given numbers.';

const number = () => {
  const firstNumber = Math.floor(Math.random() * 100) + 1;
  const secondNumber = Math.floor(Math.random() * 100) + 1;
  let array = [];
  array.push(firstNumber, secondNumber);
  array = array.join(' ');
  return array;
};

const rightAnswer = (arr) => {
  const numbersArray = arr.split(' ');
  const firstNumberDividers = findDividers(numbersArray[0]);
  const secondNumberDividers = findDividers(numbersArray[1]);
  const overallDividers = _.intersection(firstNumberDividers, secondNumberDividers);
  const corAnswer = _.max(overallDividers);
  return corAnswer;
};

const brainGcd = () => {
  brainGame(description, number, rightAnswer);
};
export default brainGcd;
