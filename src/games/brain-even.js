import brainGame from '../index.js';
import generateRandomInRange from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const question = `${generateRandomInRange(1, 100)}`;
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const brainEven = () => {
  brainGame(description, generateRound);
};
export default brainEven;
