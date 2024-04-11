import { randomInteger, playGames } from './index.js';

function brainGcdGames() {
  function isGcd(numOne, numTwo) {
    let a = numOne;
    let b = numTwo;
    while (a !== 0 && b !== 0) {
      if (a > b) {
        a %= b;
      } else {
        b %= a;
      }
    }
    return `${a + b}`;
  }

  function createGcd() {
    const a = randomInteger(1, 50);
    const b = randomInteger(1, 50);
    return [isGcd(a, b), `${a} ${b}`];
  }

  const description = 'Find the greatest common divisor of given numbers.';

  playGames(description, createGcd);
}

export default brainGcdGames;
