import { randomInteger, playGames } from './index.js';

function brainEvenGames() {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';

  function isEven() {
    const num = randomInteger(1, 100);
    return [num % 2 ? 'no' : 'yes', num];
  }

  playGames(description, isEven);
}

export default brainEvenGames;
