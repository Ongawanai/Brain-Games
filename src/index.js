import readlineSync from 'readline-sync';

const brainGame = (description, number, rightAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  let answer = '';
  for (let i = 0; i < 3; i += 1) {
    const question = number();
    const correctAnswer = rightAnswer(question);
    console.log(`Question: ${question}`);
    answer = readlineSync.question('Your answer: ');
    if (String(answer) !== String(correctAnswer)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default brainGame;
