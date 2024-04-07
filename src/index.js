function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function congratulations(score, name) {
  if(score === 0) {
    console.log(`Congratulations, ${name}!`);
  }
}

function isEven(num) {
  return num % 2 ? "no" : "yes";
}

function isGcd() {
  let x = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    let y = arguments[i];
    while (x && y) {
      x > y ? x %= y : y %= x;
    }
    x += y;
  }
  return x;
}

export {randomInteger, congratulations, isEven, isGcd};