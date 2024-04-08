import readlineSync from 'readline-sync';
import nameQuestion from './cli.js';
import { randomInteger, congratulations, isEven } from './index.js';

function brainEvenGames() {
  const name = nameQuestion();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let score = 0;

  for (let i = 0; i < 3; i++) {
    if (score < 0) break;

    const question = randomInteger(1, 100);

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer === isEven(question)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven(question)}'. \nLet's try again, ${name}!`);
      score--;
    }
  }

  congratulations(score, name);
}

export default brainEvenGames;
