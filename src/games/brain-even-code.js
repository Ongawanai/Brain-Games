import brainGame from '../../src/index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const question = Math.floor(Math.random() * 101);
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
