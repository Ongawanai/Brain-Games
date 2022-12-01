import readlineSync from 'readline-sync';
import _ from 'lodash';

const findDividers = (number) => {
  const numberDividers = [];
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      numberDividers.push(i);
    }
  }
  return numberDividers;
};

const gcd = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');
  let firstNumberDividers = [];
  let secondNumberDividers = [];
  let overallDividers = [];
  let greatestDivider = 0;
  let firstNumber = Math.floor(Math.random() * 100) + 1;
  let secondNumber = Math.floor(Math.random() * 100) + 1;
  let answer = '';
  for (let n = 0; n < 3; n += 1) {
    firstNumber = Math.floor(Math.random() * 100) + 1;
    secondNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    firstNumberDividers = findDividers(firstNumber);
    secondNumberDividers = findDividers(secondNumber);
    overallDividers = _.intersection(firstNumberDividers, secondNumberDividers);
    greatestDivider = _.max(overallDividers);
    answer = readlineSync.question('Your answer: ');
    if (Number(answer) === Number(greatestDivider)) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${greatestDivider}'.\nLet's try again, ${userName}!`
      );
      n += 4;
    }
    if (n === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
export default gcd;
