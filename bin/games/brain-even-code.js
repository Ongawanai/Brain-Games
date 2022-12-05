import brainGame from '../../src/index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenOrOdd = (number) => {
  let rightAnswer = '';
  if (number % 2 === 0) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }
  return rightAnswer;
};

const number = () => {
  const questionNumber = Math.floor(Math.random() * 101);
  return questionNumber;
};

const rightAnswer = (num) => {
  const corAnswer = evenOrOdd(num);
  return corAnswer;
};

const brainEven = () => {
  brainGame(description, number, rightAnswer);
};
export default brainEven;
