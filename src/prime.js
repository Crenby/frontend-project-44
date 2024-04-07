import readlineSync from 'readline-sync';
import nameQuestion from "../src/cli.js";

function brainPrimeGames() {
    let name = nameQuestion();
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    function isPrime(num) {
        for (let i = 2; i < num; i++) {
          if (num % i === 0) return "no";
        }
        return "yes";
    }

    let score = 0;

    for (let i = 0; i < 3; i++) {
        if(score < 0) {
            break;
        }

        let question = randomInteger(1, 500);

        console.log("Question: " + question);

        const answer = readlineSync.question('Your answer: ');

        if(answer === isPrime(question)) {
            console.log("Correct!");
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isPrime(question)}'. \nLet's try again, ${name}!`);
            score--;
        }
    }

    if(score === 0) {
        console.log(`Congratulations, ${name}!`);
    }
}

export default brainPrimeGames;
