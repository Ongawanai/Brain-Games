#!/usr/bin/env node
import readlineSync from 'readline-sync';

const isEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  let number = 0;
  let answer = '';
  let realAnswer = '';
  while (i < 3) {
    number = Math.floor(Math.random() * 101);
    if (number % 2 === 0) {
      realAnswer = 'yes';
    } else {
      realAnswer = 'no';
    }
    console.log(`Question: ${number}`);
    answer = readlineSync.question('Your answer: ');
    if (answer === 'yes' && number % 2 === 0) {
      console.log('Correct!');
      i += 1;
    } else if (answer === 'no' && number % 2 === 1) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(
        `${answer} is wrong answer ;(. Correct answer was ${realAnswer}.\nLet's try again, ${userName}`
      );
      i += 4;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
isEven();
