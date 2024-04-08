import readlineSync from 'readline-sync';
import nameQuestion from './cli.js';
import { randomInteger, congratulations } from './index.js';

function brainCalcGames() {
  const name = nameQuestion();

  function randomOperation() {
    const rand = 1 + Math.random() * 3;
    const oneNum = randomInteger(1, 20);
    const twoNum = randomInteger(1, 20);

    if (Math.floor(rand) === 1) {
      return [`${oneNum + twoNum}`, `${oneNum} + ${twoNum}`];
    } if (Math.floor(rand) === 2) {
      return [`${oneNum - twoNum}`, `${oneNum} - ${twoNum}`];
    }
    return [`${oneNum * twoNum}`, `${oneNum} * ${twoNum}`];
  }

  let score = 0;

  for (let i = 0; i < 3; i++) {
    if (score < 0) break;

    console.log('What is the result of the expression?');

    const question = randomOperation();

    console.log(`Question: ${question[1]}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer === question[0]) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${question[0]}'. \nLet's try again, ${name}!`);
      score--;
    }
  }

  congratulations(score, name);
}

export default brainCalcGames;
