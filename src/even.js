import { randomInteger, playGames } from './index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

function brainEvenGames() {
  const num = randomInteger(1, 100);
  return [num % 2 ? 'no' : 'yes', num];
}

export default () => playGames(description, brainEvenGames);
