import readlineSync from 'readline-sync';
import nameQuestion from '../src/cli.js';
import { randomInteger, congratulations } from '../src/index.js';

function brainCalcGames() {
  let name = nameQuestion();

  function randomOperation() {
    let rand = 1 + Math.random() * 3;
    let oneNum = randomInteger(1, 20);
    let twoNum = randomInteger(1, 20);

    if (Math.floor(rand) === 1) {
      return [`${oneNum + twoNum}`, `${oneNum} + ${twoNum}`];
    } else if (Math.floor(rand) === 2) {
      return [`${oneNum - twoNum}`, `${oneNum} - ${twoNum}`];
    } else {
      return [`${oneNum * twoNum}`, `${oneNum} * ${twoNum}`];
    }
  }

  let score = 0;

  for (let i = 0; i < 3; i++) {
    if (score < 0) break;

    console.log("What is the result of the expression?");

    let question = randomOperation();

    console.log("Question: " + question[1]);

    const answer = readlineSync.question('Your answer: ');

    if (answer === question[0]) {
      console.log("Correct!");
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${question[0]}'. \nLet's try again, ${name}!`);
      score--;
    }
  }

  congratulations(score, name);
}

export default brainCalcGames;