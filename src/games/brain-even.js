import brainGame from '../index.js';
import generateRandomInRange from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const question = generateRandomInRange(1, 100);
  let rightAnswer = '';
  if (question % 2 === 0) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }
  return [question, rightAnswer];
};

const brainEven = () => {
  brainGame(description, generateRound);
};
export default brainEven;
