import readlineSync from 'readline-sync';

const randomProgression = () => {
  const arrProgression = [];
  let firstNumber = Math.floor(Math.random() * 21);
  let addedNumber = Math.floor(Math.random() * 11);
  for (let n = 0; n < 10; n += 1) {
    if (arrProgression.length === 0) {
      firstNumber = Math.floor(Math.random() * 21);
      addedNumber = Math.floor(Math.random() * 10) + 1;
      arrProgression.push(firstNumber);
    } else {
      arrProgression.push(arrProgression[n - 1] + addedNumber);
    }
  }
  return arrProgression;
};

const progression = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');
  let randomIndex = Math.floor(Math.random() * 10);
  let rightAnser = 0;
  let fullProgression = [];
  let answer = '';
  for (let i = 0; i < 3; i += 1) {
    fullProgression = randomProgression();
    randomIndex = Math.floor(Math.random() * 10);
    rightAnser = fullProgression[randomIndex];
    fullProgression[randomIndex] = '..';
    console.log(`Question: ${fullProgression}`);
    answer = readlineSync.question('Your answer: ');
    if (Number(answer) === Number(rightAnser)) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${rightAnser}'.\nLet's try again, ${userName}!`
      );
      i += 4;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
export default progression;
