import readlineSync from 'readline-sync';

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

const primeGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let num = Math.floor(Math.random() * 150) + 1;
  let rightAnswer = '';
  let answer = '';
  for (let i = 0; i < 3; i += 1) {
    num = Math.floor(Math.random() * 150) + 1;
    rightAnswer = isPrime(num);
    console.log(`Question: ${num}`);
    answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      i += 4;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
export default primeGame;
