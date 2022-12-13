import brainGame from '../index.js';
import generateRandomInRange from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let n = 2; n < number; n += 1) {
    if (number % n === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const question = `${generateRandomInRange(1, 150)}`;
  const rightAnswer = `${isPrime(question) ? 'yes' : 'no'}`;
  return [question, rightAnswer];
};
const brainPrime = () => {
  brainGame(description, generateRound);
};
export default brainPrime;
