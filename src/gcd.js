import { randomInteger, playGames } from './index.js';

const description = 'Find the greatest common divisor of given numbers.';

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
  
  const a = randomInteger(1, 50);
  const b = randomInteger(1, 50);
  return [isGcd(a, b), `${a} ${b}`];
}

export default () => playGames(description, brainGcdGames);
