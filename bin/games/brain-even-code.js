import readlineSync from 'readline-sync';

const evenOrOdd = (number) => {
  let rightAnswer = '';
  if (number % 2 === 0) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }
  return rightAnswer;
};

const isEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let number = 0;
  let answer = '';
  let rightAnswer = '';
  for (let i = 0; i < 3; i += 1) {
    number = Math.floor(Math.random() * 101);
    rightAnswer = evenOrOdd(number);
    console.log(`Question: ${number}`);
    answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}`);
      i += 4;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default isEven;
