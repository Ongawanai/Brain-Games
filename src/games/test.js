import readlineSync from 'readline-sync';
import _ from 'lodash';

const findDividers = (number) => {
  const numberDividers = [];
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      numberDividers.push(i);
    }
  }
  return numberDividers;
};

const randomProgression = () => {
  const arrProgression = [];
  let firstNumber = Math.floor(Math.random() * 21);
  let addedNumber = Math.floor(Math.random() * 11);
  for (let n = 0; n < 10; n += 1) {
    if (arrProgression.length === 0) {
      firstNumber = Math.floor(Math.random() * 21);
      addedNumber = Math.floor(Math.random() * 11);
      arrProgression.push(firstNumber);
    } else {
      arrProgression.push(arrProgression[n - 1] + addedNumber);
    }
  }
  return arrProgression;
};
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
console.log(isPrime(1));
console.log('fjf' * 4);
