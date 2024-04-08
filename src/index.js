function randomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function congratulations(score, name) {
  if (score === 0) {
    console.log(`Congratulations, ${name}!`);
  }
}

function isEven(num) {
  return num % 2 ? 'no' : 'yes';
}

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
  return a + b;
}

export {
  randomInteger, congratulations, isEven, isGcd,
};
