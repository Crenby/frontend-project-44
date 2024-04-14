import { randomInteger, playGames } from './index.js';

const description = 'What number is missing in the progression?';

function brainProgressionGames() {
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

  return [`${answer}`, strProgression];
}

export default () => playGames(description, brainProgressionGames);
