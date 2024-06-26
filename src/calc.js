import { randomInteger, playGames } from './index.js';

const description = 'What is the result of the expression?';

function brainCalcGames() {
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

export default () => playGames(description, brainCalcGames);
