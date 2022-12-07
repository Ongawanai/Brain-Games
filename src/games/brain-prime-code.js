import brainGame from '../../src/index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  const question = Math.floor(Math.random() * 150) + 1;
  let rightAnswer = '';
  if (question <= 1) {
    rightAnswer = 'no';
  }
  for (let n = 2; n <= question; n += 1) {
    if (question % n === 0 && n < question) {
      rightAnswer = 'no';
      break;
    }
    if (n === question) {
      rightAnswer = 'yes';
    }
  }
  return [question, rightAnswer];
};
const brainPrime = () => {
  brainGame(description, generateRound);
};
export default brainPrime;
