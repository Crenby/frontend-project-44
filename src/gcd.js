import readlineSync from 'readline-sync';
import nameQuestion from "../src/cli.js";
import {randomInteger, congratulations, isGcd} from "../src/index.js"

function brainGcdGames() {
    let name = nameQuestion();
    console.log("Find the greatest common divisor of given numbers.");

    function createGcd() {
        let a = randomInteger(1, 50);
        let b = randomInteger(1, 50);
        return [`${a} ${b}`, isGcd(a, b)];
    }

    let score = 0;

    for(let i = 0; i < 3; i++) {
        if(score < 0) break;

        let question = createGcd();

        console.log("Question: " + question[0]);

        const answer = readlineSync.question('Your answer: ');

        if(+answer === question[1]) {
            console.log("Correct!");
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${question[1]}'. \nLet's try again, ${name}!`);
            score--;
        }
    }

    congratulations(score, name);
}

export default brainGcdGames;