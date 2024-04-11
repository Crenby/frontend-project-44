import { randomInteger, playGames } from './index.js';

function brainPrimeGames() {
  function isPrime() {
    const num = randomInteger(1, 500);
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) return ['no', num];
    }
    return ['yes', num];
  }

  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  playGames(description, isPrime);
}

export default brainPrimeGames;
