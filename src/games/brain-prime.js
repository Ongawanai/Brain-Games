import brainGame from '../index.js';
import generateRandomInRange from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let isNumberPrime = '';
  if (number <= 1) {
    isNumberPrime = 'no';
  }
  for (let n = 2; n <= number; n += 1) {
    if (number % n === 0 && n < number) {
      isNumberPrime = 'no';
      break;
    }
    if (n === number) {
      isNumberPrime = 'yes';
    }
  }
  return isNumberPrime;
};

const generateRound = () => {
  const question = generateRandomInRange(1, 150);
  const rightAnswer = isPrime(question);
  return [question, rightAnswer];
};
const brainPrime = () => {
  brainGame(description, generateRound);
};
export default brainPrime;
