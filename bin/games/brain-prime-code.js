import brainGame from '../../src/index.js';

const isPrime = (num) => {
  let prime = '';
  if (num <= 1) {
    prime = 'no';
  }
  for (let n = 2; n <= num; n += 1) {
    if (num % n === 0 && n < num) {
      prime = 'no';
      return prime;
    }
    if (n === num) {
      prime = 'yes';
    }
  }
  return prime;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const number = () => {
  const questionNumber = Math.floor(Math.random() * 150) + 1;
  return questionNumber;
};

const rightAnswer = (num) => {
  const corAnswer = isPrime(num);
  return corAnswer;
};
const brainPrime = () => {
  brainGame(description, number, rightAnswer);
};
export default brainPrime;
