import readlineSync from 'readline-sync';
import nameQuestion from './cli.js';
import { randomInteger, congratulations } from './index.js';

function brainProgressionGames() {
  const name = nameQuestion();
  console.log('What number is missing in the progression?');

  function createProgression() {
    const stepProgression = randomInteger(2, 5);
    const progressionLength = randomInteger(5, 10);
    const posHiddenElement = randomInteger(2, progressionLength - 1);

    const arr = [];

    for (let i = 1; i <= progressionLength; i += 1) {
      arr[i - 1] = stepProgression * i;
    }

    const answer = arr[posHiddenElement - 1];

    arr[posHiddenElement - 1] = '..';

    const strProgression = arr.join(' ');

    return [strProgression, answer];
  }

  let score = 0;

  for (let i = 0; i < 3; i += 1) {
    if (score < 0) break;

    const question = createProgression();

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

export default brainProgressionGames;
