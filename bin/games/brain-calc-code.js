import readlineSync from 'readline-sync';

const randomOperator = () => {
  const operators = ['+', '-', '*'];
  const n = Math.floor(Math.random() * 3);
  const operator = operators[n];
  return operator;
};

const calc = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');
  let randomNumber1 = 0;
  let randomNumber2 = 0;
  let answer = 0;
  let numberStr = '';
  let number = 0;
  let operator = randomOperator();
  for (let i = 0; i < 3; i += 1) {
    randomNumber1 = Math.floor(Math.random() * 21);
    randomNumber2 = Math.floor(Math.random() * 21);
    operator = randomOperator();
    numberStr = `${randomNumber1} ${operator} ${randomNumber2}`;
    number = Function('return ' + numberStr)();
    console.log(`Question: ${randomNumber1} ${operator} ${randomNumber2}`);
    answer = readlineSync.question('Your answer: ');
    if (Number(answer) === Number(number)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${number}'.\nLet's try again, ${userName}!`);
      i += 4;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
export default calc;
