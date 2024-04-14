import readlineSync from 'readline-sync';

function randomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const countRound = 3;

function playGames(description, getAnswerAndQuestion) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  for (let i = 0; i < countRound; i += 1) {
    const [correctAnswer, question] = getAnswerAndQuestion();

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`);
    }
  }

  console.log(`Congratulations, ${name}!`);
}

export {
  randomInteger, playGames,
};
