import readlineSync from 'readline-sync';
import nameQuestion from './cli.js';
import { randomInteger, congratulations } from './index.js';

function brainPrimeGames() {
  const name = nameQuestion();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return 'no';
    }
    return 'yes';
  }

  let score = 0;

  for (let i = 0; i < 3; i++) {
    if (score < 0) break;

    const question = randomInteger(1, 500);

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer === isPrime(question)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isPrime(question)}'. \nLet's try again, ${name}!`);
      score--;
    }
  }
  congratulations(score, name);
}

export default brainPrimeGames;
