import readlineSync from 'readline-sync';
import nameQuestion from './cli.js';
import { randomInteger, congratulations, isGcd } from './index.js';

function brainGcdGames() {
  const name = nameQuestion();
  console.log('Find the greatest common divisor of given numbers.');

  function createGcd() {
    const a = randomInteger(1, 50);
    const b = randomInteger(1, 50);
    return [`${a} ${b}`, isGcd(a, b)];
  }

  let score = 0;

  for (let i = 0; i < 3; i += 1) {
    if (score < 0) break;

    const question = createGcd();

    console.log(`Question: ${question[0]}`);

    const answer = readlineSync.question('Your answer: ');

    if (+answer === question[1]) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${question[1]}'. \nLet's try again, ${name}!`);
      score -= 1;
    }
  }

  congratulations(score, name);
}

export default brainGcdGames;
